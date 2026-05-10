/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import microverseLogo from '../../assets/images/microverse_logo.png';
import tmuLogo from '../../assets/images/tmu-logo.png';
import kalingaLogo from '../../assets/images/kalinga-logo.png';

const items = [
  {
    title: 'Bachelor of Computer Science',
    school: 'Kalinga University',
    period: 'July 2019 – June 2022',
    location: 'Regular',
    logo: kalingaLogo,
    bullets: [
      'Developed a BloodBank application using Java, JavaScript, and MySQL as a capstone project.',
      'Gained expertise in software development, database management, and system design.',
    ],
  },
  {
    title: 'Full-Stack Web Development Program',
    school: 'Microverse',
    period: 'October 2021 – May 2022',
    location: 'Remote',
    logo: microverseLogo,
    bullets: [
      'Completed 1,300+ hours mastering React, Redux, Rails, and JavaScript through hands-on coding.',
      'Built real-world projects in a remote, collaborative environment using GitHub & Agile.',
    ],
  },
  {
    title: 'Diploma in Computer Science',
    school: 'Teerthanker Mahaveer University',
    period: 'July 2016 – June 2019',
    location: 'Regular',
    logo: tmuLogo,
    bullets: [
      'Completed a Java-based CMS software during a 3-month university internship.',
      'Studied computer fundamentals, software development, and algorithms.',
    ],
  },
];

const EduItem = ({ item, isLast }) => (
  <motion.li
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.45 }}
    className="relative pl-10 md:pl-12"
  >
    {!isLast && (
      <span
        className="absolute left-[15px] md:left-[19px] top-7 bottom-[-1.5rem] w-px bg-hairline"
        aria-hidden
      />
    )}
    <span className="absolute left-0 top-1 inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-border bg-surface overflow-hidden">
      <img src={item.logo} alt={`${item.school} logo`} className="w-full h-full object-contain p-1" />
    </span>

    <div className="rounded-xl border border-border bg-surface p-5 hover:border-accent-ring transition-colors">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
        <h3 className="text-base md:text-lg font-semibold text-fg">
          {item.title}
          <span className="text-subtle font-normal">
            {' · '}
            {item.school}
          </span>
        </h3>
        <div className="mono text-xs text-faint">
          {item.period}
          {' · '}
          {item.location}
        </div>
      </div>
      <ul className="mt-4 space-y-2">
        {item.bullets.map((b) => (
          <li key={b} className="flex gap-3 text-sm text-subtle leading-relaxed">
            <span className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0" aria-hidden />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.li>
);

const Education = () => (
  <section className="mt-20 md:mt-28">
    <div className="flex items-center gap-3">
      <span className="mono text-xs text-faint">03 /</span>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Education</h2>
      <span className="mono text-xs text-faint hidden md:inline ml-auto">
        {String(items.length).padStart(2, '0')}
        {' '}
        programs
      </span>
    </div>
    <div className="mt-3 h-px bg-hairline" />

    <ol className="mt-10 flex flex-col gap-8">
      {items.map((item, i) => (
        <EduItem key={`${item.school}-${item.period}`} item={item} isLast={i === items.length - 1} />
      ))}
    </ol>
  </section>
);

export default Education;
