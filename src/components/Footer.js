import React from 'react';
import { ArrowUpIcon } from '@heroicons/react/solid';
import ContactInfo from './Contact/ContactInfo';

const goToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const Footer = () => (
  <>
    <ContactInfo />
    <footer className="container-page mt-24 mb-10">
      <div className="border-t border-hairline pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <p className="text-sm text-subtle">
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          <a
            href="https://github.com/thecodechaser"
            target="_blank"
            rel="noreferrer"
            className="text-fg hover:text-accent transition-colors"
          >
            Ranjeet Singh
          </a>
          {' · '}
          <span className="mono text-faint">All rights reserved</span>
        </p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={goToTop}
            aria-label="Back to top"
            className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-border text-subtle hover:text-fg hover:border-accent-ring transition-colors"
          >
            <ArrowUpIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
