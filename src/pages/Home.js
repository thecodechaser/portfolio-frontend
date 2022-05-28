import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Project from '../components/Portfolio/Project';
import AboutMe from '../components/About/AboutMe';
import HeroSection from '../components/Home/HeroSection';

const Home = () => {
  const portfolio = useSelector((state) => state.projectsReducer);
  const projects = portfolio.slice(0, 3);
  return (
    <>
      <main className="mt-40">
        {/* hero-section */}
        <HeroSection />
        {/* about-section */}
        <AboutMe />
        <Link to="/about">
          <button
            type="button"
            className="bg-lightBlueColor mt-10 rounded px-6 py-2 w-50
      text-lg text-skyColor font-medium"
          >
            Know more
          </button>
        </Link>
      </main>

      {/* project-section */}
      <div className="mt-14 md:mt-24">
        <div className="flex gap-3 ml-5 md:ml-0 mb-6">
          <h2 className="text-2xl md:text-4xl">Portfolio</h2>
          <div className="border-b-2 w-4/6 mb-3 border-secondaryColor hr-portfolio" />
        </div>
        {
      projects.map((data) =>(
        <Project data={data}/>
      ))
    }
    <Link to="/portfolio">
          <button
            type="button"
            className="bg-lightBlueColor mt-10 rounded px-6 py-2 w-50
      text-lg text-skyColor font-medium"
          >
           See All
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
