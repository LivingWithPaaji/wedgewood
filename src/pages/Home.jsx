import { useState, useEffect } from 'react';
import './Home.css';
import logo from '../assets/logo.png';

const Home = () => {
  const [stats, setStats] = useState({
    students: 0,
    enhancement: 0,
    partners: 0,
    years: 0
  });

  const targetStats = {
    students: 500,
    enhancement: 95,
    partners: 50,
    years: 5
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const animateStats = () => {
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setStats({
          students: Math.floor(targetStats.students * progress),
          enhancement: Math.floor(targetStats.enhancement * progress),
          partners: Math.floor(targetStats.partners * progress),
          years: Math.floor(targetStats.years * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setStats(targetStats);
        }
      }, stepDuration);
    };

    const timer = setTimeout(animateStats, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <img src={logo} alt="Wedgewood Logo" className="hero-logo" />
            <h1 className="hero-title">Unlock Your Potential with Wedgewood Pro-SKILL</h1>
            <p className="hero-subtitle">
              Empowering students, graduates, and professionals with the skills for tomorrow's workplace.
            </p>
            <div className="hero-buttons">
              <a href="/programs" className="btn btn-primary">Explore Programs</a>
              <a href="/contact" className="btn btn-secondary">Get in Touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <img src="https://img.icons8.com/ios/96/48bb78/communication.png" alt="Communication Icon" className="feature-icon"/>
              <h3>Communication Excellence</h3>
              <p>Master the art of professional communication, a cornerstone of career success.</p>
            </div>
            <div className="feature-card">
              <img src="https://img.icons8.com/ios/96/48bb78/laptop-coding.png" alt="Digital Literacy Icon" className="feature-icon"/>
              <h3>Digital Literacy</h3>
              <p>Gain the essential digital skills required to thrive in the modern workplace.</p>
            </div>
            <div className="feature-card">
              <img src="https://img.icons8.com/ios/96/48bb78/bar-chart.png" alt="Employability Icon" className="feature-icon"/>
              <h3>Employability Enhancement</h3>
              <p>Develop a skill set that makes you a preferred candidate for employers.</p>
            </div>
            <div className="feature-card">
              <img src="https://img.icons8.com/ios/96/48bb78/rocket.png" alt="Entrepreneurship Icon" className="feature-icon"/>
              <h3>Freelancing & Entrepreneurship</h3>
              <p>Acquire the knowledge to forge your own path and build a successful venture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>{stats.students}+</h3>
            <p>Students Empowered</p>
          </div>
          <div className="stat-item">
            <h3>{stats.enhancement}%</h3>
            <p>Skill Enhancement</p>
          </div>
          <div className="stat-item">
            <h3>{stats.partners}+</h3>
            <p>Industry Partners</p>
          </div>
          <div className="stat-item">
            <h3>{stats.years}+</h3>
            <p>Years of Excellence</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Your Journey?</h2>
          <p className="cta-subtitle">
            Join a community of learners and professionals who are shaping the future. 
            Apply now to take the first step towards a rewarding career.
          </p>
          <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Apply Now</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
