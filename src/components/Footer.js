import React from 'react';
import { ArrowUpIcon } from '@heroicons/react/solid';
import ContactInfo from './Contact/ContactInfo';

const goToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const Footer = () => (
  <>
    <ContactInfo />
    <footer className="container-page mt-24 pb-4 overflow-hidden">
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
            className="inline-flex items-center justify-center w-10 h-10 border border-border text-subtle hover:text-fg hover:border-accent-ring transition-colors"
          >
            <ArrowUpIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* oversized wordmark — sized by viewBox so it always spans the
          container exactly, whatever the viewport */}
      <div className="mt-12 md:mt-16 select-none pointer-events-none" aria-hidden>
        <svg viewBox="0 0 1000 122" className="w-full h-auto block" focusable="false">
          <defs>
            <linearGradient id="wordmark-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fafafa" stopOpacity="0.15" />
              <stop offset="60%" stopColor="#fafafa" stopOpacity="0.07" />
              <stop offset="100%" stopColor="#fafafa" stopOpacity="0.015" />
            </linearGradient>
          </defs>
          <text
            x="0"
            y="116"
            textLength="1000"
            lengthAdjust="spacing"
            fill="url(#wordmark-fade)"
            fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
            fontWeight="600"
            fontSize="152"
          >
            thecodechaser
          </text>
        </svg>
      </div>
    </footer>
  </>
);

export default Footer;
