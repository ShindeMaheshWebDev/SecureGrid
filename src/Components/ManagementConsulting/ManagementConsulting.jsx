import React from 'react';
import { motion } from 'framer-motion';
import { Target, BarChart3, Settings2, ShieldCheck, Database, Layers } from 'lucide-react';
import './ManagementConsulting.css';

const ManagementConsulting = () => {
  const categories = [
    {
      type: "Strategic",
      icon: <Target className="mc-icon" />,
      points: [
        "Entity and organization structuring",
        "Business modelling / Risk Mitigation",
        "Benchmarking / Pricing / Costing",
        "Financial Policies Advisory & Drafting"
      ]
    },
    {
      type: "Management",
      icon: <Settings2 className="mc-icon" />,
      points: [
        "Financial Process Automation",
        "Budgets and Control",
        "Internal Financial Controls",
        "Treasury / Working Capital Management"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <section className="mc-section-wrapper">
      <motion.div 
        className="mc-glass-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="mc-header">
          <motion.h2 className="mc-title" variants={itemVariants}>Management Consulting</motion.h2>
          <motion.div className="mc-underline" variants={itemVariants}></motion.div>
        </div>

        <div className="mc-main-grid">
          {/* Left Side: Points */}
          <div className="mc-content-area">
            {categories.map((cat, idx) => (
              <motion.div key={idx} className="mc-category-group" variants={itemVariants}>
                <div className="mc-category-title">
                  {cat.icon}
                  <h3>{cat.type}</h3>
                </div>
                <ul className="mc-list">
                  {cat.points.map((point, i) => (
                    <motion.li 
                      key={i} 
                      whileHover={{ x: 10, color: "#f37021" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="mc-bullet"></span> {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Quote/Tech Box */}
          <motion.div 
            className="mc-quote-box"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="mc-quote-accent"></div>
            <p className="mc-quote-text">
              “As & where technology replaces human actions, what remains to be seen, 
              understood & acted upon is the alignment & relevance of these actions 
              to realize the goals of the business.”
            </p>
            <div className="mc-expert-footer">
              <p>SGPL has a team of experts including industry experts, subject matter experts and system experts to devise multi-pronged solutions.</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ManagementConsulting;