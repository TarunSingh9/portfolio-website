import React, { useState } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Here you can add the code to handle the subscription, e.g., send the email to a server
    console.log('Subscribed with email:', email);
    // Clear the input field after subscribing
    setEmail('email incorrect');
    
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> tarunreal345@gmail.com
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> +11-22-333-444
          </p>
        </div>

        <div className="footer-section">
          <h3>Follow Me</h3>
          <a href="https://www.linkedin.com/in/tarun-singh-697a55231"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://github.com/TarunSingh9"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://x.com/TarunSingh21648?t=ZTfelGQVx1MymUfgi8NVxQ&s=09"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.instagram.com/tarunsingh8449?utm_source=qr&igsh=MW00NWQ5N2lwbzdqYw=="><FontAwesomeIcon icon={faInstagram} /></a>
        </div>

        <div className="footer-section">
          <h3>Legal Information</h3>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>

        <div className="footer-section">
          <h3>Newsletter Subscription</h3>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
