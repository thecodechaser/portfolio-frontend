import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Blog from '../components/Blog/Blog';
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
      <div className="flex gap-3 ml-5 md:ml-0 mb-6">
        <h2 className="text-2xl md:text-4xl">Latest Blogs</h2>
        <div className="border-b-2 mb-3 border-secondaryColor hr-blog" />
      </div>
      {/* blog-section */}
      {
      posts.map((data) => (
        <Blog key={data.id} data={data} />
      ))
    }
    </div>
  );
};

export default Blogs;
