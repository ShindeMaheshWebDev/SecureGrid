import React from 'react';
import { motion } from 'framer-motion'; // 1. Import Framer Motion
import { Scale, ShieldCheck, Briefcase, Search, Globe} from 'lucide-react';
import './ServiceDomains.css';
import mapImg from '../../assets/images/new1.png'; 

const ServiceDomains = () => {
  const services = [
    { title: "Management Consulting", className: "pos-top-left", icon: <Scale size={20} /> },
    { title: " Financial Advisory Services ", className: "pos-top-right", icon: <Globe size={20} /> },
    { title: "Business Advisory", className: "pos-bottom-left", icon: <ShieldCheck size={20} /> },
    { title: "Transaction Processing", className: "pos-bottom-right", icon: <Briefcase size={20} /> },
    { title: "Virtual CFO", className: "pos-footer-right", icon: <Search size={20} /> },
    // { title: "Business Process Management", className: "pos-bottom-right", icon: <Settings size={20} /> },
    // { title: "Business Sustainability", className: "pos-footer-left", icon: <BarChart3 size={20} /> },
    // { title: "IT & Cyber Security", className: "pos-footer-right", icon: <Lock size={20} /> },
  ];

  const cities = [
    { name: "NEW DELHI", top: "40%", left: "32%" },
    { name: "NASHIK", top: "53%", left: "37%" },
    { name: "MUMBAI", top: "59%", left: "32%" },
    { name: "PUNE", top: "64%", left: "38%" },
    { name: "HYDERABAD", top: "37%", left: "34%" },
    { name: "BENGALURU", top: "40%", left: "66%" },
    { name: "CHENNAI", top: "62%", left: "48%" },
  ];

  // 2. Animation Variants define karein
  const sectionVariants = {
    hidden: { opacity: 0, x: -100 }, // Screen ke bahar left mein
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.1 // Bachon (services) ko ek ke baad ek dikhane ke liye
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    // 3. motion.section ka use karein
    <motion.section 
      className="service-domains-wrapper"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // amount: 0.2 ka matlab jab 20% section dikhe tab start ho
    >
      <motion.div className="content-container" variants={sectionVariants}>
        
        <div className="header-box">
          <h2 className="main-title">SERVICE <span className="highlight">DOMAINS</span></h2>
          <div className="animated-line-container"><div className="orange-line-scroller"></div></div>
        </div>

        <div className="map-interaction-area">
          <motion.div className="map-wrapper" variants={itemVariants}>
            <img src={mapImg} alt="India Map" className="central-map" />
            
            {cities.map((city, i) => (
              <div key={i} className="city-marker" style={{ top: city.top, left: city.left }}>
                <div className="red-dot"></div>
                <span className="city-name">{city.name}</span>
              </div>
            ))}
          </motion.div>

          {/* Service boxes animation */}
          {services.map((item, index) => (
            <motion.div 
              key={index} 
              className={`service-node ${item.className}`}
              variants={itemVariants}
            >
              <div className="node-border-box">
                <div className="icon-wrapper">{item.icon}</div>
                <p>{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ServiceDomains;