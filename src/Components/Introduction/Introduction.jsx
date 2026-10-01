import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Navigation ke liye import
import { MapPin, Users, Building, Briefcase } from 'lucide-react';
import './Introduction.css';

const Introduction = () => {
  const navigate = useNavigate(); // Hook initialize karein

  const stats = [
    { label: "Founded In", value: "2012", icon: <Building /> },
    { label: "Staff Experts", value: "Qualified", icon: <Users /> },
    { label: "Offices Across India", value: "7+", icon: <MapPin /> },
    { label: "Industries Served", icon: <Briefcase />, value: "30+" }
  ];

  return (
    <section className="intro-hero-wrapper">
      {/* Background World Map Pattern */}
      <div className="intro-bg-pattern"></div>

      <div className="intro-container">
        <div className="intro-main-content">
          <motion.div 
            className="intro-text-side"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <span className="intro-tag">BPM & Outsourcing Excellence</span>
            <h1 className="intro-title">
              Secure Grid <br/> <span>Private Limited</span>
            </h1>
            <p className="intro-description">
              Registered office in <strong>Mumbai, India</strong>. We provide expert-driven 
              business solutions with a semi-qualified and qualified staff team catering 
              to Public, Private Corporate, and Government sectors.
            </p>
            <motion.button 
              className="intro-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/about')} // Click hone par about page open hoga
            >
              explore More
            </motion.button>
          </motion.div>

          <div className="intro-visual-side">
            <div className="intro-stats-grid">
              {stats.map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="intro-stat-card"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10, borderColor: "#f37021" }}
                >
                  <div className="intro-stat-icon">{item.icon}</div>
                  <div className="intro-stat-info">
                    <h3 className="intro-stat-value">{item.value}</h3>
                    <p className="intro-stat-label">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;