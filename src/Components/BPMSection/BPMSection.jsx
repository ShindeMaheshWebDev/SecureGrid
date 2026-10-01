import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Users, Cpu, FileText, Globe } from 'lucide-react';
import './BPMSection.css';

const BPMSection = () => {
  // 1. Array mein unique 'id' add ki hai jo niche ke sections se match karegi
  const services = [
    { title: "Management Consulting", icon: <Users size={22} />, id: "management-consulting" },
    { title: "Financial Advisory Services", icon: <ShieldCheck size={22} />, id: "financial-advisory" },
    { title: "Business Advisory", icon: <TrendingUp size={22} />, id: "business-advisory" },
    { title: "Transaction Processing", icon: <Cpu size={22} />, id: "transaction-processing" },
    { title: "Virtual CFO", icon: <FileText size={22} />, id: "virtual-cfo" },
    
  ];

  // 2. Smooth scrolling function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Animation variants jo hamesha work karenge
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
  };

  return (
    <section className="sg-bpm-v2-wrapper">
      <motion.div 
        className="sg-bpm-v2-glass-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.2 }} // Hamesha trigger hoga jab 20% dikhega
      >
        <div className="sg-bpm-v2-content">
          <motion.h2 className="sg-bpm-v2-title" variants={cardVariants}>
          Secure Grid Private Limited 
          </motion.h2>
          
          <motion.h4 className="sg-bpm-v2-subtitle" variants={cardVariants}>
            CHANGE IS THE ONLY CONSTANT!
          </motion.h4>

          <motion.div className="sg-bpm-v2-text-block" variants={cardVariants}>
            <p>
              The finance eco-system is constantly changing due to developments in legal and corporate environment, advancement of technology, opening of global market and more recently the virtual workstyle due to COVID.
            </p>
            <p>
              We constantly adapt to client requirements to incorporate the changed scenario.
            </p>
            <div className="sg-bpm-v2-badge">
              <Globe size={18} className="sg-bpm-v2-icon-spin" />
              <span>Under Secure Grid Private Limited , we are a team of <strong>50+ professionals</strong> that strive to offer support through the entire finance eco-system with onsite and offsite services.</span>
            </div>
          </motion.div>
        </div>

        <div className="sg-bpm-v2-visual">
          <motion.div 
            className="sg-bpm-v2-core"
            whileHover={{ scale: 1.1 }}
            variants={cardVariants}
          >
            OUR SERVICES
          </motion.div>

          <div className="sg-bpm-v2-services-list">
            {services.map((item, index) => (
              <motion.div 
                key={index} 
                className="sg-bpm-v2-item"
                style={{ cursor: 'pointer' }} // Clickable feel ke liye
                variants={cardVariants}
                whileHover={{ x: 10, backgroundColor: "rgba(255, 114, 33, 0.15)" }}
                onClick={() => scrollToSection(item.id)} // Function call yahan ho raha hai
              >
                <span className="sg-bpm-v2-item-icon">{item.icon}</span>
                <span className="sg-bpm-v2-item-text">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BPMSection;