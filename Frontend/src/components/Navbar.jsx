import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/Navbar.css";
// Ensure you have react-icons installed
import { FaBars, FaTimes } from "react-icons/fa"; 
import logo from "../assests/logo.png"; 

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [clicked, setClicked] = useState(false); // State for Mobile Menu

  // 1. Handle Scroll for Sticky Animation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. FORCE SCROLL TO TOP ON PAGE CHANGE & CLOSE MENU
  useEffect(() => {
    window.scrollTo(0, 0);
    setClicked(false); // Close mobile menu when page changes
  }, [location.pathname]);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        
        {/* LOGO SECTION */}
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Business Expert Asia" />
          </Link>
        </div>

        {/* MOBILE TOGGLE ICON (3 Lines) */}
        <div className="menu-icon" onClick={handleClick}>
           {clicked ? <FaTimes /> : <FaBars />}
        </div>

        {/* RIGHT SIDE GROUP (Menu + Button) */}
        {/* We add the 'active' class here if clicked is true */}
        <div className={`nav-right-group ${clicked ? "active" : ""}`}>
          
          <ul className="nav-menu">
            <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
            <li><Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link></li>
            <li><Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>Services</Link></li>
            <li><Link to="/who-we-are" className={`nav-link ${location.pathname === '/who-we-are' ? 'active' : ''}`}>Who We Are</Link></li>
            <li><Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link></li>
          </ul>

          <Link to="/contact" className="btn-link-wrapper">
            <button className="nav-btn-shine">Get Started</button>
          </Link>

        </div>
      </div>
    </nav>
  );
}