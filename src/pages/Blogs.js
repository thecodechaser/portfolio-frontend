import Blog from '../components/Blog/Blog';

const Blogs = () => (
  <div className="mt-32 md:mt-40">
    <div className="flex gap-3 ml-5 md:ml-0 mb-6">
      <h2 className="text-2xl md:text-4xl">Latest Blogs</h2>
      <div className="border-b-2 mb-3 border-secondaryColor hr-blog" />
    </div>
    {/* blog-section */}
    <Blog />
  </div>
);

export default Blogs;
