import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => (
  <motion.section
    initial={{ x: '-100vw' }}
    animate={{ x: -0 }}
    transition={{ duration: 1 }}
    className="flex flex-col items-center mt-60 md:mr-52"
  >
    <p className="text-3xl md:text-5xl">Lost your way?</p>
    <p className="text-lg mt-5">
      Sorry, we can&apos;t find that page.
    </p>
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
);

export default NotFound;
