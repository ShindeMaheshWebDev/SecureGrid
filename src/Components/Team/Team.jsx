import React from 'react';
import { motion } from 'framer-motion';
import './Team.css';

const Team = () => {
  const coreTeam = [
    { id: 1, name: "CA Mayuri Shah-Phatak", role: "Senior Manager" },
    { id: 2, name: "CA Karan Gawas", role: "Senior Manager" },
    { id: 3, name: "CA Devashree Kane", role: "Senior Manager" },
    { id: 4, name: "Mandar Acharya", role: "Senior Manager" },
    { id: 5, name: "Ashwini Thite", role: " Manager" },
    { id: 6, name: "Sakshi Shinde", role: "Manager" },
    { id: 7, name: "Shivani Ingawale", role: "Senior Executive" },
    { id: 8, name: "Shital Sawlani", role: "HR Executive" },
  ];

  // Name ko split karke last word niche lane wala function
  const renderName = (name) => {
    const words = name.split(" ");
    if (words.length > 1) {
      const lastWord = words.pop(); // Last word nikalta hai
      const firstPart = words.join(" "); // Baki ka name
      return (
        <>
          {firstPart} <br /> <span>{lastWord}</span>
        </>
      );
    }
    return name;
  };

  // Container variant for staggering children
  const containerStyle = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  // Card variant for pop-up effect
  const cardStyle = {
    hidden: { scale: 0.8, opacity: 0, y: 50 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 12 }
    }
  };

  return (
    <div className="team-root-wrapper">
      <div className="team-inner-container">
        <div className="team-header-box">
          <h2 className="team-main-heading"> <span>Core Team</span></h2>
          <div className="team-orange-divider"></div>
        </div>

        <motion.div 
          className="team-members-grid"
          variants={containerStyle}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }} 
        >
          {coreTeam.map((member) => (
            <motion.div 
              key={member.id} 
              className="team-member-card"
              variants={cardStyle}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="team-card-decoration"></div>
              {/* Yahan function call kiya hai */}
              <h3 className="team-member-name">{renderName(member.name)}</h3>
              <p className="team-member-role">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Team;