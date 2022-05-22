import Contact from '../components/Contact';
import Project from '../components/Project';
import AboutMe from '../components/About/AboutMe';
import HeroSection from '../components/Home/HeroSection';

const Home = () => (
  <>
    <main className="mt-40">
      {/* hero-section */}
      <HeroSection />
      {/* about-section */}
      <AboutMe />
    </main>

    {/* project-section */}
    <div className="mt-14 md:mt-24">
      <div className="flex gap-3 ml-5 md:ml-0 mb-6">
        <h2 className="text-2xl md:text-4xl">Portfolio</h2>
        <div className="border-b-2 w-4/6 mb-3 border-secondaryColor hr-portfolio" />
      </div>
      <Project />
    </div>
    <Contact />
  </>
);

export default Home;
