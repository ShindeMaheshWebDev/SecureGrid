import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
// Logo import
import logo from '../../assets/images/secure-grid-logo.png'; 
// React Icons import
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi'; // Location Icon
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <motion.div 
        className="footer-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="footer-top">
          {/* Logo & About */}
          <div className="footer-brand">
            <img src={logo} alt="Secure Grid Logo" className="footer-logo" />
            <p className="footer-tagline">
              Providing expert business process management and outsourcing solutions since 2012.
            </p>
          </div>

        {/* Quick Links */}
<div className="footer-links">
  <h4>Quick Links</h4>
  <ul>
    <li><Link to="/home">Home</Link></li>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/service">Services</Link></li>
    <li><Link to="/contact">Contact Us</Link></li>
  </ul>
</div>

       {/* Presence & Contact Address */}
<div className="footer-contact">
  <h4>Our Presence</h4>
  <p className="office-count"><strong>7 Offices</strong> across India</p>
  
  {/* Registered Office */}
  <div className="address-container">
    <HiOutlineLocationMarker className="address-icon" />
    <div className="address-text">
      <p><strong>Registered Office:</strong></p>
      <p>Address: A-203, Shaheen Chamber Comm, Premises, Co-op Society Dawood Baug Cross Lane, Off. J. P. Road, NR. P. K. Jewellers, Andheri West, Mumbai, 400058</p>
    </div>
  </div>

  {/* Branch Office - Added New Container */}
  <div className="address-container">
    <HiOutlineLocationMarker className="address-icon" />
    <div className="address-text">
      <p><strong>Branch Office:</strong></p>
      <p>Address: Ground Floor, Plot No 12, Apartment, Harshad Society, Kothrud, Pune, Maharashtra, 411038</p>
    </div>
  </div>
    
  <div className="social-icons">
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn className="social-icon" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="social-icon" />
    </a>
  </div>
</div>
</div>

        <div className="footer-bottom">
          <div className="bottom-line"></div>
          <div className="copyright-flex">
            <p>&copy; {new Date().getFullYear()} <strong>Secure Grid Private Limited</strong>. All rights reserved.</p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;