import React from 'react';
import { motion } from 'framer-motion';
import './TeamInfo.css';

const TeamInfo = () => {
  const talentPool = [
    "Chartered Accountants", "Company Secretaries", "Cost Accountants", "MBAs",
    "Legal Professionals", "Ex-Bankers",
    "HR Professionals", "Engineers"
  ];

  return (
    <section className="team-section">
      <div className="team-container">
        
        {/* --- Left Side: Team Overview --- */}
        <motion.div 
          className="team-overview"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Team Overview</h2>
          <p className="sub-text">A Pool of Talent is what we bring to the table</p>

          <div className="hierarchy-flow">
            <div className="flow-item">
              <div className="flow-box dark-blue">2 Directors</div>
              <div className="flow-arrow">
                <p>Experienced professionals with strong leadership qualities</p>
              </div>
            </div>

            <div className="flow-item">
              <div className="flow-box mid-blue">Specialists</div>
              <div className="flow-arrow">
                <p>Industry • System • Service offering</p>
              </div>
            </div>

            <div className="flow-item">
              <div className="flow-box light-blue">50+ Team</div>
              <div className="flow-arrow">
                <p>Deep insights across industries and services</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- Right Side: Talent Pool --- */}
        <motion.div 
          className="talent-pool-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <div className="talent-header">
            <h3>10+ years of experience</h3>
            <p>Sourcing highly talented professionals across industries</p>
          </div>
          
          <div className="talent-grid">
            {talentPool.map((item, index) => (
              <motion.div 
                key={index} 
                className="talent-tag"
                whileHover={{ scale: 1.05, backgroundColor: "#F7941D", color: "#fff" }}
              >
                <span className="bullet"></span> {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TeamInfo;