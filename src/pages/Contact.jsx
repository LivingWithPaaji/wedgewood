import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('Contact form data:', data);
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <header className="page-header">
          <h1>Get in Touch</h1>
          <p>
            Have questions about our programs? Want to learn more about our offline internships? 
            We'd love to hear from you!
          </p>
        </header>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <span className="info-icon">📧</span>
              <div className="info-text">
                <p><strong>Email</strong></p>
                <p>info@wedgewood.com</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div className="info-text">
                <p><strong>Phone</strong></p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div className="info-text">
                <p><strong>Address</strong></p>
                <p>G1, GROUND FLOOR, BIREN DWARKA PALACE, 143 AMBAGAN, SAKCHI, JAMSHEDPUR - 831001</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🕒</span>
              <div className="info-text">
                <p><strong>Office Hours</strong></p>
                <p>Mon-Fri: 9am - 6pm</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input type="text" id="name" name="name" required placeholder="Enter your full name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" name="email" required placeholder="Enter your email address" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <select id="subject" name="subject" required>
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="programs">Program Information</option>
                <option value="application">Application Support</option>
                <option value="partnership">Partnership Opportunities</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" required rows="6" placeholder="Tell us how we can help you..."></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
