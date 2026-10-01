import React from 'react';
import { motion } from 'framer-motion';
import './DirectorDeck.css';

// Images ko yahan import karein (Relative path ke hisaab se)
import tejasImg from '../../assets/images/Tejas Image.png'; 
import swanandImg from '../../assets/images/Swanand Image.png'; // Agar dusri image hai toh uska path dein

const DirectorDeck = () => {
  const directors = [
    {
      name: "Mr. Tejas Mulay",
      // exp: "Over 18 years of professional experience",
      specialization: "Director",
      // additional: "Experience in handling large assignments across sectors",
    
      img: tejasImg // Variable use karein
    },
    {
      name: "Mr. Swanand Phatak",
      // exp: "Over 16 years of professional experience",
      specialization: "Director",
      // additional: "Experience in handling large assignments across sectors",
     
      img: swanandImg // Variable use karein
    }
  ];

  return (
    <section className="director-section">
      <div className="container">
        <h2 className="section-title">Director's <span className="highlight">Deck</span></h2>
        <div className="director-grid">
          {directors.map((director, index) => (
            <motion.div 
              className="director-card" 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="director-img-container">
                <img src={director.img} alt={director.name} />
              </div>
              <div className="director-info">
                <h3>{director.name}</h3>
                <p className="exp-tag">{director.exp}</p>
                <ul>
                  <li>{director.specialization}</li>
                  <li>{director.additional}</li>
                  <li className="key-highlight">{director.key}</li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectorDeck;