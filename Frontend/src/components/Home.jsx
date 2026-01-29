import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.css';
import { 
  FaChartLine, FaHandshake, FaFileContract, 
  FaGlobeAsia, FaBuilding, FaShip, FaArrowRight, FaCheckCircle 
} from 'react-icons/fa';

// --- YOUR LOCAL IMAGES ---
import introImg from '../assests/intro-meeting.jpg';
import indiaChartImg from '../assests/india-stats.jpg';
import whyUsImg from '../assests/why-us-holding.jpg';
import investmentImg from '../assests/investment-team.jpg';

// --- SERVICE BACKGROUNDS (High Quality Professional) ---
const cardBg1 = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80"; // Papers/Contract
const cardBg2 = "https://images.unsplash.com/photo-1526304640152-d4619684e484?auto=format&fit=crop&w=600&q=80"; // Govt/Pillars
const cardBg3 = "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&w=600&q=80"; // Globe/Connect
const cardBg4 = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"; // Building
const cardBg5 = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"; // Ship/Container
const cardBg6 = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"; // Strategy/Team

// --- SLIDER IMAGES ---
const sliderImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80", 
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&q=80", 
  "https://images.unsplash.com/photo-1504384308090-c54be385263d?auto=format&fit=crop&w=1920&q=80"
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-wrapper">
      
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        {sliderImages.map((img, index) => (
          <div 
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{backgroundImage: `url(${img})`}}
          ></div>
        ))}
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <div className="animate-sequence-1">
            <span className="badge-home"><FaGlobeAsia/> Your Gateway to Success</span>
          </div>
          <h1 className="animate-sequence-2">Yours Business Success <br/> Starts in <span className="highlight-text">India</span></h1>
          <p className="animate-sequence-3">
            Empowering global investors to establish, grow, and succeed in India's dynamic market with 100% compliance.
          </p>
          <div className="btn-group animate-sequence-4">
            <Link to="/services"><button className="btn-primary">Explore Services</button></Link>
            <Link to="/contact"><button className="btn-outline">Free Consultation</button></Link>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE (Split Layout) */}
      <section className="section-box slide-up">
        <div className="grid-container">
          {/* Text Left */}
          <div className="text-col">
            <span className="tag-home animate-child-1">WHO WE ARE</span>
            <h2 className="animate-child-2">Business Expert Asia | Start, Invest & Grow</h2>
            <p className="home-text animate-child-3">
              We provide <strong>end-to-end solutions</strong> for foreign companies and investors to establish their businesses in India. From company registration and legal compliance to land acquisition, import-export, and ROI strategy — <strong>Business Expert Asia</strong> is your trusted partner on the ground.
            </p>
            <div className="stats-row animate-child-4">
               <div className="stat-item"><h3>200+</h3><p>Projects</p></div>
               <div className="stat-item"><h3>10+</h3><p>Years</p></div>
               <div className="stat-item"><h3>100%</h3><p>Success</p></div>
            </div>
          </div>
          {/* Image Right */}
          <div className="img-col animate-child-5">
            <div className="img-wrapper">
              <img src={introImg} alt="Strategic Partnership" className="responsive-img shadow-lg zoom-effect" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES (Cards with Backgrounds) */}
      <section className="section-box bg-gray">
        <div className="center-header">
          <span className="tag-home-large">WHAT WE OFFER</span>
          <h2 className="section-title-large">Comprehensive Solutions</h2>
          <p className="text-gray-center">End-to-end services tailored for your business success in India.</p>
        </div>

        <div className="cards-grid">
          <ServiceCard bg={cardBg1} icon={<FaFileContract />} title="Company Formation" desc="End-to-end registration for Pvt Ltd, LLPs, and Liaison offices. We handle GST, PAN, and MCA filings." />
          <ServiceCard bg={cardBg2} icon={<FaCheckCircle />} title="Govt. Approvals" desc="Smooth handling of government approvals, tax registrations, and licensing requirements." />
          <ServiceCard bg={cardBg3} icon={<FaGlobeAsia />} title="FDI & Ventures" desc="Expert guidance on FDI entry routes, FEMA/RBI compliance, and structuring joint ventures." />
          <ServiceCard bg={cardBg4} icon={<FaBuilding />} title="Land & Real Estate" desc="Assistance with industrial land acquisition, commercial leasing, title checks, and due diligence." />
          <ServiceCard bg={cardBg5} icon={<FaShip />} title="Import-Export" desc="IEC registration, DGFT customs documentation, product compliance, sourcing, and logistics." />
          <ServiceCard bg={cardBg6} icon={<FaChartLine />} title="Growth Strategy" desc="Custom growth strategies covering market entry, supply chain optimization, and scalability models." />
        </div>
        
        <div className="view-more-container">
           <Link to="/services"><button className="btn-secondary">View All Services</button></Link>
        </div>
      </section>

      {/* 4. WHY INDIA (Image Left, Text Right) */}
      <section className="section-box">
        <div className="grid-container">
          <div className="img-col animate-child-1">
             <div className="img-wrapper">
               <img src={indiaChartImg} alt="India Economy Growth Chart" className="responsive-img shadow-lg zoom-effect" />
             </div>
          </div>
          <div className="text-col">
            <span className="tag-home animate-child-2">WHY INDIA?</span>
            <h2 className="animate-child-3">The Land of Opportunities</h2>
            <p className="home-text animate-child-4">
              India has surpassed major economies to become a global powerhouse.
            </p>
            <ul className="home-list animate-child-5">
              <li>🌍 <strong>4th Largest Economy</strong> surpassing Japan & Germany.</li>
              <li>👨‍💼 <strong>Largest Youth Workforce</strong> driving innovation.</li>
              <li>💰 <strong>Attractive FDI policies</strong> with high ROI potential.</li>
              <li>🏭 <strong>Global Manufacturing Hub</strong> with PLI schemes.</li>
            </ul>
            <Link to="/services" className="link-arrow">Read Market Analysis <FaArrowRight className="arrow-icon"/></Link>
          </div>
        </div>
      </section>

      {/* 5. INVESTMENT LANDSCAPE (Text Left, Image Right) */}
      <section className="section-box bg-light-blue">
        <div className="grid-container">
          <div className="text-col">
            <span className="tag-home animate-child-1">INVESTMENT LANDSCAPE</span>
            <h2 className="animate-child-2">Where Does India Invest?</h2>
            <p className="home-text animate-child-3">
              Understanding the capital flow is crucial. Whether it is Equity, Mutual Funds, or Direct Investment, we help you navigate the Indian financial ecosystem to maximize your returns.
            </p>
            <Link to="/services" className="animate-child-4"><button className="btn-primary">View Investment Guide</button></Link>
          </div>
          <div className="img-col animate-child-5">
             <div className="img-wrapper-rounded">
               <img src={investmentImg} alt="India Business Team" className="responsive-img zoom-effect" />
             </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US (Dark Mode) */}
      <section className="section-box bg-dark text-white">
        <div className="grid-container">
            <div className="text-col">
                <span className="tag-home tag-light">WHY CHOOSE US</span>
                <h2>Trusted by Investors Worldwide</h2>
                <p className="text-light-gray">Business Expert Asia is your single-window partner.</p>
                
                <ul className="home-list list-white">
                    <li>✓ <strong>Single-window partner</strong> for all services.</li>
                    <li>✓ <strong>100% legal compliance</strong> with Indian authorities.</li>
                    <li>✓ <strong>Customized ROI-focused</strong> strategy.</li>
                    <li>✓ <strong>Global experience</strong>, local expertise.</li>
                </ul>
                <Link to="/contact"><button className="btn-primary mt-4">Start Your Journey</button></Link>
            </div>
            
            <div className="img-col">
                <div className="img-wrapper-rounded">
                    <img src={whyUsImg} alt="We Hold India For You" className="responsive-img zoom-effect" />
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

// Reusable Service Card
const ServiceCard = ({ bg, icon, title, desc }) => (
  <div className="service-card-bg" style={{backgroundImage: `url(${bg})`}}>
    <div className="card-overlay"></div>
    <div className="card-content">
      <div className="icon-box-glass">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <Link to="/services" className="link-glass">Learn More →</Link>
    </div>
  </div>
);

export default HomePage;
