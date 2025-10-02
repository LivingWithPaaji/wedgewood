import './Programs.css';

const Programs = () => {
  const nonItPrograms = [
    {
      id: 1,
      title: "Communication & Soft Skills",
      duration: "2 months",
      level: "All Levels",
      description: "Build your confidence, body language, public speaking, and workplace etiquette.",
      skills: ["Public Speaking", "Body Language", "Confidence Building", "Workplace Etiquette", "Presentation Skills"],
      price: "$800"
    },
    {
      id: 2,
      title: "English Language Fluency",
      duration: "3 months",
      level: "All Levels",
      description: "Improve spoken and written English for interviews, academics, and global communication.",
      skills: ["Spoken English", "Written English", "Interview Skills", "Academic Writing", "Global Communication"],
      price: "$1,000"
    },
    {
      id: 3,
      title: "Direct Matric / Inter / Graduation / PG (ODL / Regular)",
      duration: "6 months",
      level: "All Levels",
      description: "Guidance and enrollment support for direct school, college, and post-graduation education via regular or open learning.",
      skills: ["Academic Guidance", "Enrollment Support", "ODL Programs", "Regular Education", "Career Counseling"],
      price: "$1,500"
    },
    {
      id: 4,
      title: "BBA / MBA / BCA / MCA",
      duration: "4 months",
      level: "All Levels",
      description: "Support and coaching for management and computer application degrees.",
      skills: ["Management Studies", "Business Administration", "Computer Applications", "Entrance Preparation", "Academic Support"],
      price: "$1,200"
    },
    {
      id: 5,
      title: "Diploma / B.Tech / ITI",
      duration: "5 months",
      level: "All Levels",
      description: "Courses and career guidance in engineering, technical diplomas, and industrial training.",
      skills: ["Engineering Guidance", "Technical Training", "Industrial Skills", "Career Planning", "Skill Development"],
      price: "$1,800"
    },
    {
      id: 6,
      title: "D.Pharma / B.Pharma / ANM / GNM",
      duration: "4 months",
      level: "All Levels",
      description: "Training, admission, and exam support for pharma and nursing programs.",
      skills: ["Pharmacy Studies", "Nursing Training", "Medical Knowledge", "Exam Preparation", "Healthcare Skills"],
      price: "$1,500"
    },
    {
      id: 7,
      title: "D.El.Ed / B.Ed / PTT / NTT / Montessori",
      duration: "3 months",
      level: "All Levels",
      description: "Teacher training programs for aspiring educators in pre-primary, primary, and elementary education.",
      skills: ["Teaching Methods", "Child Psychology", "Educational Planning", "Classroom Management", "Montessori Training"],
      price: "$1,200"
    },
    {
      id: 8,
      title: "LLB / LLM / Para-legal",
      duration: "6 months",
      level: "All Levels",
      description: "Legal education and certification programs for budding law professionals.",
      skills: ["Legal Studies", "Law Practice", "Para-legal Training", "Legal Research", "Court Procedures"],
      price: "$2,000"
    },
    {
      id: 9,
      title: "Ph.D & Research",
      duration: "8 months",
      level: "Advanced",
      description: "End-to-end support in admission, research methodology, and thesis for doctoral programs.",
      skills: ["Research Methodology", "Thesis Writing", "Academic Research", "Data Analysis", "Publication Support"],
      price: "$2,500"
    }
  ];

  const itPrograms = [
    {
      id: 5,
      title: "Basic Computer (DCA/ADCA/PGDCA)",
      duration: "6 months",
      level: "All Levels",
      description: "Foundational computer courses covering MS Office, internet, data entry, and basic programming.",
      skills: ["MS Office", "Internet Basics", "Data Entry", "Basic Programming", "Computer Fundamentals"],
      price: "$1,500"
    },
    {
      id: 6,
      title: "MS-WORD / EXCEL / PPT",
      duration: "2 months",
      level: "All Levels",
      description: "Learn essential documentation, spreadsheet, and presentation skills.",
      skills: ["MS Word", "MS Excel", "PowerPoint", "Document Formatting", "Data Analysis"],
      price: "$800"
    },
    {
      id: 7,
      title: "Advanced Excel / Tally / ERP",
      duration: "3 months",
      level: "Intermediate",
      description: "In-depth accounting and reporting tools used in the corporate world.",
      skills: ["Advanced Excel", "Tally ERP", "Financial Reporting", "Data Visualization", "Accounting Software"],
      price: "$1,200"
    },
    {
      id: 8,
      title: "SAP - FI & MM",
      duration: "4 months",
      level: "Intermediate",
      description: "Get hands-on with modules in Financial Accounting and Material Management using SAP ERP software.",
      skills: ["SAP FI", "SAP MM", "Financial Accounting", "Material Management", "ERP Systems"],
      price: "$2,000"
    },
    {
      id: 9,
      title: "Computerised Accounting (Level 1 & 2)",
      duration: "3 months",
      level: "All Levels",
      description: "Practical training in modern accounting tools and software for job-readiness.",
      skills: ["Accounting Software", "Financial Management", "Bookkeeping", "Tax Preparation", "Financial Reporting"],
      price: "$1,000"
    },
    {
      id: 10,
      title: "ITR / TDS / GST (Computation & Filing)",
      duration: "2 months",
      level: "All Levels",
      description: "Learn to calculate and file income tax, GST returns, and TDS reports with real case studies.",
      skills: ["Income Tax Return", "TDS Calculation", "GST Filing", "Tax Compliance", "Financial Planning"],
      price: "$900"
    },
    {
      id: 11,
      title: "Payroll / MIS / PF / ESI",
      duration: "2 months",
      level: "All Levels",
      description: "Master employee payroll systems, management information systems, and statutory compliance.",
      skills: ["Payroll Management", "MIS Reporting", "PF Administration", "ESI Compliance", "HR Systems"],
      price: "$800"
    },
    {
      id: 12,
      title: "HRMS / CRMS / LMS",
      duration: "3 months",
      level: "All Levels",
      description: "Training in HR, customer, and learning management systems for modern workplace management.",
      skills: ["HR Management", "Customer Relations", "Learning Systems", "Database Management", "System Administration"],
      price: "$1,500"
    }
  ];

  const ProgramCard = ({ program }) => (
    <div className="program-card">
      <div className="program-card-header">
        <h3>{program.title}</h3>
      </div>
      <div className="program-card-body">
        <div className="program-meta">
          <span>Duration: {program.duration}</span>
          <span>Level: {program.level}</span>
        </div>
        <p>{program.description}</p>
        <div className="skills-list">
          {program.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
      <div className="program-card-footer">
        <span className="program-price">{program.price}</span>
        <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer" className="btn-enroll">Enroll Now</a>
      </div>
    </div>
  );

  return (
    <div className="programs-page">
      <div className="programs-container">
        <header className="page-header">
          <h1>Our Programs</h1>
          <p>
            Choose from our comprehensive range of offline internship programs designed 
            to give you real-world experience and industry-relevant skills.
          </p>
        </header>

        <section className="program-section">
          <h2>NON-IT Courses</h2>
          <div className="programs-grid">
            {nonItPrograms.map(program => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </section>

        <section className="program-section">
          <h2>IT Courses</h2>
          <div className="programs-grid">
            {itPrograms.map(program => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Programs;
