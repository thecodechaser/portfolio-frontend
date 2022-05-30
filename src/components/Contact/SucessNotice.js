import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SuccessNotice = () => (
  <motion.section
    initial={{ x: '-100vw' }}
    animate={{ x: -0 }}
    transition={{ duration: 1 }}
    className="flex flex-col items-center mt-60 md:mr-52"
  >
    <p className="text-xl md:text-3xl">Thank you for your message!</p>
    <p className="text-md md:text-lg mt-5">
      I will get back to you shortly.
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

export default SuccessNotice;
