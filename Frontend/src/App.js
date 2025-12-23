import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// --- Components Imports ---
// Make sure these filenames match exactly what is in your 'components' folder
import Navbar from "./components/Navbar";
import HomePage from "./components/Home"; 
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ServicesPage from './components/ServicesPage';
import WhoWeAre from './components/WhoWeAre';
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <Router>
      {/* Navbar appears on all pages */}
      <Navbar />
      
      {/* Routes change the content based on the URL */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* Footer appears on all pages */}
      <Footer />
    </Router>
  );
}

export default App;