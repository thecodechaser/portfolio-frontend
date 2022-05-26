import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const menuItems = [
  { name: 'Home', path: '/', current: true },
  { name: 'About', path: '/about', current: false },
  { name: 'Portfolio', path: '/portfolio', current: false },
  { name: 'Contact', path: '/contact', current: false },
  { name: 'Blog', path: '/blog', current: false },
];

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <header className={`flex flex-col bg-primaryColor px-8 py-7 ${mobileMenu ? 'h-screen' : 'h-fit'} fixed top-0 w-screen shadow-xl md:flex-row md:justify-between md:px-20 md:h-fit`}>
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
            {
              menuItems.map((item) => (
                <li key={item.name}>
                  <Link to={item.path}><a href={item.path}>{item.name}</a></Link>
                </li>
              ))
            }
          </ul>
        </div>
      </nav>
      <Link to="/resume" className={`self-center ${mobileMenu ? 'block' : 'hidden'} md:block`}><button type="button" className={`border-2 border-secondaryColor mt-24 rounded px-4 py-1 w-32 
      text-secondaryColor md:mt-0`}>Resume</button></Link>
    </header>
  );
};

export default Header;
