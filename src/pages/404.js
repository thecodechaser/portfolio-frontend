import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/solid';

const NotFound = () => (
  <motion.section
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative min-h-[70vh] flex flex-col items-center justify-center text-center pt-16 pb-24"
  >
    <div className="absolute inset-0 -z-10 bg-grid pointer-events-none" aria-hidden />

    <p className="mono text-xs uppercase tracking-widest text-faint">Error 404</p>
    <h1 className="mt-3 text-5xl md:text-7xl font-semibold tracking-tightest">
      <span className="text-accent">404</span>
      {' '}
      — lost your way?
    </h1>
    <p className="mt-5 max-w-md text-base text-subtle leading-relaxed">
      The page you&apos;re looking for doesn&apos;t exist or has been moved.
    </p>
    <div className="mt-8 flex items-center gap-3">
      <Link
        to="/"
        className="inline-flex items-center gap-2 h-11 px-5 rounded-md bg-accent text-bg text-sm font-semibold hover:bg-accent-hover transition-colors"
      >
        Go home
        <ArrowRightIcon className="h-4 w-4" />
      </Link>
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 h-11 px-5 rounded-md border border-border text-fg text-sm font-medium hover:border-accent-ring hover:text-accent transition-colors"
      >
        Report an issue
      </Link>
    </div>
  </motion.section>
);

export default NotFound;
