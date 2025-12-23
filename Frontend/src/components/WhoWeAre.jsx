import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/WhoWeAre.css';
import { 
  FaUserTie, FaLightbulb, FaHandshake, FaGlobeAsia, 
  FaCheckCircle, FaChartLine, FaUsers 
} from 'react-icons/fa';

// --- IMPORT YOUR LOCAL IMAGES ---
import introImg from '../assests/whoweare.jpg';
import teamImg from '../assests/whoweare2.jpg';
import valueImg from '../assests/why-us-holding.jpg';

// --- HERO BACKGROUND (High Quality) ---
const heroBg = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80";

const WhoWeAre = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // --- YOUR OLD CONTENT: VALUES ---
  const values = [
    {
      icon: <FaHandshake />,
      title: 'Integrity & Transparency',
      desc: 'We believe in honesty, clarity, and trust. Our clients deserve complete transparency — in communication, pricing, and process.'
    },
    {
      icon: <FaUserTie />,
      title: 'Expertise with Excellence',
      desc: 'We bring experience, skill, and innovation together. Our team of strategists and legal advisors ensures every solution is accurate and result-oriented.'
    },
    {
      icon: <FaUsers />,
      title: 'Client-Centric Approach',
      desc: 'Your success is our mission. We focus on building long-term relationships and creating strategies that drive measurable growth.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      desc: 'We stay ahead so your business can move forward. We constantly upgrade our knowledge to provide modern, future-ready solutions.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Accountability',
      desc: 'We take ownership. When we promise results, we mean it. Our accountability ensures you can rely on us for timely delivery.'
    },
    {
      icon: <FaGlobeAsia />,
      title: 'Collaboration',
      desc: 'Together, we grow. We believe in teamwork — both within our organization and with our clients.'
    }
  ];

  // --- YOUR OLD CONTENT: PROCESS STEPS ---
  const steps = [
    {
      num: '01',
      title: 'Connect & Discover',
      desc: 'Every successful partnership begins with understanding. We start by learning about your business, challenges, and objectives.'
    },
    {
      num: '02',
      title: 'Plan & Strategize',
      desc: 'Our experts analyze your operations and market potential to design a custom, ROI-driven action plan tailored for India.'
    },
    {
      num: '03',
      title: 'Execute & Grow',
      desc: 'We work hand-in-hand with you to implement the plan — tracking performance, optimizing results, and ensuring sustainable growth.'
    }
  ];

  return (
    <div className="who-wrapper">
      
      {/* 1. HERO SECTION */}
      <section className={`who-hero ${isVisible ? 'fade-in' : ''}`}>
        <div className="hero-bg" style={{backgroundImage: `url(${heroBg})`}}></div>
        <div className="hero-overlay-who"></div>
        <div className="hero-content-who">
          <span className="badge-who">Our Philosophy</span>
          <h1 className="hero-title-large">Transforming Vision into <br/> <span className="text-gradient">Sustainable Growth</span></h1>
          <p className="hero-subtitle">
            More than consultants. We are your strategic partners for business success in India.
          </p>
        </div>
      </section>

      {/* 2. INTRO (Text Left / Image Right) */}
      <section className="section-box bg-white slide-up">
        <div className="grid-container-who">
          <div className="text-col">
            <span className="tag-who">WHO WE ARE</span>
            <h2 className="section-heading">Your Strategic Partner for Business Growth</h2>
            <p className="who-text">
              At <strong>Business Expert Asia</strong>, we empower entrepreneurs, startups, and enterprises to grow confidently with the right strategy, structure, and support.
            </p>
            <p className="who-text">
              We are a team of experienced business consultants, financial advisors, and legal professionals who work together to guide your business through every stage — from company formation to growth and compliance. We simplify business challenges into clear, profitable solutions.
            </p>
          </div>
          <div className="img-col">
            <div className="img-wrapper-who">
              <img src={introImg} alt="Business Meeting" className="responsive-img-who zoom-effect" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR VALUES (Grid Layout) */}
      <section className="section-box bg-gray">
        <div className="center-header">
          <span className="tag-who">CORE VALUES</span>
          <h2 className="section-heading">The Principles That Drive Us</h2>
          <p className="section-desc-center">We believe in ethical practices and a commitment to doing the right thing, always.</p>
        </div>
        
        <div className="values-grid">
          {values.map((val, index) => (
            <div key={index} className="value-card-modern">
              <div className="value-icon-box">{val.icon}</div>
              <h3>{val.title}</h3>
              <p>{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. OUR PROCESS (3 Steps Horizontal) */}
      <section className="section-box bg-dark text-white">
        <div className="center-header">
          <span className="tag-who tag-light">OUR PROCESS</span>
          <h2 className="section-heading text-white">Three Simple Steps to Success</h2>
          <p className="section-desc-center text-gray">We Simplify Growth — You Focus on Success.</p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TEAM & LEGACY (Image Left / Text Right) */}
      <section className="section-box bg-white">
        <div className="grid-container-who reverse-layout">
          <div className="img-col">
            <div className="img-wrapper-who">
              <img src={teamImg} alt="Our Expert Team" className="responsive-img-who zoom-effect" />
            </div>
          </div>
          <div className="text-col">
            <span className="tag-who">OUR LEGACY</span>
            <h2 className="section-heading">A Team You Can Rely On</h2>
            <p className="who-text">
              Your business is only as safe as the people handling it. Since our inception, we've grown from a close-knit consultancy into a globally minded partner for emerging ventures.
            </p>
            <ul className="who-list">
              <li><strong>Chartered Accountants (CA):</strong> To manage your tax and audits.</li>
              <li><strong>Company Secretaries (CS):</strong> To ensure corporate governance.</li>
              <li><strong>Corporate Lawyers:</strong> To handle contracts and disputes.</li>
              <li><strong>Real Estate Strategists:</strong> To find the perfect location.</li>
            </ul>
            <div className="btn-group-who">
               <Link to="/services"><button className="btn-primary-who">Book Services</button></Link>
               <Link to="/contact"><button className="btn-outline-who">Contact Us</button></Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WhoWeAre;