import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Wedgewood</h3>
            <p>Empowering careers through offline internships and professional training programs.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/programs">Programs</a></li>
              <li><a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">Apply Now</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📧 info@wedgewood.com</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>📍 G1, GROUND FLOOR, BIREN DWARKA PALACE, 143 AMBAGAN, SAKCHI, JAMSHEDPUR - 831001</p>
          </div>
          
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Wedgewood. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
