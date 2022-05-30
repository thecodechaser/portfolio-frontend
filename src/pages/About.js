import { useEffect } from 'react';
import AboutMe from '../components/About/AboutMe';
import Experience from '../components/About/Experience';
import Education from '../components/About/Education';

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div className="mt-40">
      {/* about-me-section */}
      <AboutMe />
      {/* experience-section */}
      <Experience />
      {/* education-section */}
      <Education />
    </div>
  );
};

export default About;
