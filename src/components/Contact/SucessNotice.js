import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckIcon, ArrowRightIcon } from '@heroicons/react/solid';

const SuccessNotice = () => (
  <motion.section
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="min-h-[60vh] flex items-center justify-center pt-16 pb-24"
  >
    <div className="max-w-md w-full border border-border bg-surface p-8 text-center shadow-card">
      <span className="inline-flex items-center justify-center w-12 h-12 bg-accent-soft text-accent border border-accent-ring">
        <CheckIcon className="h-6 w-6" />
      </span>
      <h1 className="mt-6 text-2xl md:text-3xl font-semibold tracking-tight">
        Message sent
      </h1>
      <p className="mt-3 text-base text-subtle leading-relaxed">
        Thanks for reaching out — I&apos;ll get back to you shortly.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 h-11 px-5 bg-accent text-bg text-sm font-semibold hover:bg-accent-hover transition-colors"
      >
        Back home
        <ArrowRightIcon className="h-4 w-4" />
      </Link>
    </div>
  </motion.section>
);

export default SuccessNotice;
