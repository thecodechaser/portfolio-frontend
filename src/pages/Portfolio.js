import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Project from '../components/Portfolio/Project';

const Portfolio = () => {
  const projects = useSelector((state) => state.projectsReducer);
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <div className="mt-28 md:mt-40">
      <div className="flex gap-3 mb-6 ml-3 md:ml-0">
        <h2 className="text-2xl md:text-4xl">Portfolio</h2>
        <div className="w-4/6 border-b-2 border-secondaryColor hr-portfolio" />
      </div>
      {
      projects.map((data) => (
        <Project key={data.id} data={data} />
      ))
    }
    </div>
  );
};

export default Portfolio;
