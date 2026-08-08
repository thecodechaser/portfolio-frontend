import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Project from '../components/Portfolio/Project';

const Portfolio = () => {
  const projects = useSelector((state) => state.projectsReducer);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <section className="pt-12 md:pt-16">
      <div className="flex items-center gap-3">
        <span className="mono text-xs text-faint">/portfolio</span>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">All work</h1>
        <span className="mono text-xs text-faint hidden md:inline ml-auto">
          {String(projects.length).padStart(2, '0')}
          {' '}
          projects
        </span>
      </div>
      <div className="mt-3 h-px bg-hairline" />
      <p className="mt-6 max-w-2xl text-base text-subtle leading-relaxed">
        A selection of things I&apos;ve shipped — from full apps and dashboards
        to focused experiments. Click any tile to see it live or peek at the
        source.
      </p>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((data) => (
          <Project key={data.id ?? data.index} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
