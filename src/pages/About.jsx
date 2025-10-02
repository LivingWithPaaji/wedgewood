import './About.css';

const About = () => {
  const teamMembers = [
    { name: 'Shreya Choudhury', role: 'Advisor', title: 'CEO, Communix, BBSR' },
    { name: 'Sri Rajendra Ram', role: 'Advisor', title: 'Sr. Secetariat Officer, Ranchi' },
    { name: 'Dr. Alijan', role: 'Advisor', title: 'Product Management' },
    { name: 'Janardhan Swamy', role: 'Advisor', title: 'Marketing Guru' },
    { name: 'Dr. Prabhas Prasad', role: 'Advisor', title: 'Financial Consultant' },
    { name: 'Bipin Prabhat Kachhap', role: 'Advisor', title: 'Legal Expert' },
    { name: 'Hifza Junaid', role: 'Advisor', title: 'HR Specialist' },
    { name: 'Moitrayee Mitra', role: 'Advisor', title: 'Operations Head' },
    { name: 'Manish Gautam', role: 'Advisor', title: 'Customer Experience' },
    { name: 'M.Divya Rao', role: 'Trainer', title: 'Lead Developer Trainer' },
    { name: 'Abhishek Choudhary', role: 'Trainer', title: 'UX/UI Design Trainer' },
    { name: 'Sarfaraz Ahmed', role: 'Trainer', title: 'Data Science Trainer' },
    { name: 'Tanveer Kaur', role: 'Trainer', title: 'AI & ML Trainer' },
    { name: 'Ayan Sengupta', role: 'Trainer', title: 'Cybersecurity Trainer' },
    { name: 'Manisha Kumari', role: 'Trainer', title: 'Cloud Computing Trainer' },
    { name: 'Nishi Pandey', role: 'Trainer', title: 'Soft Skills Trainer' },
    { name: 'Tasmiah', role: 'Liaisoning', title: 'Liaisoning & Communication' },
  ];

  const advisors = teamMembers.filter(member => member.role === 'Advisor');
  const trainers = teamMembers.filter(member => member.role === 'Trainer');
  const liaisoning = teamMembers.filter(member => member.role === 'Liaisoning');

  return (
    <div className="about-page">
      <div className="about-container">
        <header className="page-header">
          <h1>Who We Are</h1>
          <p>About WEDGEWOOD Pro-SKILL</p>
        </header>

        <section className="content-section">
          <h2>Our Mission</h2>
          <p>
            WEDGEWOOD Pro-SKILL transcends traditional learning, creating a future-ready ecosystem aligned with UGC and NEP 2020 vision. We equip students, graduates, and professionals with communication excellence, digital dexterity, employability readiness, entrepreneurial acumen, and life-skills intelligence—all tailored to the evolving demands of Industry 4.0 and the future of work.
          </p>
          <blockquote className="mission-quote">
            "Empowering youth with industry-aligned skills, digital dexterity, and entrepreneurial thinking—creating future-ready professionals for the evolving world of work."
          </blockquote>
        </section>

        <section className="content-section owner-section">
          <div className="owner-image">
            <img src="https://placehold.co/300x300.png?text=Company+Owner" alt="Company Owner" />
          </div>
          <div className="owner-details">
            <h2>Head of Learning & Capability Development</h2>
            <h3>Muktar Ahmed</h3>
            <p className="owner-title">Founder & Head of Learning</p>
            <p>
              A visionary leader with a passion for transforming education and empowering the next generation of professionals. With decades of experience in the industry, Muktar Ahmed founded WEDGEWOOD Pro-SKILL to bridge the gap between academic learning and real-world application.
            </p>
          </div>
        </section>

        {liaisoning.length > 0 && (
          <section className="content-section">
            <h2>Liaisoning & Communication</h2>
            <div className="team-grid">
              {liaisoning.map((member, index) => (
                <div className="team-member" key={index}>
                  <img src={`https://placehold.co/200x200.png?text=${member.name.replace(' ', '+')}`} alt={member.name} />
                  <h3>{member.name}</h3>
                  <p>{member.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="content-section">
          <h2>Our Advisory Board</h2>
          <div className="team-grid">
            {advisors.map((member, index) => (
              <div className="team-member" key={index}>
                <img src={`https://placehold.co/200x200.png?text=${member.name.replace(' ', '+')}`} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2>Our Expert Trainers</h2>
          <div className="team-grid">
            {trainers.map((member, index) => (
              <div className="team-member" key={index}>
                <img src={`https://placehold.co/200x200.png?text=${member.name.replace(' ', '+')}`} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.title}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
