import React from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, Users, Clock, Database, ShieldCheck, FileSearch, BarChart, ChevronRight 
} from 'lucide-react';
import './TransactionProcessing.css';

const TransactionProcessing = () => {
  const steps = [
    { title: "Accounts Payable", icon: <CreditCard /> },
    { title: "Accounts Receivable", icon: <Users /> },
    { title: "Payroll", icon: <Clock /> },
    { title: "General Ledger accounting", icon: <Database /> },
    { title: "Tax accounting and return filing", icon: <ShieldCheck /> },
    { title: "Pre-audit support & Financial reporting", icon: <FileSearch /> },
    { title: "Consolidation of Financial Statements", icon: <BarChart /> }
  ];

  return (
    <section className="tp-kinetic-section">
      <div className="tp-kinetic-container">
        
        {/* Left Side: Kinetic Typography */}
        <div className="tp-kinetic-left">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="tp-kinetic-header"
          >
            <span className="tp-kinetic-tag">Services Overview</span>
            <h2 className="tp-kinetic-title">Transaction<br/>Processing</h2>
          </motion.div>

          <div className="tp-kinetic-description">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="tp-kinetic-main-text"
            >
              "SGPL’s TPS professionals bring out a <strong>leading practice approach</strong> that emphasizes on creating and preserving client value."
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="tp-kinetic-sub-text"
            >
              We help client identify any risks in transaction processing and also advice on solutions that are mitigating and controlling.
            </motion.p>
          </div>
        </div>

        {/* Right Side: Sliding Interactive List */}
        <div className="tp-kinetic-right">
          <div className="tp-kinetic-list">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                className="tp-kinetic-item"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, ease: "backOut" }}
                whileHover={{ skewX: -5, x: -10 }}
              >
                <div className="tp-item-content">
                  <span className="tp-item-num">0{i + 1}</span>
                  <span className="tp-item-label">{step.title}</span>
                </div>
                <motion.div 
                  className="tp-item-hover-line"
                  whileHover={{ width: "100%" }}
                />
                <ChevronRight className="tp-kinetic-arrow" size={20} />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
      {/* Background Kinetic Element */}
      <div className="tp-kinetic-bg-text">TPS</div>
    </section>
  );
};

export default TransactionProcessing;