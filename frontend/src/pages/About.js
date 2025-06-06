import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>About Place</h1>
          <p>Your trusted partner in finding the perfect property in Kitchener-Waterloo</p>
        </div>
      </div>

      <div className="about-content">
        <section className="about-section">
          <div className="container">
            <div className="section-grid">
              <div className="text-content">
                <h2>Our Story</h2>
                <p>
                  Founded in 2020, Place emerged from a simple vision: to make real estate 
                  accessible and transparent for everyone in the Kitchener-Waterloo region. 
                  We recognized that finding the perfect home shouldn't be a stressful, 
                  complicated process.
                </p>
                <p>
                  Our team of local experts combines deep market knowledge with cutting-edge 
                  technology to provide an unparalleled property search experience. Whether 
                  you're a first-time buyer, seasoned investor, or looking to rent, we're 
                  here to help you find your place.
                </p>
              </div>
              <div className="image-content">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                  alt="Beautiful homes in Kitchener-Waterloo"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="values-section">
          <div className="container">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🏠</div>
                <h3>Quality First</h3>
                <p>Every property in our database is carefully vetted to ensure quality and accuracy.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>Trust & Transparency</h3>
                <p>We believe in honest, transparent communication throughout your property journey.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🔍</div>
                <h3>Innovation</h3>
                <p>Using the latest technology to make your property search efficient and enjoyable.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">📍</div>
                <h3>Local Expertise</h3>
                <p>Deep knowledge of Kitchener-Waterloo neighborhoods, schools, and amenities.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="container">
            <h2>Place by the Numbers</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">Properties Listed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">1,200+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Neighborhoods Covered</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">4.9★</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        <section className="team-section">
          <div className="container">
            <h2>Meet Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-image">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60" 
                    alt="Sarah Johnson"
                  />
                </div>
                <h3>Sarah Johnson</h3>
                <p className="member-title">Founder & CEO</p>
                <p>15+ years in real estate, passionate about helping families find their perfect home.</p>
              </div>
              <div className="team-member">
                <div className="member-image">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60" 
                    alt="Michael Chen"
                  />
                </div>
                <h3>Michael Chen</h3>
                <p className="member-title">Lead Real Estate Agent</p>
                <p>Local Waterloo native with deep knowledge of the university and tech districts.</p>
              </div>
              <div className="team-member">
                <div className="member-image">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b2b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60" 
                    alt="Emily Rodriguez"
                  />
                </div>
                <h3>Emily Rodriguez</h3>
                <p className="member-title">Customer Success Manager</p>
                <p>Ensures every client has an exceptional experience from search to closing.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;