/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import microverseLogo from '../../assets/images/microverse_logo.png';
import freelanceLogo from '../../assets/images/freelance-logo.jpg';
import kwanzooLogo from '../../assets/images/kwanzoo-logo.jpg';
import modeliaLogo from '../../assets/images/modelia_logo.jpg';

const roles = [
  {
    title: 'Full-Stack Developer',
    company: 'Modelia',
    period: 'October 2025 – Present',
    location: 'Remote',
    logo: modeliaLogo,
    bullets: [
      'Owned and improved website hero sections, core pages, and marketing landings.',
      'Maintained Studio’s static frontend pages and blog with design consistency.',
      'Implemented SEO best practices and optimized site structure for performance.',
      'Ensured responsiveness and top Lighthouse scores across all web experiences.',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Novel Aquatech',
    period: 'March 2025 – September 2025',
    location: 'Remote',
    logo: freelanceLogo,
    bullets: [
      'Enhanced and maintained a client portal, adding features, bug fixes, and testing.',
      'Built an admin portal from scratch for efficient user, device, and configuration management.',
      'Collaborated with the team to optimize UI/UX, performance, and deliver features under tight deadlines.',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Kwanzoo INC',
    period: 'October 2022 – February 2025',
    location: 'Remote',
    logo: kwanzooLogo,
    bullets: [
      'Revamped the Kwanzoo dashboard with a modern UI, migrating to a new front-end project.',
      'Optimized API performance by creating ElasticSearch snapshots, improving response times.',
      'Developed new features and fixed critical issues used by 20+ B2B clients.',
      'Led end-to-end implementation — from development to testing & AWS deployment.',
    ],
  },
  {
    title: 'Technical Support Engineer',
    company: 'Microverse',
    period: 'January 2022 – March 2024',
    location: 'Remote',
    logo: microverseLogo,
    bullets: [
      'Reviewed 100+ projects from junior developers, ensuring they met technical requirements.',
      'Provided code quality improvements and best practices for performance optimization.',
      'Assisted developers in debugging, refactoring, and writing clean, maintainable code.',
    ],
  },
  {
    title: 'Freelance Developer',
    company: 'Freelance',
    period: 'January 2020 – September 2021',
    location: 'Remote',
    logo: freelanceLogo,
    bullets: [
      'Built desktop applications using Java, JavaFX, and other frameworks.',
      'Built websites using WordPress and Shopify for clients.',
    ],
  },
];

const RoleItem = ({ role, isLast }) => (
  <motion.li
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.45 }}
    className="relative pl-10 md:pl-12"
  >
    {/* timeline rail */}
    {!isLast && (
      <span
        className="absolute left-[15px] md:left-[19px] top-7 bottom-[-1.5rem] w-px bg-hairline"
        aria-hidden
      />
    )}
    {/* logo dot */}
    <span className="absolute left-0 top-1 inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-border bg-surface overflow-hidden">
      <img src={role.logo} alt={`${role.company} logo`} className="w-full h-full object-cover" />
    </span>

    <div className="rounded-xl border border-border bg-surface p-5 hover:border-accent-ring transition-colors">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
        <div>
          <h3 className="text-base md:text-lg font-semibold text-fg">
            {role.title}
            <span className="text-subtle font-normal">
              {' · '}
              {role.company}
            </span>
          </h3>
        </div>
        <div className="mono text-xs text-faint">
          {role.period}
          {' · '}
          {role.location}
        </div>
      </div>
      <ul className="mt-4 space-y-2">
        {role.bullets.map((b) => (
          <li key={b} className="flex gap-3 text-sm text-subtle leading-relaxed">
            <span className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0" aria-hidden />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.li>
);

const Experience = () => (
  <section className="mt-20 md:mt-28">
    <div className="flex items-center gap-3">
      <span className="mono text-xs text-faint">02 /</span>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Experience</h2>
      <span className="mono text-xs text-faint hidden md:inline ml-auto">
        {String(roles.length).padStart(2, '0')}
        {' '}
        roles
      </span>
    </div>
    <div className="mt-3 h-px bg-hairline" />

    <ol className="mt-10 flex flex-col gap-8">
      {roles.map((role, i) => (
        <RoleItem key={`${role.company}-${role.period}`} role={role} isLast={i === roles.length - 1} />
      ))}
    </ol>
  </section>
);

export default Experience;
