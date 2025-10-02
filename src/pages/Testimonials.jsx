import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Software Developer",
      company: "TechCorp",
      image: "👩‍💻",
      content: "The Software Development Internship at Wedgewood completely transformed my career. The hands-on projects and expert mentorship gave me the confidence and skills I needed to land my dream job at TechCorp."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Digital Marketing Specialist",
      company: "Growth Agency",
      image: "👨‍💼",
      content: "I came in with zero marketing experience, but the comprehensive training and real-world projects helped me understand the industry inside out. Now I'm leading campaigns for major clients!"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Data Scientist",
      company: "Analytics Plus",
      image: "👩‍🔬",
      content: "The Data Science program was incredibly thorough. The mentors were industry experts who provided invaluable insights. The internship component gave me real-world experience that set me apart from other candidates."
    },
    {
      id: 4,
      name: "David Kim",
      role: "UI/UX Designer",
      company: "Design Studio",
      image: "👨‍🎨",
      content: "Wedgewood's UI/UX program taught me not just design skills, but how to think like a designer. The portfolio I built during the internship helped me secure multiple job offers."
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Business Analyst",
      company: "Enterprise Solutions",
      image: "👩‍💼",
      content: "The Business Analysis internship provided me with practical tools and methodologies that I use every day in my current role. The networking opportunities were also invaluable."
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Project Manager",
      company: "Innovation Labs",
      image: "👨‍💼",
      content: "As someone transitioning from a technical role, the Project Management program gave me the leadership and organizational skills I needed. The real projects were challenging but incredibly rewarding."
    }
  ];

  return (
    <div className="testimonials-page">
      <div className="testimonials-container">
        <header className="page-header">
          <h1>Success Stories</h1>
          <p>
            Hear from our graduates who have transformed their careers through our offline internship programs.
          </p>
        </header>

        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <p className="testimonial-quote">{testimonial.content}</p>
              <div className="testimonial-author">
                <div className="author-image">{testimonial.image}</div>
                <div className="author-details">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
