import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <header className="flex flex-col justify-between px-20 py-7 shadow-xl md:flex-row">
      <div><a href="/">TheCodeChaser</a></div>
      <nav>
        <div className="md:hidden mobile-btns">
          <button
            type="button"
            className={classNames(!mobileMenu ? 'block' : 'hidden')}
            onClick={() => setMobileMenu(true)}
          >
            <MenuIcon className="h-10" />
          </button>
          <button type="button" className={classNames(!mobileMenu ? 'hidden' : 'block')} onClick={() => setMobileMenu(false)}>
            <XIcon className="h-10" />
          </button>
        </div>
        <div className={classNames(mobileMenu ? 'block' : 'hidden', 'md:block')}>
          <ul className="flex flex-col gap-5 md:flex-row">
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
    </header>
  );
};

export default Header;
