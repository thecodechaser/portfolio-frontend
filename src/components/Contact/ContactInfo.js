import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/solid';

const socials = [
  { name: 'GitHub', icon: 'lab la-github', href: 'https://github.com/thecodechaser' },
  { name: 'LinkedIn', icon: 'lab la-linkedin', href: 'https://www.linkedin.com/in/thecodechaser/' },
  { name: 'Twitter', icon: 'lab la-twitter', href: 'https://twitter.com/thecodechaser' },
  { name: 'Medium', icon: 'lab la-medium', href: 'https://medium.com/@thecodechaser' },
  { name: 'AngelList', icon: 'lab la-angellist', href: 'https://angel.co/u/thecodechaser' },
  { name: 'Instagram', icon: 'lab la-instagram', href: 'https://www.instagram.com/the_code_chaser/' },
];

const emails = [
  'ranjeetbuk96@gmail.com',
  'contact@thecodechaser.com',
  'admin@thecodechaser.com',
];

const ContactInfo = () => (
  <motion.section
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.5 }}
    className="container-page mt-24 md:mt-32"
  >
    <div className="flex items-center gap-3">
      <span className="mono text-xs text-faint">/get-in-touch</span>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
        Let&apos;s build something
      </h2>
    </div>
    <div className="mt-3 h-px bg-hairline" />

    <div className="mt-8 grid md:grid-cols-3 gap-6 md:gap-8 items-start">
      <div className="md:col-span-1">
        <p className="text-base text-subtle leading-relaxed">
          Got an app idea, a feature to build, or just want to grab a coffee
          and talk shop? I&apos;m always up for a good conversation about
          code, architecture, or what to ship next.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 h-11 px-5 rounded-md bg-accent text-bg text-sm font-semibold hover:bg-accent-hover transition-colors"
        >
          Send a message
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <h3 className="mono text-xs text-faint uppercase tracking-widest">Contact</h3>
        <ul className="mt-4 space-y-3">
          {emails.map((e) => (
            <li key={e}>
              <a
                href={`mailto:${e}`}
                className="text-sm text-fg hover:text-accent transition-colors break-all"
              >
                {e}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <h3 className="mono text-xs text-faint uppercase tracking-widest">Around the web</h3>
        <ul className="mt-4 grid grid-cols-3 gap-2">
          {socials.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                title={s.name}
                className="flex flex-col items-center justify-center gap-1 py-3 rounded-md border border-hairline bg-elevated text-subtle hover:text-accent hover:border-accent-ring transition-colors"
              >
                <i className={`${s.icon} text-xl`} aria-hidden />
                <span className="mono text-[10px]">{s.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.section>
);

export default ContactInfo;
