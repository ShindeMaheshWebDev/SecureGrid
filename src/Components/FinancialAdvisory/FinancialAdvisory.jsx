import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Landmark, FileStack, Users, BarChart, Search, ClipboardCheck } from 'lucide-react';
import './FinancialAdvisory.css';

const FinancialAdvisory = () => {
  const points = [
    { text: "Transaction feasibility study and advisory", icon: <BarChart /> },
    { text: "Equity and debt capital raising", icon: <Landmark /> },
    { text: "Pitch deck / IM advisory and preparation", icon: <FileStack /> },
    { text: "Deal structuring advisory and support", icon: <Users /> },
    { text: "Due Diligence", icon: <Search /> },
    { text: "Valuation", icon: <TrendingUp /> },
    { text: "Post deal compliances", icon: <ClipboardCheck /> }
  ];

  // Animation for each line
  const lineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
    })
  };

  return (
    <section className="fa-unique-wrapper">
      <div className="fa-unique-container">
        
        {/* Top Branding Section */}
        <motion.div 
          className="fa-unique-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <h2 className="fa-unique-main-title">Financial Advisory Services</h2>
          <div className="fa-unique-accent-line"></div>
        </motion.div>

        <div className="fa-unique-layout">
          {/* Left Side: Large Typography List */}
          <div className="fa-unique-list-side">
            {points.map((item, i) => (
              <motion.div 
                key={i}
                custom={i}
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="fa-unique-row"
              >
                <span className="fa-unique-row-icon">{item.icon}</span>
                <p className="fa-unique-row-text">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Bold Insight (No Box) */}
          <motion.div 
            className="fa-unique-insight-side"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="fa-unique-large-quote">
              <span className="fa-quote-gradient">“</span>
              <p>
                Financial Advisory - Companies looking to raise capital need to know 
                their full range of options and how to achieve financing structures 
                which meet their strategic and operational objectives.
              </p>
            </div>
            
            <div className="fa-unique-highlight-text">
              <p>
                We provide independent and objective advice through our 
                <strong> due diligence</strong> and <strong>valuation services.</strong>
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default FinancialAdvisory;