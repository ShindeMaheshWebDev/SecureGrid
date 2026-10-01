import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/secure-grid-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* LOGO */}
        <NavLink to="/" onClick={closeMenu}>
          <img src={logo} alt="Secure Grid" className="logo" />
        </NavLink>

        {/* NAV LINKS */}
        <div className={`nav-links ${open ? "active" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/service" onClick={closeMenu}>
            Services
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact Us
          </NavLink>
        </div>
        
        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
