import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import rocketGif from '../../assets/images/rocket.gif';
import { fetchPostsApi } from '../../redux/blogs/posts';

const Blog = () => {
  const posts = useSelector((state) => state.postsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsApi());
  }, [dispatch]);

  console.log(posts)
  return(
  <motion.section
    initial={{ x: '-100vw' }}
    animate={{ x: -0 }}
    transition={{ duration: 1 }}
    className="flex flex-col items-center mt-10 md:mr-52"
  >
    <p className="text-xl ml-4 md:ml-0">I&apos;m a very intresting feature and currenty under development.</p>
    <p className="text-lg ml-4 mt-4 md:ml-0">Next time you come back I will be live here.</p>
    <img src={rocketGif} alt="rocket-gif" />
    <Link to="/">
      <button
        type="button"
        className="bg-lightBlueColor mt-10 rounded px-6 py-2 w-50
      text-lg text-skyColor font-medium"
      >
        Go Home
      </button>
    </Link>
  </motion.section>
)
  };

export default Blog;
