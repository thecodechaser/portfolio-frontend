import Project from '../components/Portfolio/Project';

const Portfolio = () => (
  <div className="mt-20 md:mt-40">
    <div className="flex gap-3 ml-5 md:ml-0 mb-6">
      <h2 className="text-2xl md:text-4xl">Portfolio</h2>
      <div className="border-b-2 w-4/6 mb-3 border-secondaryColor hr-portfolio" />
    </div>
    <Project />
  </div>
);

export default Portfolio;
