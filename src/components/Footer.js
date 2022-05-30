import React from 'react';
import ContactInfo from './Contact/ContactInfo';
import { motion } from "framer-motion"

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const Footer = () => (

  <>
    <ContactInfo />
    <motion.footer  
    initial={{ x: '-100vw' }}
    animate={{ x: -0 }}
  whileInView={{ x: -0 }} 
  transition={{ delay: 0.2, duration: 0.8 }}
  className="flex flex-col items-center my-8">
      <button
        type="button"
        onClick={goToTop}
        aria-label="Save"
        className="bg-lightBlueColor rounded
    px-4 my-10 py-2 text-skyColor font-medium hover:bg-secondaryColor hover:text-primaryColor"
      >
        <i className="las la-angle-up" />
      </button>
      <p className="text-md">
        Build by
        <a href="https://github.com/thecodechaser" className="text-secondaryColor"> Ranjeet Singh </a>
        © 2022
      </p>
    </motion.footer>
  </>
);

export default Footer;
