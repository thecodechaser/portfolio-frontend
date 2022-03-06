import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <header className="flex flex-col px-8 py-7 h-screen shadow-xl md:flex-row md:h-fit md:justify-between md:px-20">
      <a href="/" className="text-lg">
        <span className="text-secondaryColor">the </span>
        <span>code </span>
        <span className="text-secondaryColor">chaser</span>
      </a>
      <nav>
        <div className="text-secondaryColor md:hidden mobile-btns">
          <button
            type="button"
            className={classNames(!mobileMenu ? 'block' : 'hidden')}
            onClick={() => setMobileMenu(true)}
          >
            <MenuIcon className="h-8" />
          </button>
          <button type="button" className={classNames(mobileMenu ? 'block' : 'hidden')} onClick={() => setMobileMenu(false)}>
            <XIcon className="h-8" />
          </button>
        </div>
        <div className={classNames(mobileMenu ? 'block' : 'hidden', 'md:block')}>
          <ul className="flex flex-col text-skyColor text-lg gap-8 items-center mt-24 md:flex-row md:mt-1">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Portfolio</a>
            </li>
            <li>
              <a href="/">Skills</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
          </ul>
        </div>
      </nav>
      <button type="button" className={`border-2 self-center border-secondaryColor mt-24 rounded px-4 py-1 w-32 text-secondaryColor ${mobileMenu ? 'block' : 'hidden'} md:block md:mt-0`}>Resume</button>
    </header>
  );
};

export default Header;
