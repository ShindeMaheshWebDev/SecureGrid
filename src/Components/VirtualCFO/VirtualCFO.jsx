import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ShieldCheck, Calculator, ArrowUpRight, Zap } from 'lucide-react';
import './VirtualCFO.css';

const VirtualCFO = () => {
  const data = [
    {
      category: "Management Consulting",
      icon: <Briefcase />,
      items: ["Strategic advisory", "Management advisory"],
      color: "#f37021"
    },
    {
      category: "Compliance",
      icon: <ShieldCheck />,
      items: ["Advisory", "Execution"],
      color: "#0056b3"
    },
    {
      category: "Financial Operations",
      icon: <Calculator />,
      items: ["Accounting", "Reporting", "Financial closures"],
      color: "#f37021"
    }
  ];

  return (
    <section className="vcf-v3-section">
      <div className="vcf-v3-container">
        
        {/* Left Side: Dynamic Content Blocks */}
        <div className="vcf-v3-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="vcf-v3-intro"
          >
            <span className="vcf-v3-tag">Premium Services</span>
            <h2 className="vcf-v3-heading">Virtual CFO</h2>
          </motion.div>

          <div className="vcf-v3-blocks-grid">
            {data.map((box, idx) => (
              <motion.div 
                key={idx}
                className="vcf-v3-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="vcf-v3-block-header">
                  <div className="vcf-v3-icon" style={{ color: box.color }}>{box.icon}</div>
                  <h3>{box.category}</h3>
                </div>
                <div className="vcf-v3-items-wrap">
                  {box.items.map((item, i) => (
                    <span key={i} className="vcf-v3-chip">
                      <Zap size={10} style={{marginRight: '5px'}} /> {item}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="vcf-v3-corner-arrow" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Floating Glass Insight */}
        <div className="vcf-v3-right">
          <motion.div 
            className="vcf-v3-insight-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
          >
            <div className="vcf-v3-quote-mark">“</div>
            <p className="vcf-v3-main-quote">
              The job of modern CFOs today is more important and more complex than ever. 
              Virtual CFO services enable clients to get a <strong>perfect blend</strong> of professional acumen, 
              vision, leadership, performance and integrity.
            </p>
            <div className="vcf-v3-footer">
              <div className="vcf-v3-line"></div>
              <span>STRATEGIC FINANCIAL LEADERSHIP</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default VirtualCFO;