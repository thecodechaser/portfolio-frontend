import React from 'react';

const Header = () => (
  <header className="flex justify-between px-20 py-7 shadow-xl">
    <div><a href="/">TheCodeChaser</a></div>
    <div>
      <ul className="flex gap-5">
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
          <a href="/">Blog</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
