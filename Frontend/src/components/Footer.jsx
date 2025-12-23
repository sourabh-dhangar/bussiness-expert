import React from "react";
import { Link } from "react-router-dom";
import "../style/Footer.css";
// Switched to lucide-react for better compatibility
import { MapPin, Mail, Phone, CheckCircle } from "lucide-react";

export default function Footer() {
  
  // ✅ Function to scroll to top when a link is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1: Contact Info */}
        <div className="footer-column">
          <h2 className="footer-title">Contact Us</h2>
          {/* Removed the contact-card div wrapper here */}
          
            <h3 className="company-name">Business Expert Asia</h3>
            <div className="contact-item">
              <MapPin className="icon" size={20} />
              <span>
               Unit 101 Oxford Towers Airport Road,<br />
               Bangalore Karnataka 560008
              </span>
            </div>
            <div className="contact-item">
              <Mail className="icon" size={20} />
              <span>info@businessexpert.asia</span>
            </div>
            <div className="contact-item">
              <Phone className="icon" size={20} />
              <span>+91 99234 00442</span>
            </div>
            
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h2 className="footer-title">Quick Links</h2>
          <ul className="footer-links">
            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
            <li><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
            <li><Link to="/services" onClick={scrollToTop}>Our Services</Link></li>
            <li><Link to="/who-we-are" onClick={scrollToTop}>Who We Are</Link></li>
            <li><Link to="/contact" onClick={scrollToTop}>Contact Support</Link></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="footer-column">
          <h2 className="footer-title">Our Services</h2>
          <ul className="footer-services">
            <li><CheckCircle className="check" size={16} /> Company Formation</li>
            <li><CheckCircle className="check" size={16} /> Govt. Approvals & Licensing</li>
            <li><CheckCircle className="check" size={16} /> Land & Real Estate</li>
            <li><CheckCircle className="check" size={16} /> FDI & Joint Ventures</li>
            <li><CheckCircle className="check" size={16} /> Import-Export (EXIM)</li>
            <li><CheckCircle className="check" size={16} /> Business Growth Strategy</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © 2025 Business Expert Asia — All Rights Reserved.
      </div>
    </footer>
  );
}