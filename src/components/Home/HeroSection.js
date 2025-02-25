import { CheckCircleIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import profilePicture from '../../assets/images/profilePicture.jpg';

const fields = ['Full Stack web developer', 'Love for clean code', 'Remote work aficionado', 'Amateur astronomer'];

const HeroSection = () => (
  <motion.div
    initial={{ x: '-100vw' }}
    animate={{ x: -0 }}
    transition={{ duration: 1 }}
    className="flex flex-col items-center gap-10 md:ml-4 md:flex-row md:gap-96"
  >
    <div className="md:order-1">
      <img src={profilePicture} alt="profile" className="h-64 rounded-full md:h-80" />
    </div>
    <div className="text-skyColor">
      <p className="text-base text-secondaryColor">Hello!</p>
      <h1 className="text-4xl text-secondaryColor md:text-5xl">I&apos;m Ranjeet Singh</h1>
      {
          fields.map((field) => (
            <div key={field} className="flex gap-4 mt-3">
              <CheckCircleIcon className="h-7" />
              <p className="m-px text-base">{field}</p>
            </div>
          ))
        }
      <Link to="/contact">
        <button
          type="button"
          className="px-6 py-2 mt-10 text-lg font-medium rounded bg-lightBlueColor w-50 text-skyColor hover:bg-secondaryColor hover:text-primaryColor"
        >
          Get in Touch
        </button>
      </Link>
    </div>
  </motion.div>
);

export default HeroSection;
