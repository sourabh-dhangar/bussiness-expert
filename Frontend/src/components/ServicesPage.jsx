import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/ServicesPage.css';
import { FaArrowRight, FaCheck } from 'react-icons/fa';

// --- IMPORT YOUR RENAMED LOCAL IMAGES ---
import service1Img from '../assests/services2.jpg';
import service2Img from '../assests/govt-approvals.jpg';
import service3Img from '../assests/fdi-graphic.jpg';
import service4Img from '../assests/real-estate-holding.jpg';
import service5Img from '../assests/import-export.jpg';
import service6Img from '../assests/growth-strategy.jpg';

// --- HERO BACKGROUND (High Quality) ---
const heroBg = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80";

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="services-wrapper">
      
      {/* 1. HERO SECTION */}
      <section className={`services-hero ${isVisible ? 'fade-in' : ''}`}>
        <div className="hero-bg" style={{backgroundImage: `url(${heroBg})`}}></div>
        <div className="hero-overlay-service"></div>
        <div className="hero-content-service">
          <h1 className="hero-title-large">OUR SERVICES</h1>
          <p className="hero-subtitle">
            Precision. Performance. Progress. <br/> Comprehensive solutions for your business success in India.
          </p>
        </div>
      </section>

      {/* 2. COMPANY FORMATION (Image Left / Text Right) */}
      <section className="section-box bg-white slide-up">
        <div className="grid-container-service">
          <div className="img-col">
            <div className="img-wrapper-service">
              <img src={service1Img} alt="Company Formation" className="responsive-img-service zoom-effect" />
            </div>
          </div>
          <div className="text-col">
            <div className="service-number">01</div>
            <h2 className="section-heading">Company Formation & Legal Compliance</h2>
            <h3 className="section-subheading">Build Your Business on a Strong Legal Foundation</h3>
            <p className="service-text">
              Starting a business is exciting — but ensuring it's legally compliant is essential for long-term success. We provide <strong>end-to-end company registration services</strong> in India for foreign investors and startups.
            </p>
            <p className="service-text">
              Our expertise covers <strong>Private Limited Companies, LLPs, branch and liaison offices</strong>, and all essential compliances such as GST, PAN, and MCA filings. With our guidance, you can set up your entity in India quickly and 100% legally.
            </p>
            <Link to="/contact"><button className="btn-service">Talk to an Expert <FaArrowRight/></button></Link>
          </div>
        </div>
      </section>

      {/* 3. GOVT APPROVALS (Text Left / Image Right) */}
      <section className="section-box bg-gray">
        <div className="grid-container-service reverse-layout">
          <div className="text-col">
            <div className="service-number">02</div>
            <h2 className="section-heading">Government Approvals & Licensing</h2>
            <h3 className="section-subheading">Leave the Paperwork to Us – We Make Approvals Easy</h3>
            <p className="service-text">
              Government permissions and licenses are the backbone of any compliant business. Our team helps you identify, apply for, and secure all mandatory approvals to start or expand your operations — fast, and without errors.
            </p>
            <p className="service-text">
              We ensure smooth handling of <strong>sectoral clearances, labor registrations, and tax licenses</strong>. We simplify complex procedures so you can focus on your core business goals.
            </p>
            <Link to="/contact"><button className="btn-service">Get Licensed Today <FaArrowRight/></button></Link>
          </div>
          <div className="img-col">
            <div className="img-wrapper-service">
              <img src={service2Img} alt="Government Approvals" className="responsive-img-service zoom-effect" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. FDI & JOINT VENTURES (Image Left / Text Right) */}
      <section className="section-box bg-white">
        <div className="grid-container-service">
          <div className="img-col">
            <div className="img-wrapper-service">
              <img src={service3Img} alt="FDI Services" className="responsive-img-service zoom-effect" />
            </div>
          </div>
          <div className="text-col">
            <div className="service-number">03</div>
            <h2 className="section-heading">FDI & Joint Venture Support</h2>
            <h3 className="section-subheading">Your Gateway to Seamless International Collaboration</h3>
            <p className="service-text">
              Expanding your business through Foreign Direct Investment (FDI) opens doors to global growth. Our experts guide you through every stage — from <strong>structuring partnerships</strong> to obtaining government approvals — ensuring full legal compliance with FEMA and RBI norms.
            </p>
            <ul className="service-list">
              <li><FaCheck className="check-icon"/> Strategic advice on FDI entry routes</li>
              <li><FaCheck className="check-icon"/> Cross-border joint venture structuring</li>
              <li><FaCheck className="check-icon"/> RBI & FEMA compliance management</li>
            </ul>
            <Link to="/contact"><button className="btn-service">Explore FDI Options <FaArrowRight/></button></Link>
          </div>
        </div>
      </section>

      {/* 5. REAL ESTATE (Text Left / Image Right) */}
      <section className="section-box bg-gray">
        <div className="grid-container-service reverse-layout">
          <div className="text-col">
            <div className="service-number">04</div>
            <h2 className="section-heading">Land & Real Estate Assistance</h2>
            <h3 className="section-subheading">From Identification to Possession — We Manage It All</h3>
            <p className="service-text">
              Finding the right property is critical. Our specialists assist with <strong>industrial land acquisition, commercial spaces, and office leasing</strong> in India. We conduct title checks, due diligence, and local liaisoning to ensure every real estate transaction is safe and transparent.
            </p>
            <p className="service-text">
              We handle every step — from due diligence and government approvals to registration — ensuring you get the best location for your business.
            </p>
            <Link to="/contact"><button className="btn-service">Find Your Space <FaArrowRight/></button></Link>
          </div>
          <div className="img-col">
            <div className="img-wrapper-service">
              <img src={service4Img} alt="Real Estate India" className="responsive-img-service zoom-effect" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMPORT EXPORT (Image Left / Text Right) */}
      <section className="section-box bg-white">
        <div className="grid-container-service">
          <div className="img-col">
            <div className="img-wrapper-service">
              <img src={service5Img} alt="Import Export" className="responsive-img-service zoom-effect" />
            </div>
          </div>
          <div className="text-col">
            <div className="service-number">05</div>
            <h2 className="section-heading">Import – Export (EXIM) Services</h2>
            <h3 className="section-subheading">Connecting You to Global Trade</h3>
            <p className="service-text">
              We help businesses with <strong>IEC code registration, DGFT customs documentation, and product compliance</strong>. Whether you want to import goods into India or export Indian products abroad, we provide a smooth and compliant process.
            </p>
            <p className="service-text">
              From sourcing to logistics and international distribution, we ensure your goods move across borders without bureaucratic delays.
            </p>
            <Link to="/contact"><button className="btn-service">Start Trading <FaArrowRight/></button></Link>
          </div>
        </div>
      </section>

      {/* 7. GROWTH STRATEGY (Text Left / Image Right) */}
      <section className="section-box bg-gray">
        <div className="grid-container-service reverse-layout">
          <div className="text-col">
            <div className="service-number">06</div>
            <h2 className="section-heading">Business Growth & ROI Strategy</h2>
            <h3 className="section-subheading">Scalability Models for Maximum Returns</h3>
            <p className="service-text">
              We design custom growth strategies covering <strong>market entry, manpower planning, supply chain management, and vendor development</strong>. Our goal is to help you grow faster and achieve higher ROI in India's booming market.
            </p>
            <p className="service-text">
              We analyze market trends and competitor landscapes to position your brand for sustainable long-term success.
            </p>
            <Link to="/contact"><button className="btn-service">Scale Your Business <FaArrowRight/></button></Link>
          </div>
          <div className="img-col">
            <div className="img-wrapper-service">
              <img src={service6Img} alt="Growth Strategy" className="responsive-img-service zoom-effect" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;