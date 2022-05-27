import Project from '../components/Portfolio/Project';
import { useSelector } from 'react-redux';

const Portfolio = () => {
  const projects = useSelector((state) => state.projectsReducer);
  return (
  <div className="mt-20 md:mt-40">
    <div className="flex gap-3 ml-5 md:ml-0 mb-6">
      <h2 className="text-2xl md:text-4xl">Portfolio</h2>
      <div className="border-b-2 w-4/6 mb-3 border-secondaryColor hr-portfolio" />
    </div>
    {
      projects.map((data) =>(
        <Project data={data}/>
      ))
    }
  </div>
)
  };

export default Portfolio;
