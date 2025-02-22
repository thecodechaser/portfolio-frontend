import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Project from '../components/Portfolio/Project';
import AboutMe from '../components/About/AboutMe';
import HeroSection from '../components/Home/HeroSection';
import { fetchPostsApi } from '../redux/blogs/posts';
import BlogCard from '../components/Blogs/BlogCard';

const Home = () => {
  const blogs = useSelector((state) => state.postsReducer);
  const portfolio = useSelector((state) => state.projectsReducer);
  const projects = portfolio.slice(0, 3);
  const posts = blogs.slice(0, 3);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsApi());
    window.scrollTo({
      top: 0,
    });
  }, []);

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
            className="px-6 py-2 mt-10 ml-4 text-lg font-medium rounded bg-lightBlueColor w-50 text-skyColor md:ml-1 hover:bg-secondaryColor hover:text-primaryColor"
          >
            Know more
          </button>
        </Link>
      </main>

      {/* project-section */}
      <div className="mt-14 md:mt-24">
        <div className="flex gap-3 mb-6 ml-3 md:ml-0">
          <h2 className="text-2xl md:text-4xl">Portfolio</h2>
          <div className="w-4/6 mb-3 border-b-2 border-secondaryColor hr-portfolio" />
        </div>
        {
      projects.map((data) => (
        <Project key={data.id} data={data} />
      ))
    }
        <Link to="/portfolio">
          <button
            type="button"
            className="px-8 py-2 mt-10 ml-4 text-lg font-medium rounded bg-lightBlueColor text-skyColor md:ml-1 hover:bg-secondaryColor hover:text-primaryColor"
          >
            See All
          </button>
        </Link>
      </div>

      {/* blogs-section */}
      <div className="mt-20 md:mt-28">
        <div className="flex gap-3 mb-6 ml-5 md:ml-0">
          <h2 className="text-2xl md:text-4xl">Latest Blogs</h2>
          <div className="w-3/6 mb-3 border-b-2 border-secondaryColor hr-blog" />
        </div>
        {posts.length === 0 ? (
          <div className="ml-5 text-base md:ml-0 text-skyColor">
            Unable to load posts due to a server issue.
            Please contact the administrator for assistance.
            <a href="/contact" className="text-secondaryColor"> Send Message </a>
          </div>
        )
          : posts.map((data) => <BlogCard key={data.id} data={data} />)}
        <Link to="/blog">
          <button
            type="button"
            className="px-8 py-2 mt-10 ml-4 text-lg font-medium rounded bg-lightBlueColor text-skyColor md:ml-1 hover:bg-secondaryColor hover:text-primaryColor"
          >
            See All
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
