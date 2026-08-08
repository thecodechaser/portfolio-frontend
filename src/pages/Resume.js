import { useEffect } from 'react';
import ResumePDF from '../components/Resume/ResumePDF';

const Resume = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <section className="pt-12 md:pt-16">
      <div className="flex items-center gap-3">
        <span className="mono text-xs text-faint">/resume</span>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Resume</h1>
      </div>
      <div className="mt-3 h-px bg-hairline" />
      <ResumePDF />
    </section>
  );
};

export default Resume;
