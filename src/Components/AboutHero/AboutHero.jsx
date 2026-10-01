import React from 'react';
import './AboutHero.css';
import { Link } from "react-router-dom";
import aboutVideo from '../../assets/images/about-video.mp4'; 

const AboutHero = () => {
  return (
    <section className="hero-container">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="hero-video"
      >
        <source src={aboutVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h3 className="company-name">Secure Grid Private Limited</h3>
        <h1>Building the <span>Future</span> of Security</h1>
        <p>
          Empowering businesses with cutting-edge innovations and robust digital 
          infrastructure. We deliver excellence through technology you can trust.
        </p>
        <div className="hero-btns">
  <Link to="/service">
    <button className="btn-primary">Explore Services</button>
  </Link>
  
  <Link to="/contact">
    <button className="btn-outline">Contact Us</button>
  </Link>
</div>
      </div>
    </section>
  );
};

export default AboutHero;