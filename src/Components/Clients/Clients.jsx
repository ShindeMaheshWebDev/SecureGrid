import React from 'react';
import { motion } from 'framer-motion';
import './Clients.css';

const Clients = () => {
  const marqueeClients = [
    { 
      name: "KSB Limited", 
      category: "Industrial", 
      logo: "https://tse2.mm.bing.net/th/id/OIP.Camgr35E3qWBSJwSBnbjQQHaCV?pid=Api&P=0&h=180" 
    },
    

    { 
      name: "Deloitte  LLP", 
      category: "Consulting", 
      logo: "https://i.pinimg.com/736x/a4/90/79/a490795ee21746ab18485b2fedb87b80.jpg" 
    },



    { 
      name: "Bajaj General Insurance Limited", 
      category: "Insurance", 
      logo: "https://tse3.mm.bing.net/th/id/OIP.4Utve3jtMmdI5G8astgIWQHaHa?pid=Api&P=0&h=180" 
    },
    { 
      name: "Wirtgen India Private Limited", 
      category: "Infrastructure", 
      logo: "https://tse2.mm.bing.net/th/id/OIP.B01N692kWN44jYmIRlMG2AHaFj?pid=Api&P=0&h=180" 
    },
    { 
      name: "Valmet Flow Control Private Limited", 
      category: "Industrial", 
      logo: "https://tse4.mm.bing.net/th/id/OIP.XaaPvM88bQaauKWsTIbbEgHaHa?pid=Api&P=0&h=180" 
    },
    { 
      name: "KPIT Technologies  Private Limited", 
      category: "Automotive", 
      logo: "https://cdn.tracxn.com/images/seo/social/companies/kpit-overview-1752502388281.webp" 
    },
    { 
      name: "Neologic Engineers  Private Limited", 
      category: "Engineering", 
      logo: "https://www.neologicengineers.com/images/logo.png" // Direct site logo
    },
    { 
      name: "Prabha Engineers  Private Limited", 
      category: "Engineering", 
      logo: "https://tse1.mm.bing.net/th/id/OIP.MzNSCmJgt8tFG-hxXQqRpgAAAA?pid=Api&P=0&h=180" 
    },
  ];

  return (
    <section className="clients-marquee-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge">Our Partners</span>
          <h2 className="title">Marquee <span>Clients</span></h2>
          <div className="accent-line"></div>
        </motion.div>

        <div className="clients-grid">
          {marqueeClients.map((client, index) => (
            <motion.div 
              className="client-card" 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: (index % 8) * 0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(247, 148, 29, 0.15)" }}
            >
              <div className="client-info">
                <div className="client-icon">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="client-logo-img"
                    onError={(e) => { e.target.src = '🏢'; e.target.style.fontSize = '20px'; }} // Fallback if link fails
                  />
                </div>
                <div>
                  <h4>{client.name}</h4>
                  <span className="client-cat">{client.category}</span>
                </div>
              </div>
              <div className="card-border-glow"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;