import React, { useEffect, useState } from 'react';
import '../style/AboutUs.css';
import { FaLightbulb, FaHandshake, FaChartLine } from 'react-icons/fa';

// --- IMPORT YOUR LOCAL IMAGES ---
import introImg from '../assests/aboutus.jpg';
import missionImg from '../assests/aboutus1.jpg.png';
import visionImg from '../assests/vision-flag.jpg';

// --- HERO BACKGROUND (High Quality Professional) ---
const heroBg = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="about-wrapper">
      
      {/* 1. HERO SECTION (Old Title + New Design) */}
      <section className={`about-hero ${isVisible ? 'fade-in' : ''}`}>
        <div className="hero-bg" style={{backgroundImage: `url(${heroBg})`}}></div>
        <div className="hero-overlay-about"></div>
        <div className="hero-content-about">
          <h1 className="hero-title-large">
            <span className="text-white">EMPOWER</span>
            <span className="text-gradient">MENT</span>
          </h1>
          <h2 className="hero-subtitle">
            Empowering Startups and Innovators Globally
          </h2>
        </div>
      </section>

      {/* 2. FLOATING VALUE CARDS (Old Quotes + Glass Effect) */}
      <div className="values-container slide-up">
        <div className="value-card-glass">
          <FaLightbulb className="card-icon" />
          <p className="card-text">
            <span className="quote">"</span>Insight Today.<br />
            Impact Tomorrow.<span className="quote">"</span>
          </p>
        </div>
        <div className="value-card-glass highlight-card">
          <FaHandshake className="card-icon white-icon" />
          <p className="card-text text-white">
            <span className="quote">"</span>Expert Guidance.<br />
            Lasting Success.<span className="quote">"</span>
          </p>
        </div>
        <div className="value-card-glass">
          <FaChartLine className="card-icon" />
          <p className="card-text">
            <span className="quote">"</span>Smart Solutions for<br />
            Smarter Businesses.<span className="quote">"</span>
          </p>
        </div>
      </div>

      {/* 3. INTRODUCTION (Split Layout: Text Left / Image Right) */}
      <section className="section-box bg-white">
        <div className="grid-container-about">
          <div className="text-col">
            <span className="tag-about">INTRODUCTION</span>
            <h2 className="section-heading">Transforming Visionary Ideas</h2>
            <p className="about-text">
              At <strong>Business Expert Asia</strong>, we believe in transforming visionary ideas into thriving enterprises. As a consulting and management firm rooted in <strong>India</strong>, we serve as the bridge between local innovation and global opportunity.
            </p>
            <p className="about-text">
              Our goal is to empower startups and change-makers by providing strategic guidance, connecting them with global markets, and helping them scale with cultural relevance. Since our inception, we've grown from a close-knit consultancy into a globally minded partner for emerging ventures.
            </p>
          </div>
          <div className="img-col">
            <div className="img-wrapper-about">
              <img src={introImg} alt="Business Introduction" className="responsive-img-about zoom-effect" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. MISSION (Split Layout: Image Left / Text Right) */}
      <section className="section-box bg-gray">
        <div className="grid-container-about reverse-layout">
          <div className="img-col">
            <div className="img-wrapper-about">
              <img src={missionImg} alt="Our Mission India" className="responsive-img-about zoom-effect" />
            </div>
          </div>
          <div className="text-col">
            <span className="tag-about">OUR MISSION</span>
            <h2 className="section-heading">Your Trusted Partner</h2>
            <p className="about-text">
              Our mission is to make India the most accessible and profitable destination for global investors. We aim to provide end-to-end support — from company registration and legal compliance to real estate, import-export, and growth strategy.
            </p>
            <p className="about-text">
              By simplifying India's complex business ecosystem, we help international entrepreneurs build sustainable and profitable enterprises with confidence.
            </p>
            <ul className="about-list">
              <li>✓ Simplify complex legal ecosystems</li>
              <li>✓ Build sustainable enterprises</li>
              <li>✓ Drive profitable growth</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. VISION (Split Layout: Text Left / Image Right) */}
      <section className="section-box bg-white">
        <div className="grid-container-about">
          <div className="text-col">
            <span className="tag-about">OUR VISION</span>
            <h2 className="section-heading">Driving Global Growth</h2>
            <p className="about-text">
              Our vision is to be the most trusted partner for international businesses entering India. We aspire to create a thriving platform where investors, startups, and global companies can seamlessly establish and scale their presence.
            </p>
            <p className="about-text">
              By combining innovation, compliance, and growth strategy, we envision driving both client ROI and India's economic growth to new heights.
            </p>
          </div>
          <div className="img-col">
            <div className="img-wrapper-about">
              <img src={visionImg} alt="Our Vision" className="responsive-img-about zoom-effect" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;