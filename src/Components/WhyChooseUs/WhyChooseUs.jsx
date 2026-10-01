
import React from 'react';
import { motion } from 'framer-motion';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="choose-section">
      <div className="choose-container">
        <motion.div 
          className="choose-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
        >
          <h2 className="choose-title">Why Choose <span className="highlight-text">Us</span></h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div 
          className="choose-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {/* Card 1: Expertise */}
          <motion.div className="choose-card" variants={cardVariants}>
            <div className="card-accent orange"></div>
            <h3 className="card-heading">Expertise</h3>
            <ul className="card-list">
              <li>Service line experts and Industry champions</li>
              <li>Multi disciplinary company (One stop solution)</li>
              <li>Automation in line with changing business environment</li>
              <li>Compliance (New and upcoming expertise)</li>
            </ul>
          </motion.div>

          {/* Card 2: Experience */}
          <motion.div className="choose-card featured" variants={cardVariants}>
            <div className="card-accent blue"></div>
            <h3 className="card-heading">Experience</h3>
            <ul className="card-list">
              <li>22+ years of leadership experience</li>
              <li>15+ years of on field experience</li>
              <li>Across sectors and size of entities (Start-ups to Conglomerates)</li>
              <li>High quality services developed over long years</li>
            </ul>
          </motion.div>

          {/* Card 3: Structured Mechanism */}
          <motion.div className="choose-card" variants={cardVariants}>
            <div className="card-accent orange"></div>
            <h3 className="card-heading">Structured Mechanism</h3>
            <ul className="card-list">
              <li>Strategize and plan</li>
              <li>Analysis with focus on root causes and Solution providing</li>
              <li>Meticulous monitoring and communication</li>
              <li>Time bound execution</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;