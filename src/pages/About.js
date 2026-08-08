import { useEffect } from 'react';
import AboutMe from '../components/About/AboutMe';
import Experience from '../components/About/Experience';
import Education from '../components/About/Education';

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="pt-12 md:pt-16">
      <div className="flex items-center gap-3">
        <span className="mono text-xs text-faint">/about</span>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Background, in detail
        </h1>
      </div>
      <div className="mt-3 h-px bg-hairline" />

      <AboutMe />
      <Experience />
      <Education />
    </div>
  );
};

export default About;
