import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, LayoutGrid, FileCheck, Shield, Factory, Box, Cpu 
} from 'lucide-react';
import './BusinessAdvisory.css';

const BusinessAdvisory = () => {
  const points = [
    { title: "Shared Services Center", icon: <LayoutGrid /> },
    { title: "SOD / SOP advisory, drafting and testing", icon: <FileCheck /> },
    { title: "SOX compliance", icon: <Shield /> },
    { title: "Plant, Property and Equipment Advisory", icon: <Factory /> },
    { title: "Inventory verification and advisory", icon: <Box /> },
    { title: "ERP / Automation - Functional advisory", icon: <Cpu /> }
  ];
  
  return (
    <section className="ba-stream-section">
      {/* Background Marquee Effect */}
      <div className="ba-marquee-container">
        <motion.div 
          className="ba-marquee-text"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          STRATEGIC ADVISORY • OPERATIONAL EXCELLENCE • RISK MITIGATION • 
        </motion.div>
      </div>

      <div className="ba-stream-container">
        <div className="ba-stream-grid">
          
          {/* Left Side: Staggered Content Nodes */}
          <div className="ba-nodes-column">
            {points.map((item, index) => (
              <motion.div 
                key={index}
                className="ba-stream-node"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: false }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  delay: index * 0.1 
                }}
                whileHover={{ y: -10, filter: "brightness(1.2)" }}
              >
                <div className="ba-node-header">
                  <span className="ba-node-icon">{item.icon}</span>
                  <ArrowUpRight className="ba-node-arrow" size={18} />
                </div>
                <h3 className="ba-node-title">{item.title}</h3>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Massive Impact Text */}
          <div className="ba-impact-column">
            <motion.div 
              className="ba-impact-content"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1 }}
            >
              <h2 className="ba-impact-heading">Business<br/>Advisory</h2>
              <div className="ba-impact-divider"></div>
              <p className="ba-impact-quote">
                “At SGPL, we see transactions and processes through clients' point of view and are focused on helping clients pinpoint and successfully implement their work approaches/practices.”
              </p>
              <motion.button 
                className="ba-cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessAdvisory;