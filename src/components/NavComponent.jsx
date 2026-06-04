import React, { useState, useEffect } from 'react';
import './NavComponent.css';
import { Link, NavLink } from 'react-router-dom';

import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { HashLink } from 'react-router-hash-link';


import logo from '../assets/logo.png';

const NavComponent = ({cartCount}) => {


  const [menuOpen, setMenuOpen] = useState(false);
  const [liveCount, setLiveCount] = useState(1282);
   useEffect(() => {
  const interval = setInterval(() => {
    const change = Math.floor(Math.random() * 11) - 5; // -5 to +5

    setLiveCount(prev => Math.max(1000, prev + change));
  }, 5000);

  return () => clearInterval(interval);
}, []);

  return (
    <nav>

      <div className="nav">

        {/* Mobile/Tablet Menu Icon */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </div>

        {/* Left Section */}
        <div className="nav-title">

          <div className="logo-container">
            <img src={logo} alt="Chic Lighting" />
          </div>

          <button className="nav-count">
            <IoEyeOutline />
            <span>Live: {liveCount.toLocaleString()}</span>
          </button>

        </div>

        {/* Desktop Links */}
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          <NavLink to="/catalog" className={({ isActive }) => (isActive ? "active" : "")}>Catalog</NavLink>
          <NavLink to="/gallery" className={({ isActive }) => (isActive ? "active" : "")}>Gallery</NavLink>
          <HashLink smooth to="/about#faq" >FAQ</HashLink>
          <NavLink to="/about" onClick={() => window.scrollTo(0,0)} className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
        </div>

        {/* Right Section */}
        <div className="nav-button">

          <Link to="/offers">
            <button className="nav-offer">
             Offers
            </button>
          </Link>

          <div className="nav-icon">
            <MdOutlineShoppingCart />
            <span>{cartCount}</span>
          </div>

          <div className="nav-icon profile-icon">
            <IoPersonCircleOutline />
          </div>

        </div>

      </div>

      {/* Mobile / Tablet Dropdown */}

      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>

        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        <Link to="/catalog" onClick={() => setMenuOpen(false)}>
          Catalog
        </Link>

        <Link to="/gallery" onClick={() => setMenuOpen(false)}>
          Gallery
        </Link>

        <HashLink smooth to="/about#faq" onClick={() => setMenuOpen(false)}>
          FAQ
        </HashLink>

        <Link to="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>

        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>

      </div>

    </nav>
  );
};

export default NavComponent;