import React from 'react';
import "../stylesheets/Navbar.css"
import logo from "../Assets/logo.svg"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"><img src={logo} alt="Real Trust" /></div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#clients">Clients</a></li>
        {/* <li><a href="#contact">Contact Us</a></li> */}
        <li><a href="#about">About Us</a></li>
      <button>Contact</button>
      </ul>
    </nav>
  );
};

export default Navbar;
