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
            className="bg-lightBlueColor mt-10 rounded px-6 py-2 w-50
      text-lg text-skyColor font-medium ml-4 md:ml-1 hover:bg-secondaryColor hover:text-primaryColor"
          >
            Know more
          </button>
        </Link>
      </main>

      {/* project-section */}
      <div className="mt-14 md:mt-24">
        <div className="flex gap-3 ml-3 md:ml-0 mb-6">
          <h2 className="text-2xl md:text-4xl">Portfolio</h2>
          <div className="border-b-2 w-4/6 mb-3 border-secondaryColor hr-portfolio" />
        </div>
        {
      projects.map((data) => (
        <Project key={data.id} data={data} />
      ))
    }
        <Link to="/portfolio">
          <button
            type="button"
            className="bg-lightBlueColor mt-10 rounded px-8 py-2
      text-lg text-skyColor font-medium ml-4 md:ml-1 hover:bg-secondaryColor hover:text-primaryColor"
          >
            See All
          </button>
        </Link>
      </div>

      {/* blogs-section */}
      <div className="mt-20 md:mt-28">
        <div className="flex gap-3 ml-5 md:ml-0 mb-6">
          <h2 className="text-2xl md:text-4xl">Latest Blogs</h2>
          <div className="border-b-2 mb-3 border-secondaryColor hr-blog" />
        </div>
        {
      posts.map((data) => (
        <BlogCard key={data.id} data={data} />
      ))
    }
        <Link to="/blog">
          <button
            type="button"
            className="bg-lightBlueColor mt-10 rounded px-8 py-2
      text-lg text-skyColor font-medium ml-4 md:ml-1 hover:bg-secondaryColor hover:text-primaryColor"
          >
            See All
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
