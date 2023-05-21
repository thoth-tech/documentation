import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">   
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">Courses</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/teachers">Lecturers</a>
      </li>
    </ul>
  </nav>
  );
};

export default Navbar;