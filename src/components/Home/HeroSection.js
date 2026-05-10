import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/solid';
import profilePicture from '../../assets/images/profilePicture2.jpg';

const traits = [
  'Full-stack engineer',
  'Clean-code obsessive',
  'Remote-first',
  'Amateur astronomer',
];

const HeroSection = () => (
  <section className="relative pt-16 md:pt-24 pb-12 md:pb-20">
    <div className="absolute inset-0 -z-10 bg-grid pointer-events-none" aria-hidden />

    <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-elevated">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="mono text-xs text-subtle">
            Available for new opportunities
          </span>
        </div>

        <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tightest leading-[1.05]">
          Software engineer
          <br />
          building thoughtful
          <br />
          <span className="text-subtle">web experiences.</span>
        </h1>

        <p className="mt-6 max-w-xl text-base md:text-lg text-subtle leading-relaxed">
          I&apos;m
          {' '}
          <span className="text-fg">Ranjeet Singh</span>
          {' '}
          — currently shipping product at
          {' '}
          <a
            href="https://modelia.ai"
            target="_blank"
            rel="noreferrer"
            className="text-fg underline decoration-accent decoration-2 underline-offset-4 hover:text-accent transition-colors"
          >
            Modelia AI
          </a>
          . 3+ years writing React, Vue, Rails, and the occasional bit of Java —
          with a soft spot for performance, type safety, and clean APIs.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 h-11 px-5 rounded-md bg-accent text-bg text-sm font-semibold hover:bg-accent-hover transition-colors"
          >
            Get in touch
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 h-11 px-5 rounded-md border border-border text-fg text-sm font-medium hover:border-accent-ring hover:text-accent transition-colors"
          >
            View work
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {traits.map((t) => (
            <span
              key={t}
              className="mono text-xs text-subtle px-2.5 py-1 rounded-md border border-hairline bg-surface"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        className="relative justify-self-center md:justify-self-end"
      >
        <div className="absolute -inset-6 rounded-full bg-accent-soft blur-3xl" aria-hidden />
        <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border border-border bg-elevated overflow-hidden shadow-card">
          <img
            src={profilePicture}
            alt="Ranjeet Singh"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="absolute -bottom-3 -right-3 mono text-[11px] uppercase tracking-widest text-faint px-2.5 py-1 rounded-md border border-border bg-surface"
          aria-hidden
        >
          @thecodechaser
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
