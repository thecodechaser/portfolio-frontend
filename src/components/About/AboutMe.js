/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import codeSnipped from '../../assets/images/code-snippet.png';

const stacks = [
  {
    name: 'Frontend',
    values: ['React', 'Vue', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind', 'HTML & CSS'],
  },
  {
    name: 'Backend',
    values: ['Ruby on Rails', 'Ruby', 'Java', 'Spring', 'SQL', 'ElasticSearch'],
  },
  {
    name: 'Tooling',
    values: ['AWS', 'Netlify', 'Git & GitHub', 'Postman', 'VS Code', 'WordPress'],
  },
];

const SectionHeading = ({ label, title, kicker }) => (
  <div className="flex items-baseline gap-3">
    {label && (
      <span className="mono text-xs text-faint">{label}</span>
    )}
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
    {kicker && (
      <span className="ml-auto mono text-xs text-faint hidden md:inline">{kicker}</span>
    )}
  </div>
);

const AboutMe = () => (
  <motion.section
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.5 }}
    className="mt-20 md:mt-28"
  >
    <SectionHeading label="01 /" title="About" kicker="who, what, why" />
    <div className="mt-3 h-px bg-hairline" />

    <div className="mt-8 grid md:grid-cols-[1.3fr_1fr] gap-8 md:gap-12 items-start">
      <div className="space-y-5 text-base text-subtle leading-relaxed">
        <p>
          Hi — I&apos;m Ranjeet, also known online as
          {' '}
          <span className="text-accent">thecodechaser</span>
          . I&apos;m a Software Engineer at
          {' '}
          <a
            href="https://modelia.ai"
            target="_blank"
            rel="noreferrer"
            className="text-fg underline decoration-accent decoration-2 underline-offset-4 hover:text-accent transition-colors"
          >
            Modelia AI
          </a>
          {' '}
          with 3+ years of experience shipping web applications across React,
          Vue, Rails, and Java. Before that I spent two years freelancing —
          building desktop apps and crafting WordPress and Shopify sites for
          clients.
        </p>
        <p>
          I like the kind of problems where the answer isn&apos;t obvious until
          you&apos;ve sketched it three different ways. When I&apos;m off the
          clock, I&apos;m usually torn between solving algorithm puzzles and
          reading about astronomy — somehow I manage to do a bit of both.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative rounded-xl border border-border bg-surface overflow-hidden shadow-card"
      >
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-hairline bg-elevated">
          <span className="w-2.5 h-2.5 rounded-full bg-mute" />
          <span className="w-2.5 h-2.5 rounded-full bg-mute" />
          <span className="w-2.5 h-2.5 rounded-full bg-mute" />
          <span className="ml-2 mono text-[11px] text-faint">~/ranjeet/about.tsx</span>
        </div>
        <img src={codeSnipped} alt="code snippet" className="w-full h-auto" />
      </motion.div>
    </div>

    <div className="mt-12">
      <h3 className="mono text-sm text-faint uppercase tracking-widest">
        Stack I&apos;ve been working with lately
      </h3>
      <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stacks.map((stack) => (
          <div
            key={stack.name}
            className="rounded-xl border border-border bg-surface p-5 hover:border-accent-ring transition-colors"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-base font-medium text-fg">{stack.name}</h4>
              <span className="mono text-[11px] text-faint">
                {String(stack.values.length).padStart(2, '0')}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {stack.values.map((value) => (
                <span
                  key={value}
                  className="mono text-xs px-2 py-1 rounded-md border border-hairline bg-elevated text-subtle"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default AboutMe;
