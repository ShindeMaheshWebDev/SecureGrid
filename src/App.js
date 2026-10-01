import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop"; 
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Introduction from "./Components/Introduction/Introduction.jsx";
import Clientele from "./Components/Clientele/Clientele.jsx";
import Clients from "./Components/Clients/Clients.jsx";
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs.jsx";

import AboutHero from "./Components/AboutHero/AboutHero.jsx";
import ServiceDomains from "./Components/ServiceDomains/ServiceDomains";
import TeamInfo from "./Components/TeamInfo/TeamInfo.jsx";
import Team from "./Components/Team/Team";
import DirectorDeck from "./Components/DirectorDeck/DirectorDeck.jsx";

import BPMSection from "./Components/BPMSection/BPMSection";
import ManagementConsulting from "./Components/ManagementConsulting/ManagementConsulting";
import VirtualCFO from "./Components/VirtualCFO/VirtualCFO";
import FinancialAdvisory from "./Components/FinancialAdvisory/FinancialAdvisory";
import TransactionProcessing from "./Components/TransactionProcessing/TransactionProcessing";
import BusinessAdvisory from "./Components/BusinessAdvisory/BusinessAdvisory";

import ContactPage from "./Components/ContactPage/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={
            <>
              <Hero />
              <Introduction />
              <Clientele />
              <Clients />
              <WhyChooseUs />
            </>
          }
        />

        {/* ABOUT PAGE */}
        <Route path="/about" element={
            <>
              <AboutHero />
              <ServiceDomains />
              <TeamInfo />
              <Team />
              <DirectorDeck />
            </>
          }
        />

        {/* SERVICE PAGE - Yahan IDs add ki gayi hain */}
        <Route path="/service" element={
            <>
              <BPMSection />
              
              <div id="management-consulting">
                <ManagementConsulting />
              </div>

              <div id="virtual-cfo">
                <VirtualCFO />
              </div>

              <div id="financial-advisory">
                <FinancialAdvisory />
              </div>

              <div id="transaction-processing">
                <TransactionProcessing />
              </div>

              <div id="business-advisory">
                <BusinessAdvisory />
              </div>
            </>
          }
        />

        {/* CONTACT PAGE */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;