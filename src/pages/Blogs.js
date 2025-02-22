import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogCard from '../components/Blogs/BlogCard';
import { fetchPostsApi } from '../redux/blogs/posts';

const Blogs = () => {
  const posts = useSelector((state) => state.postsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsApi());
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div className="mt-32 md:mt-40">
      <div className="flex gap-3 mb-6 ml-5 md:ml-0">
        <h2 className="text-2xl md:text-4xl">Latest Blogs</h2>
        <div className="w-3/6 mb-3 border-b-2 border-secondaryColor hr-blog" />
      </div>
      {/* blog-section */}
      {posts.length === 0 ? (
        <div className="ml-5 text-base md:ml-0 text-skyColor">
          Unable to load posts due to a server issue.
          Please contact the administrator for assistance.
          <a href="/contact" className="text-secondaryColor"> Send Message </a>
        </div>
      )
        : posts.map((data) => <BlogCard key={data.id} data={data} />)}
    </div>
  );
};

export default Blogs;
