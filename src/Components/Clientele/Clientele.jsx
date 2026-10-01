import React from 'react';
import { motion } from 'framer-motion';
import './Clientele.css';

const Clientele = () => {
  // Aapke slide se liye gaye industries
  const industries = [
    "Construction", "Trading", "Biotech", "Agri Trading", "Surgical Equipments",
    "Paints & Chemicals", "Real Estate", "Mould & Moulding", "Elevators", "Auto Components",
    "Hospitality", "Auto Ancillary", "Auto OEM", "Transport & Logistics", "Dairy",
    "Ready To Cook", "Mining", "Pumps", "Welding", "IT & ITeS", "Agrobased", "Pharma"
  ];

  // Infinite loop ke liye array ko double kar rahe hain
  const duplicatedIndustries = [...industries, ...industries];

  return (
    <section className="clientele-section">
      <div className="clientele-container">
        <motion.div 
          className="clientele-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <span className="client-subtitle">TRUSTED ACROSS SECTORS</span>
          <h2 className="client-title">Our Diverse <span>Clientele</span></h2>
          <div className="title-underline"></div>
          <p className="client-desc">
            Serving organizations across 30+ industries including Public/Private Corporates & Govt. Sectors.
          </p>
        </motion.div>

        {/* Industry Scrolling Track */}
        <div className="marquee-wrapper">
          <motion.div 
            className="marquee-content"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              ease: "linear", 
              duration: 30, 
              repeat: Infinity 
            }}
          >
            {duplicatedIndustries.map((item, index) => (
              <div className="industry-card" key={index}>
                <div className="industry-dot"></div>
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Reverse Scrolling Track (Optional for more depth) */}
        <div className="marquee-wrapper reverse">
          <motion.div 
            className="marquee-content"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ 
              ease: "linear", 
              duration: 35, 
              repeat: Infinity 
            }}
          >
            {duplicatedIndustries.slice().reverse().map((item, index) => (
              <div className="industry-card alternate" key={index}>
                <div className="industry-dot orange"></div>
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clientele;