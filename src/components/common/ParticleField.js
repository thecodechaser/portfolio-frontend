/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';

/**
 * Lightweight node-graph canvas — drifting points joined by proximity links,
 * with a handful of accent nodes that breathe. Monochrome + a single accent.
 *
 * Deliberately dependency-free: full control over the look, no bundle cost,
 * and it pauses itself when scrolled out of view or when the user prefers
 * reduced motion.
 */

const ACCENT = '163, 230, 53';

const ParticleField = ({
  className = '',
  density = 0.00022,
  maxNodes = 110,
  linkDistance = 150,
  speed = 0.16,
  accentEvery = 7,
  interactive = true,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');

    let width = 0;
    let height = 0;
    let nodes = [];
    let frame = 0;
    let running = true;
    const pointer = { x: -9999, y: -9999, active: false };

    const reduced = window.matchMedia
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const measure = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      const count = Math.round(
        Math.min(maxNodes, Math.max(24, width * height * density)),
      );
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        r: 0.7 + Math.random() * 1.1,
        accent: i % accentEvery === 0,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const step = (time) => {
      ctx.clearRect(0, 0, width, height);

      const linkSq = linkDistance * linkDistance;
      const pointerSq = 130 * 130;

      for (let i = 0; i < nodes.length; i += 1) {
        const n = nodes[i];

        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
          n.x = Math.max(0, Math.min(width, n.x));
          n.y = Math.max(0, Math.min(height, n.y));
        }

        // gentle drift away from the cursor
        if (pointer.active) {
          const dx = n.x - pointer.x;
          const dy = n.y - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < pointerSq && d2 > 0.01) {
            const push = (1 - d2 / pointerSq) * 0.6;
            const d = Math.sqrt(d2);
            n.x += (dx / d) * push;
            n.y += (dy / d) * push;
          }
        }
      }

      // proximity links
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < linkSq) {
            const t = 1 - d2 / linkSq;
            const hot = a.accent || b.accent;
            ctx.strokeStyle = hot
              ? `rgba(${ACCENT}, ${t * 0.34})`
              : `rgba(255, 255, 255, ${t * 0.24})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // cursor tether
      if (pointer.active) {
        for (let i = 0; i < nodes.length; i += 1) {
          const n = nodes[i];
          const dx = n.x - pointer.x;
          const dy = n.y - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < pointerSq) {
            const t = 1 - d2 / pointerSq;
            ctx.strokeStyle = `rgba(${ACCENT}, ${t * 0.3})`;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (let i = 0; i < nodes.length; i += 1) {
        const n = nodes[i];
        if (n.accent) {
          const pulse = 0.6 + 0.4 * Math.sin(time * 0.0016 + n.phase);
          ctx.shadowBlur = 10;
          ctx.shadowColor = `rgba(${ACCENT}, 0.55)`;
          ctx.fillStyle = `rgba(${ACCENT}, ${0.55 + pulse * 0.4})`;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r + 0.7 + pulse * 0.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        } else {
          ctx.fillStyle = 'rgba(250, 250, 250, 0.62)';
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (running && !reduced) frame = requestAnimationFrame(step);
    };

    const start = () => {
      if (running) return;
      running = true;
      frame = requestAnimationFrame(step);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    const init = () => {
      measure();
      seed();
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(step);
    };

    init();

    const onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const onPointerLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };

    const parent = canvas.parentElement;
    if (interactive && parent) {
      parent.addEventListener('pointermove', onPointerMove);
      parent.addEventListener('pointerleave', onPointerLeave);
    }

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(init, 150);
    };
    window.addEventListener('resize', onResize);

    // idle when off-screen
    let observer;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        ([entry]) => (entry.isIntersecting ? start() : stop()),
        { threshold: 0 },
      );
      observer.observe(canvas);
    }

    return () => {
      stop();
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      if (observer) observer.disconnect();
      if (interactive && parent) {
        parent.removeEventListener('pointermove', onPointerMove);
        parent.removeEventListener('pointerleave', onPointerLeave);
      }
    };
  }, [density, maxNodes, linkDistance, speed, accentEvery, interactive]);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
};

export default ParticleField;
