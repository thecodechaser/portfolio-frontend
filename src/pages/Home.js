/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/solid';
import Project from '../components/Portfolio/Project';
import AboutMe from '../components/About/AboutMe';
import HeroSection from '../components/Home/HeroSection';
import { fetchPostsApi } from '../redux/blogs/posts';
import BlogCard from '../components/Blogs/BlogCard';

const SectionHeading = ({
  label, title, kicker, href, ctaText,
}) => (
  <div className="flex items-center gap-3">
    {label && <span className="mono text-xs text-faint">{label}</span>}
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
    {kicker && (
      <span className="mono text-xs text-faint hidden md:inline">{kicker}</span>
    )}
    {href && (
      <Link
        to={href}
        className="ml-auto inline-flex items-center gap-1.5 text-sm text-subtle hover:text-accent transition-colors"
      >
        {ctaText}
        <ArrowRightIcon className="h-3.5 w-3.5" />
      </Link>
    )}
  </div>
);

const Home = () => {
  const blogs = useSelector((state) => state.postsReducer);
  const portfolio = useSelector((state) => state.projectsReducer);
  const projects = portfolio.slice(0, 6);
  const posts = blogs.slice(0, 3);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsApi());
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <HeroSection />
      <AboutMe />

      {/* Portfolio */}
      <section className="mt-20 md:mt-28">
        <SectionHeading
          label="02 /"
          title="Selected work"
          kicker="recent projects"
          href="/portfolio"
          ctaText="See all"
        />
        <div className="mt-3 h-px bg-hairline" />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((data) => (
            <Project key={data.id} data={data} />
          ))}
        </div>
      </section>

      {/* Blogs */}
      <section className="mt-20 md:mt-28">
        <SectionHeading
          label="03 /"
          title="Latest writing"
          kicker="thoughts & notes"
          href="/blog"
          ctaText="See all"
        />
        <div className="mt-3 h-px bg-hairline" />
        <div className="mt-8 flex flex-col gap-5">
          {posts.length === 0 ? (
            <div className="border border-border bg-surface p-6 text-subtle text-sm">
              Unable to load posts due to a server issue. Please contact the
              administrator for assistance.
              {' '}
              <a href="/contact" className="text-accent hover:underline">Send a message</a>
              .
            </div>
          ) : (
            posts.map((data) => <BlogCard key={data.id} data={data} />)
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
