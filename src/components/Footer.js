import React from 'react';

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const Footer = () => (
  <footer className="flex flex-col items-center my-8">
    <button
      type="button"
      onClick={goToTop}
      aria-label="Save"
      className="bg-lightBlueColor rounded
    px-4 my-10 py-2 text-skyColor font-medium"
    >
      <i className="las la-angle-up" />
    </button>
    <p className="text-md">
      Build by
      <a href="https://github.com/thecodechaser" className="text-secondaryColor"> Ranjeet Singh </a>
      © 2022
    </p>
  </footer>
);

export default Footer;
