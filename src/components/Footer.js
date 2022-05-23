import React from 'react';

const Footer = () => (
  <footer className="flex flex-col items-center my-8">
    <button type="button" className="bg-secondaryColor rounded px-4 my-10 py-2"><i class="las la-angle-up"></i></button>
    <p className="text-md">
      Build by
      <a href="https://github.com/thecodechaser" className="text-secondaryColor"> Ranjeet Singh </a>
      © 2022
    </p>
  </footer>
);

export default Footer;
