import React, { useState, useEffect } from 'react';
import { FaFilm, FaHiking, FaBook, FaCode, FaPlane, FaMusic } from "react-icons/fa";
import { Mail, Phone, MapPin, Linkedin, Github, Award, Briefcase, Code, Heart, Menu, X } from 'lucide-react';
import profilePhoto from './photo.jpg';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Saeed Moradi";
  }, []);

  // CUSTOMIZE THIS DATA WITH YOUR INFORMATION
  const portfolioData = {
    name: "Saeed Moradi",
    title: "Software Engineer",
    email: "saeed.moradi.edu@gmail.com",
    phone: "+1 (431) 844-0005",
    location: "Toronto, Ontario, Canada",
    linkedin: "https://linkedin.com/in/saeedmoradi",
    github: "https://github.com/saeed-moradi-98",
    googleScholar: "https://scholar.google.com/citations?user=84c6dG8AAAAJ&hl=en",
    photo: profilePhoto,
    
    about: "I am a software and blockchain engineer with over 2 years of software engineering experience across mulitple companies. I graduated from the University of Manitoba with a M.Sc. in computer science in September 2025.",
    technical_background: "I have contributed in various projects that involved various disciplines, including blockchains, software engineering, distributed systems, machine learning, natural language processing, deep learning, and computer networks.",
    skills: {
      frontend: ["React", "Angular", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS", "Next.js"],
      backend: ["Python (Django, FastAPI)", "Node.js", "Express", "Java (Spring Boot)", "Go"],
      database: ["MongoDB", "PostgreSQL", "MySQL"],
      tools: ["Git", "Docker", "AWS", "Linux", "Kubernetes", "Ansible", "Prometheus", "Grafana", "Wireshark", "Rabbit MQ"]
    },
    
    education: [
      {
        university: "University of Manitoba",
        degree: "M.Sc. in Computer Science",
        location: "Winnipeg, Canada",
        start_date: "September 2023",
        end_date: "September 2025"
      },
      {
        university: "Amirkabir University of Technology",
        degree: "B.Sc. in Computer Science",
        location: "Tehran, Iran",
        start_date: "September 2017",
        end_date: "January 2022"
      }
    ],
    
    experience: [
      {
        role: "Team Lead",
        company: "Booklyze",
        period: "January 2026 - present",
        location: "Edmonton - Alberta (remote)",
        stack: ["Agile, Python (Django, FastAPI), Nginx, Linux, Docker, SQLite, CI/CD, GitHub Actions, Prometheus, Redis"],
        description: "Developed "
      },
      {
        role: "Graduate Research Assistant",
        company: "University of Manitoba",
        period: "September 2023 - September 2025",
        location: "Winnipeg, Canada",
        stack: ["Blockchains", "Distributed Systems", "Software Engineering"],
        description: "Conducted research in the area of software engineering, distributed systems, and computer network security, particularly in the area of blockchain interoperability, permissioned-to-permissionless blockchains, and blockchain governance."
      },
      {
        role: "Teaching Assistant",
        company: "University of Manitoba",
        period: "January 2024 - April 2025",
        location: "Winnipeg, Canada",
        stack: ["Python", "C++", "Java", "Linux", "Bash", "Computer Networks", "Distributed Systems"],
        description: "Taught multiple programming courses for 3 consecutive semesters involving data structure and algorithms, object-oriented programming, network privacy/security, and distributed systems."
      },
      {
        role: "Help Centre Lead",
        company: "University of Manitoba",
        period: "January 2025 - April 2025",
        location: "Winnipeg, Canada",
        stack: ["Python", "C++", "Java", "Linux", "Bash", "Computer Networks", "Distributed Systems"],
        description: "Helped students with debugging, developing, and analyzing their codes as well as helping them with system design and architecture."
      },
      {
        role: "Software Engineer",
        company: "Linux Foundation",
        period: "June 2024 - November 2024",
        location: "California, United States (Remote)",
        stack: ["React", "Node.js", "TypeScript", "Hyperledger Fabric", "Substrate", "Python", "Docker", "Linux (bash)"],
        description: "Developed an interoperability solution bridging two heterogeneous blockchain platforms—Hyperledger Fabric and Substrate. The connection is established through dedicated interoperability smart contracts, which communicate via a multi-node bridging component. To strengthen security and privacy, the system incorporates advanced cryptographic techniques, including ring signatures, blind signatures, and source-anonymization protocols."
      },
      {
        role: "Entrepreneur Lead",
        company: "Lab2Market & Mitacs",
        period: "January 2024 - March 2024",
        location: "Winnipeg, Manitoba",
        stack: ["React", "Node.js", "TypeScript", "Hyperledger Fabric", "Substrate", "Python", "Docker", "Linux (bash)"],
        description: "Conducted survey design, data collection, and statistical analysis from 50+ respondents to validate market potential. Then, I synthesized quantitative and qualitative data to produce executive summaries and visual reports for stakeholders."
      },
      {
        role: "Full-Stack Engineer",
        company: "Space Omid",
        period: "January 2023 - September 2023",
        location: "Tehran, Iran",
        stack: ["Python", "Fast API", "Rabbit MQ", "PostgreSQL", "Elasticsearch"],
        description: "Implemented a RESTful API for a shopping cart system to manage user purchases and subscriptions. The API integrates with the Shaparak funds transfer service to securely process payments for purchased services."
      },
      {
        role: "Full-Stack Engineer",
        company: "Nahanet",
        period: "May 2022 - December 2022",
        location: "Tehran, Iran",
        stack: ["Python", "Wireshark", "Docker", "GitHub Actions", "PostgreSQL", "Markdown"],
        description: "Inspected packets of various platforms and applications to detect their network traffic. The results were documented and associated Python code along with the results were written to be tested by the pipeline."
      },
      {
        role: "Research & Developlment Engineer",
        company: "Sina Communication Systems",
        period: "October 2021 - May 2022",
        location: "Tehran, Iran",
        stack: ["Python", "Wireshark", "Docker (Swarm)", "Ansible", "Kubernetes", "Linux Server", "Bash", "SQL Server"],
        description: "I conducted extensive research in the area of mobile networks communication (SIP, VoLTE, and IMS).Then, I collaboratively developed the IMS framework to enable voice and messaging services to run over IP networks. I also automated tasks using Ansible and containerize the code using Docker and Docker Swarm to reduced the maintainability overhead."
      },

    ],
    
    projects: [
      {
        name: "Full-Stack E-Commerce Platform",
        description: "Built a complete MERN stack e-commerce application with user authentication, product management, shopping cart, and payment integration.",
        tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
        link: "https://github.com/saeed-moradi-98/e-commerce_platform"
      },
      {
        name: "TCP Retransmission Monitoring System",
        description: "Developed a Golang-based monitoring tool deployed on Kubernetes to collect TCP metrics and expose them to Prometheus.",
        tech: ["Go", "Kubernetes", "Prometheus", "Docker"],
        link: "https://github.com/saeed-moradi-98/TCP_retransmission_monitoring_system"
      },
      {
        name: "Personal Portfolio Website",
        description: "Responsive portfolio website showcasing projects, skills, and experience with modern design.",
        tech: ["React", "Tailwind CSS", "GitHub Pages"],
        link: "https://saeed-moradi-98.github.io"
      },
      {
        name: "Blockchain Interoperability Framework",
        description:"A bridge-based interoperability framework that connects Hyperledger Fabric to Substrate through designated smart contracts.",
        tech: ["Rust","JavaScript", "Node.js", "Go", "Docker", "Bash", "Hypeledger Fabric", "Substrate"],
        link: "https://github.com/saeed-moradi-98/thesis_project"
      },
      {
        name: "Smart Contracts Bug Prediction",
        description:"Extracted around 6000 Ethereum smart contracts from Etherscan and calculated their code metrics to corrleate them with their vulnerabilities extracted using Slither.",
        tech: ["Solidity", "Python", "Slither", "FastAPI", "Java", "Numpy"],
        link: "https://github.com/saeed-moradi-98/solidity_code_metrics_extractor"
      },
      {
        name: "Hirbod",
        description:"Developed the first native query judge for SQL languages and deployed on a website.",
        tech: ["Python", "Django", "HTML", "CSS", "Docker", "PostgreSQL"],
        link: "https://github.com/saeed-moradi-98/Hirbod"
      }

    ],

  hobbies: [
    { name: "Movies", icon: FaFilm },
    { name: "Hiking", icon: FaHiking },
    { name: "Reading", icon: FaBook },
    { name: "Coding", icon: FaCode },
    { name: "Travel", icon: FaPlane },
    { name: "Music", icon: FaMusic }
  ]

    
    // hobbies: [
    //   { name: "Movies", icon: FaFilm, size={28} },
    //   { name: "Hiking", icon: "🥾" },
    //   { name: "Reading", icon: "📚" },
    //   { name: "Coding", icon: "💻" },
    //   { name: "Travel", icon: "✈️" },
    //   { name: "Music", icon: "🎵" }
    // ]
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#212121] via-[#00447c] to-[#0b7b9e] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#114b5f]/90 backdrop-blur-md z-50 border-b border-[#88d498]/20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#88d498] to-[#c6dabf] bg-clip-text text-transparent">
            {portfolioData.name}
          </h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {['about', 'education', 'skills', 'experience', 'projects', 'hobbies', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="hover:text-[#88d498] transition capitalize"
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0d3d4d] border-t border-[#88d498]/20">
            {['about', 'education', 'skills', 'experience', 'projects', 'hobbies', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-4 py-3 hover:bg-[#1a936f] capitalize"
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-[#88d498] to-[#c6dabf] bg-clip-text text-transparent">
                {portfolioData.name}
              </span>
            </h2>
            <p className="text-2xl text-[#88d498] mb-6">{portfolioData.title}</p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {portfolioData.about}
            </p>
            <div className="flex gap-4 flex-wrap">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#1a936f] hover:bg-[#157a5a] px-6 py-3 rounded-lg transition"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img 
              src={portfolioData.photo}
              alt={portfolioData.name}
              className="w-64 h-64 rounded-full object-cover object-bottom border-4 border-[#88d498] shadow-2xl shadow-[#88d498]/50"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-[#0d3d4d]/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Award className="text-[#88d498]" />
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {portfolioData.technical_background}
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Award className="text-[#88d498]" />
            Education
          </h2>
          <div className="space-y-8">
            {portfolioData.education.map((item, index) => (
              <div key={index} className="bg-[#114b5f]/50 rounded-lg p-6 border-l-4 border-[#88d498]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-2xl font-semibold text-[#88d498]">{item.university}</h3>
                  <span className="text-gray-400">{item.start_date} - {item.end_date}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <p className="text-xl text-gray-300">{item.degree}</p>
                  <span className="text-gray-400">{item.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-[#0d3d4d]/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Code className="text-[#88d498]" />
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(portfolioData.skills).map(([category, skills]) => (
              <div key={category} className="bg-[#114b5f]/50 rounded-lg p-6 border border-[#88d498]/20">
                <h3 className="text-xl font-semibold mb-4 capitalize text-[#88d498]">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span 
                      key={skill}
                      className="bg-[#1a936f]/20 text-[#88d498] px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="text-[#88d498]" />
            Work Experience
          </h2>
          <div className="space-y-8">
            {portfolioData.experience.map((job, index) => (
              <div key={index} className="bg-[#114b5f]/50 rounded-lg p-6 border-l-4 border-[#88d498]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-2xl font-semibold text-[#88d498]">{job.role}</h3>
                  <span className="text-gray-400">{job.period}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <p className="text-xl text-gray-300">{job.company}</p>
                  <span className="text-gray-400">{job.location}</span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.stack.map(tech => (
                    <span 
                      key={tech}
                      className="bg-[#1a936f]/20 text-[#88d498] px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-[#0d3d4d]/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="bg-[#114b5f]/50 rounded-lg p-6 border border-[#88d498]/20 hover:border-[#88d498] transition">
                <h3 className="text-xl font-semibold mb-3 text-[#88d498]">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span 
                      key={tech}
                      className="bg-[#1a936f]/20 text-[#88d498] px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="text-[#88d498] hover:text-[#c6dabf] transition"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Heart className="text-[#88d498]" />
            Hobbies & Interests
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
{portfolioData.hobbies.map((hobby, index) => {
  const Icon = hobby.icon;

  return (
    <div
      key={index}
      className="bg-[#114b5f]/50 rounded-lg p-6 text-center border border-[#88d498]/20 hover:border-[#88d498] transition"
    >
      <Icon size={28} className="mx-auto mb-3 text-[#88d498]" />
      <p className="text-gray-300">{hobby.name}</p>
    </div>
  );
})}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[#0d3d4d]/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a 
              href={`mailto:${portfolioData.email}`}
              className="flex items-center gap-2 bg-[#0d3d4d] hover:bg-[#1a936f] px-6 py-3 rounded-lg transition"
            >
              <Mail />
              {portfolioData.email}
            </a>
            <a 
              href={`tel:${portfolioData.phone}`}
              className="flex items-center gap-2 bg-[#0d3d4d] hover:bg-[#1a936f] px-6 py-3 rounded-lg transition"
            >
              <Phone />
              {portfolioData.phone}
            </a>
            <div className="flex items-center gap-2 bg-[#0d3d4d] px-6 py-3 rounded-lg">
              <MapPin />
              {portfolioData.location}
            </div>
          </div>
          <div className="flex justify-center gap-6">
            <a 
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a936f] hover:bg-[#157a5a] p-4 rounded-full transition"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a936f] hover:bg-[#157a5a] p-4 rounded-full transition"
            >
              <Github size={24} />
            </a>
            <a 
              href={portfolioData.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a936f] hover:bg-[#157a5a] p-4 rounded-full transition"
              title="Google Scholar"
            >
              <Award size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d3d4d] border-t border-[#88d498]/20 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2026 {portfolioData.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}