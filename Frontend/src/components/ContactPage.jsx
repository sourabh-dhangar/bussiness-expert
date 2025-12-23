import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import '../style/ContactPage.css';

const ContactPage = () => {
  const form = useRef();

  // State to handle input changes visually
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    title: '', // Changed from 'subject' to 'title' to match EmailJS
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const sendEmail = (e) => {
    e.preventDefault(); // Stop page reload

    // Basic Validation
    if (!formData.name || !formData.email || !formData.message) {
        alert("Please fill in the required fields.");
        return;
    }

    // YOUR EMAILJS CREDENTIALS
    const serviceID = "service_qdi4sil";
    const templateID = "template_31vpgen";
    const publicKey = "oOdJw2SN9sy1w0KDQ";

    // Sending the form data
    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          console.log('SUCCESS!', result.text);
          alert("Message Sent Successfully!");
          
          // Clear the form
          setFormData({
            name: '',
            email: '',
            phone: '',
            title: '',
            message: ''
          });
      }, (error) => {
          console.log('FAILED...', error.text);
          alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="contact-wrapper fade-in">
      
      {/* HERO HEADER */}
      <div className="contact-hero">
        <span className="badge-contact">GET IN TOUCH</span>
        <h1 className="c"> Let's Connect & Create <span className="highlight-text">Impact Together</span></h1>
        <p>We're here to answer your questions and discuss how we can collaborate on conservation initiatives.</p>
      </div>

      <div className="contact-container slide-up">
        
        {/* LEFT COLUMN: INFO & MAP */}
        <div className="info-panel">
          <h2>Contact Information</h2>
          <p className="info-desc">Reach out to us through any of these channels. We're committed to responding within 24 hours.</p>
          
          <div className="info-item">
            <div className="icon-circle"><Phone size={20}/></div>
            <div>
              <h3>Phone / WhatsApp</h3>
              <p>+91 99234 00442</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-circle"><Mail size={20}/></div>
            <div>
              <h3>Email Support</h3>
              <p>businessexperts98@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-circle"><MapPin size={20}/></div>
            <div>
              <h3>Location</h3>
              <p>Unit 101 Oxford Towers Airport Road,<br/> Bangalore Karnataka 560008</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-circle"><Clock size={20}/></div>
            <div>
              <h3>Business Hours</h3>
              <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
            </div>
          </div>

          {/* GOOGLE MAP */}
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.001696423075!2d77.64998827599044!3d12.971743987343603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a77f095555%3A0x7d2427a1495c25!2sOxford%20Towers!5e0!3m2!1sen!2sin!4v1709664444444!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>

        </div>

        {/* RIGHT COLUMN: FORM */}
        <div className="form-panel">
          <h2>Send Us a Message</h2>
          <p className="form-subtitle">Fill out the form below and our team will get back to you as soon as possible.</p>
          
          {/* Form Tag Linked to EmailJS */}
          <form ref={form} onSubmit={sendEmail}>
            
            <div className="form-group">
              <label>Full Name *</label>
              <input 
                type="text" 
                name="name" 
                placeholder="John Doe" 
                value={formData.name}
                onChange={handleChange} 
                required
              />
            </div>
            
            <div className="form-group">
              <label>Email Address *</label>
              <input 
                type="email" 
                name="email" 
                placeholder="john@example.com" 
                value={formData.email}
                onChange={handleChange} 
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number *</label>
              <input 
                type="tel" 
                name="phone" 
                placeholder="+91 98765 43210" 
                value={formData.phone}
                onChange={handleChange} 
                required
              />
            </div>

            <div className="form-group">
              <label>Subject *</label>
              {/* IMPORTANT: Name is 'title' to match your Email Template */}
              <input 
                type="text" 
                name="title" 
                placeholder="How can we help you?" 
                value={formData.title}
                onChange={handleChange} 
                required
              />
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea 
                name="message" 
                rows="5" 
                placeholder="Tell us more about your inquiry..." 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Send Message <Send size={18}/>
            </button>
            
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;