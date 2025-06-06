import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Contact form submitted:', formData);
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Reset form after success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="contact-container">
        <div className="contact-success">
          <div className="success-icon">✅</div>
          <h2>Thank You!</h2>
          <p>Your message has been sent successfully. We'll get back to you within 24 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>Get in touch with our real estate experts</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>Ready to find your dream property? Our team is here to help you every step of the way.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-text">
                <h3>Address</h3>
                <p>123 King Street West<br/>Kitchener, ON N2G 1A7</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-text">
                <h3>Phone</h3>
                <p>(519) 555-0123</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-text">
                <h3>Email</h3>
                <p>info@place.ca</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">🕒</div>
              <div className="contact-text">
                <h3>Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br/>
                   Saturday: 10:00 AM - 4:00 PM<br/>
                   Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(519) 555-0123"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="buying">Buying a Property</option>
                  <option value="selling">Selling a Property</option>
                  <option value="renting">Renting</option>
                  <option value="valuation">Property Valuation</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell us how we can help you..."
              />
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <div className="map-section">
        <h2>Find Us</h2>
        <div className="map-placeholder">
          <div className="map-content">
            <div className="map-icon">🗺️</div>
            <h3>Interactive Map</h3>
            <p>123 King Street West, Kitchener, ON</p>
            <p>Located in the heart of downtown Kitchener</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;