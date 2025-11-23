import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Download, Briefcase, Code, Award, Heart, Menu, X } from 'lucide-react';
import profilePhoto from './photo.jpg';  // ADD THIS LINE

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // CUSTOMIZE THIS DATA WITH YOUR INFORMATION
  const portfolioData = {
    name: "Saeed Moradi",
    title: "Software Engineer",
    email: "saeed.moradi.edu@gmail.com",
    phone: "+1 (431) 877 1717",
    location: "Canada",
    linkedin: "https://www.linkedin.com/in/saeedmoradi/",
    github: "https://github.com/saeed-moradi-98",
    googleScholar: "https://scholar.google.com/citations?user=84c6dG8AAAAJ&hl=en",
    photo: profilePhoto,
    resumeLink: "/resume.pdf", // Add your resume PDF to public folder
    
    about: "I'm a passionate Software Engineer with almost 2 years of experience building scalable ecosystems. I love creating elegant solutions to complex problems and am always eager to learn new technologies. My goal is to build products that make a real impact on people's lives.",
    
    education: [
      {
      university: "University of Manitoba",
      degree: "M.Sc. in Computer science",
      location: "Winnipeg, Canada",
      start_date: "Sep 2023",
      end_date: "Sep 2025"
      },
      {
        university: "Amirkabir University of Technology",
        degree: "B.Sc. in Computer Science",
        location: "Tehran, Iran",
        start_date: "Sep 2017",
        end_date: "Jan 2022"
      }
    ]
      
    ,
    skills: {
      frontend: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS", "Vue.js"],
      backend: ["Node.js", "Python", "Express", "Django", "REST APIs", "GraphQL"],
      database: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
      tools: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Webpack"]
    },
    
    experience: [
      {
        role: "Software Engineer Intern",
        company: "The Linux Foundation",
        period: "Jun 2024 - Nov 2024",
        description: "Developed an interoperability solution bridging two heterogeneous blockchain platforms—Hyperledger Fabric and Substrate. The connection is established through dedicated interoperability smart contracts, which communicate via a multi-node bridging component. To strengthen security and privacy, the system incorporates advanced cryptographic techniques, including ring signatures, blind signatures, and source-anonymization protocols.",
        stack: ["Node.js", "Rust", "Hyperledger Fabric", "Substrate, Docker", "Linux", "Bash"],
        location: "California, United States"
      },
      {
        role: "Software Engineer",
        company: "Space Omid",
        period: "Jun 2023 - Sep 2023",
        description: "Implemented a RESTful API for a shopping cart system to manage user purchases and subscriptions. The API integrates with the Shaparak funds transfer service to securely process payments for purchased services.",
        stack: ["Python", "FastAPI", "RabbitMQ", "PostgreSQL", "Elasticserach"],
        location: "Tehran, Iran"
      },
      {
        role: "Software Engineer",
        company: "Nahanet",
        period: "May 2022 - Dec 2022",
        description: "Inspected packets of various platforms and applications to detect their network traffic. The results were documented and associated Python code along with the results were written to be tested by the pipeline.",
        stack: ["Python", "Wireshark", "GitHub Actions", "MarkDown"],
        location: "Tehran, Iran"
      },
      {
        role: "Research and Development Engineer",
        company: "Sina Communication Systems",
        period: "Oct 2021 - May 2022",
        description: "I conducted extensive research in the area of mobile networks communication (SIP, VoLTE, and IMS).Then, I collaboratively developed the IMS framework to enable voice and messaging services to run over IP networks. I also automated tasks using Ansible and containerize the code using Docker and Docker Swarm to reduced the maintainability overhead.",
        stack: ["Docker", "Docker Swarm", "Ansible", "SIP", "IMS", "VoLTE", "SQL server", "Bash", "Linux"],
        location: "Tehran, Iran"
      }
    ],
    
    projects: [
      {
        name: "Interoperability Solution Incentive Mechanism",
        description: "Designed an interoperability solution between a permissioned and a permissionless blockchain. Then, I proposed an incentive mechanism to promote fariness in the system.",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        link: "#"
      },
      {
        name: "Substrate-Fabric Integration",
        description: "Designed an interoperability solution between Hyperledger Fabric and Substrate blockchains. Communication is secured by incorporating digital signatures.",
        tech: ["React", "Firebase", "Material-UI"],
        link: "#"
      },
      {
        name: "Smart Contracts Bug Prediction",
        description: "Applied machine learning and statistical methods to predict bugs based on extracted software metrics.",
        tech: [" Python", "Java", "Slither", "Solidity"],
        link: "#"
      },
      {
        name: "Code Metrics Calculator",
        description: "Built a data analysis tool to compute 40K+ software metrics and analyze their correlations using descriptive statistics.",
        tech: ["Java", "Python", "JUnit", "Pandas"],
        link: "#"
      },
      {
        name: "TCP Retransmission Monitoring System",
        description: "Developed a Golang-based monitoring tool deployed via Helm on Kubernetes to collect TCP retransmission metrics from Ubuntu servers and expose them to Prometheus for network reliability analysis.",
        tech: ["Go", "Prometheus", "Kubernetes", "Helm", "Docker", "Ubuntu"],
        link: "#"
      },
      {
        name: "Hirbod",
        description: "Designed the first SQL-based judge system for scoring queries submitted by students without using any driver code.",
        tech: ["C++", "Docker", "Django", "Python", "HTML/CSS"],
        link: "#"
      }
    ],
    
    hobbies: [
      { name: "Photography", icon: "📷" },
      { name: "Hiking", icon: "🥾" },
      { name: "Reading", icon: "📚" },
      { name: "Gaming", icon: "🎮" },
      { name: "Cooking", icon: "👨‍🍳" },
      { name: "Travel", icon: "✈️" }
    ]
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#114b5f] via-[#003049] to-[#114b5f] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#114b5f]/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#88d498] to-[#c6dabf] bg-clip-text text-transparent">
            {portfolioData.name}
          </h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {['about', 'skills', 'experience', 'projects', 'hobbies', 'contact'].map(section => (
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
          <div className="md:hidden bg-slate-800 border-t border-purple-500/20">
            {['about', 'skills', 'experience', 'projects', 'hobbies', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-4 py-3 hover:bg-slate-700 capitalize"
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
            <p className="text-2xl text-purple-300 mb-6">{portfolioData.title}</p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {portfolioData.about}
            </p>
            <div className="flex gap-4 flex-wrap">
              <a 
                href={portfolioData.resumeLink}
                download
                className="flex items-center gap-2 bg-[#1a936f] hover:bg-purple-700 px-6 py-3 rounded-lg transition"
              >
                <Download size={20} />
                Download Resume
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-[#88d498] hover:bg-[#88d498]/10 px-6 py-3 rounded-lg transition"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img 
              src={portfolioData.photo}
              alt={portfolioData.name}
              className="w-80 h-80 rounded-full object-cover object-bottom border-4 border-[#88d498] shadow-2xl shadow-purple-500/50"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Award className="text-[#88d498]" />
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {portfolioData.about}
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Code className="text-[#88d498]" />
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(portfolioData.skills).map(([category, skills]) => (
              <div key={category} className="bg-slate-800/50 rounded-lg p-6 border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-4 capitalize text-purple-300">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span 
                      key={skill}
                      className="bg-[#1a936f]/20 text-purple-300 px-3 py-1 rounded-full text-sm"
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
      <section id="experience" className="py-20 px-4 bg-slate-800/50">
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

            {/* Experience Section */}
      <section id="education" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="text-[#88d498]" />
            Education
          </h2>
<div className="space-y-8">
  {portfolioData.education.map((item, index) => (
    <div key={index} className="bg-[#114b5f]/50 rounded-lg p-6 border-l-4 border-[#88d498]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
        <h3 className="text-2xl font-semibold text-purple-300">{item.university}</h3>
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-purple-500/20 hover:border-[#88d498] transition">
                <h3 className="text-xl font-semibold mb-3 text-purple-300">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span 
                      key={tech}
                      className="bg-[#1a936f]/20 text-purple-300 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="text-[#88d498] hover:text-purple-300 transition"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Heart className="text-[#88d498]" />
            Hobbies & Interests
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {portfolioData.hobbies.map((hobby, index) => (
              <div 
                key={index}
                className="bg-[#114b5f]/50 rounded-lg p-6 text-center border border-purple-500/20 hover:border-[#88d498] transition"
              >
                <div className="text-4xl mb-3">{hobby.icon}</div>
                <p className="text-gray-300">{hobby.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a 
              href={`mailto:${portfolioData.email}`}
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition"
            >
              <Mail />
              {portfolioData.email}
            </a>
            <a 
              href={`tel:${portfolioData.phone}`}
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition"
            >
              <Phone />
              {portfolioData.phone}
            </a>
            <div className="flex items-center gap-2 bg-slate-800 px-6 py-3 rounded-lg">
              <MapPin />
              {portfolioData.location}
            </div>
          </div>
          <div className="flex justify-center gap-6">
            <a 
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a936f] hover:bg-purple-700 p-4 rounded-full transition"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a936f] hover:bg-purple-700 p-4 rounded-full transition"
            >
              <Github size={24} />
            </a>
            <a href={portfolioData.googleScholar}
            target="_blank"
            rel="noopener noreferrer"  // Fix: "noreferrer" was misspelled
            className="bg-[#1a936f] hover:bg-[#157a5a] p-4 rounded-full transition"
            title="Google Scholar">
  <Award size={24} />
</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#114b5f] border-t border-purple-500/20 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 {portfolioData.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}