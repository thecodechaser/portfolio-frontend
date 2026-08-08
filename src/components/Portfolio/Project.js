import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from '@heroicons/react/solid';
import githubLogo from '../../assets/images/github-logo.svg';

const Project = ({ data }) => {
  const {
    image, title, details, tech, live, github,
  } = data;

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col border border-border bg-surface overflow-hidden hover:border-accent-ring transition-colors shadow-card"
    >
      <a
        href={live}
        target="_blank"
        rel="noreferrer"
        className="block aspect-[16/10] overflow-hidden bg-elevated relative"
        aria-label={`${title} preview`}
      >
        <img
          src={image}
          alt={`${title} preview`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>

      <div className="flex flex-col flex-1 p-5 gap-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-fg leading-snug">{title}</h3>
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="text-subtle hover:text-accent transition-colors shrink-0"
            aria-label={`Open ${title} live site`}
          >
            <ExternalLinkIcon className="h-4 w-4" />
          </a>
        </div>

        <p className="text-sm text-subtle leading-relaxed line-clamp-4">
          {details}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
          {tech.map((item) => (
            <span
              key={item}
              className="mono text-[11px] px-2 py-1 border border-hairline bg-elevated text-subtle"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 pt-3 mt-1 border-t border-hairline">
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-fg hover:text-accent transition-colors"
          >
            Live
            <ExternalLinkIcon className="h-3.5 w-3.5" />
          </a>
          <span className="text-faint" aria-hidden>·</span>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-subtle hover:text-fg transition-colors"
          >
            <img src={githubLogo} alt="" className="w-3.5 h-3.5 invert opacity-80" />
            Source
          </a>
        </div>
      </div>
    </motion.article>
  );
};

Project.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    details: PropTypes.string,
    live: PropTypes.string,
    github: PropTypes.string,
    tech: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
  }).isRequired,
};

export default Project;
