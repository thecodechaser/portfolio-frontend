import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors ${
        scrolled
          ? 'border-hairline bg-bg/75 backdrop-blur-md'
          : 'border-transparent bg-bg/40 backdrop-blur'
      }`}
    >
      <div className="container-page flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group" aria-label="thecodechaser home">
          <span
            className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-border bg-elevated text-accent font-mono text-sm group-hover:border-accent-ring transition-colors"
            aria-hidden
          >
            ~/
          </span>
          <span className="text-[15px] font-medium tracking-tight">
            <span className="text-subtle">the</span>
            <span className="text-fg">code</span>
            <span className="text-subtle">chaser</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {menuItems.map((item) => {
            const active = item.path === pathname;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  active
                    ? 'text-fg bg-muted'
                    : 'text-subtle hover:text-fg hover:bg-muted/60'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/resume"
            className="inline-flex items-center gap-2 h-9 px-4 rounded-md bg-accent text-bg text-sm font-medium hover:bg-accent-hover transition-colors"
          >
            Resume
            <span aria-hidden>→</span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-border text-fg hover:border-accent-ring transition-colors"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden border-t border-hairline bg-bg/95 backdrop-blur-md transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-page py-4 flex flex-col gap-1">
          {menuItems.map((item) => {
            const active = item.path === pathname;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2.5 rounded-md text-base transition-colors ${
                  active ? 'text-fg bg-muted' : 'text-subtle hover:text-fg hover:bg-muted/60'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <Link
            to="/resume"
            className="mt-2 inline-flex items-center justify-center gap-2 h-10 rounded-md bg-accent text-bg text-sm font-medium hover:bg-accent-hover"
          >
            Resume
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
