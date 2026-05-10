import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogCard from '../components/Blogs/BlogCard';
import { fetchPostsApi } from '../redux/blogs/posts';

const Blogs = () => {
  const posts = useSelector((state) => state.postsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsApi());
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <section className="pt-12 md:pt-16">
      <div className="flex items-center gap-3">
        <span className="mono text-xs text-faint">/blog</span>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Writing</h1>
        {posts.length > 0 && (
          <span className="mono text-xs text-faint hidden md:inline ml-auto">
            {String(posts.length).padStart(2, '0')}
            {' '}
            posts
          </span>
        )}
      </div>
      <div className="mt-3 h-px bg-hairline" />
      <p className="mt-6 max-w-2xl text-base text-subtle leading-relaxed">
        Notes, tutorials, and the occasional rabbit hole on web development.
      </p>

      <div className="mt-10 flex flex-col gap-5">
        {posts.length === 0 ? (
          <div className="rounded-xl border border-border bg-surface p-6 text-subtle text-sm">
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
  );
};

export default Blogs;
