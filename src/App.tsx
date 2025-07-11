import React, { useState, useEffect, useRef } from 'react';
import { Home, User, Code, Briefcase, Mail, Github, Linkedin, Twitter } from 'lucide-react';

// Define a type for the valid section names
type SectionName = 'home' | 'about' | 'skills' | 'projects' | 'contact';

// Main App Component
const App = () => {
  // Using useRef to get references to each section for scrolling
  const homeRef = useRef<HTMLElement>(null!);
  const aboutRef = useRef<HTMLElement>(null!);
  const skillsRef = useRef<HTMLElement>(null!);
  const projectsRef = useRef<HTMLElement>(null!);
  const contactRef = useRef<HTMLElement>(null!);

  // Map section names to their refs with explicit typing
  const sectionRefs: Record<SectionName, React.RefObject<HTMLElement>> = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
    contact: contactRef,
  };

  const [activeSection, setActiveSection] = useState<SectionName>('home'); // State to highlight active nav item

  // Placeholder data - you will replace this with your own!
  const portfolioData = {
    name: "Jane Doe",
    tagline: "Full-Stack Developer | Passionate about creating impactful web experiences.",
    about: "Hello! I'm Jane, a passionate full-stack developer with a knack for building robust and scalable web applications. I love turning complex problems into elegant solutions and constantly learning new technologies. My expertise spans across front-end development with React and back-end development with Node.js and various databases.",
    skills: [
      "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "PostgreSQL",
      "Tailwind CSS", "HTML5", "CSS3", "Git", "REST APIs", "TypeScript"
    ],
    projects: [
      {
        id: 1,
        title: "E-commerce Platform",
        description: "A full-stack e-commerce application with user authentication, product listings, shopping cart, and checkout functionality.",
        link: "#", // Replace with your project URL
        image: "https://placehold.co/400x250/007bff/ffffff?text=Project+1"
      },
      {
        id: 2,
        title: "Task Management App",
        description: "A responsive task management application allowing users to create, update, and delete tasks, with drag-and-drop reordering.",
        link: "#", // Replace with your project URL
        image: "https://placehold.co/400x250/28a745/ffffff?text=Project+2"
      },
      {
        id: 3,
        title: "Real-time Chat Application",
        description: "A real-time chat application built with WebSockets, supporting private messages and group chats.",
        link: "#", // Replace with your project URL
        image: "https://placehold.co/400x250/ffc107/ffffff?text=Project+3"
      }
    ],
    contact: {
      email: "jane.doe@example.com",
      github: "https://github.com/janedoe", // Replace with your GitHub profile
      linkedin: "https://linkedin.com/in/janedoe", // Replace with your LinkedIn profile
      twitter: "https://twitter.com/janedoe" // Replace with your Twitter profile
    }
  };

  // Function to handle smooth scrolling to a section
  const scrollToSection = (sectionName: SectionName) => { // Use SectionName type
    const ref = sectionRefs[sectionName];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // No need to setActiveSection here, IntersectionObserver will handle it
    }
  };

  // Observe sections to update activeSection state for navigation highlighting
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust threshold as needed
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Type assertion to ensure entry.target.id is a valid SectionName
          setActiveSection(entry.target.id as SectionName);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Attach observer to all sections
    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Clean up observer on component unmount
    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []); // Run once on mount

  // Navigation component
  const Navbar = () => (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg md:relative md:top-0 md:left-0 md:right-auto md:w-full md:shadow-none z-50">
      <div className="container mx-auto px-4 py-3 flex justify-around md:justify-center md:space-x-8">
        <NavItem icon={Home} label="Home" section="home" />
        <NavItem icon={User} label="About" section="about" />
        <NavItem icon={Code} label="Skills" section="skills" />
        <NavItem icon={Briefcase} label="Projects" section="projects" />
        <NavItem icon={Mail} label="Contact" section="contact" />
      </div>
    </nav>
  );

  // Navigation Item component
  const NavItem = ({ icon: Icon, label, section }: { icon: React.ElementType, label: string, section: SectionName }) => ( // Use SectionName type for section prop
    <button
      onClick={() => scrollToSection(section)} // Call scrollToSection
      className={`flex flex-col items-center p-2 rounded-lg transition-colors duration-300
        ${activeSection === section ? 'text-blue-600 bg-blue-50 dark:bg-blue-900' : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}
        md:flex-row md:space-x-2 md:px-4 md:py-2`}
    >
      <Icon size={20} />
      <span className="text-xs md:text-base mt-1 md:mt-0">{label}</span>
    </button>
  );

  // Section Wrapper component - now takes a ref prop and adds animation
  const Section = ({ id, children, sectionRef, bgColor }: { id: SectionName, children: React.ReactNode, sectionRef: React.RefObject<HTMLElement>, bgColor: string }) => { // Use SectionName for id
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once visible
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1, // Trigger when 10% of the section is visible
        }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, [sectionRef]);

    return (
      <section
        id={id}
        ref={sectionRef}
        className={`min-h-screen flex items-center justify-center py-16 px-4 md:px-8 lg:px-16 ${bgColor} text-gray-900 dark:text-gray-100
          transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="container mx-auto max-w-4xl">
          {children}
        </div>
      </section>
    );
  };

  // Hero Section
  const HeroSection = () => (
    <Section id="home" sectionRef={homeRef} bgColor="bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <img
          src="https://placehold.co/150x150/64748b/ffffff?text=JD"
          alt="Profile"
          className="w-36 h-36 rounded-full mx-auto mb-6 shadow-lg object-cover transform transition-transform duration-500 hover:scale-105"
          onError={(e) => { const target = e.target as HTMLImageElement; target.onerror = null; target.src = "https://placehold.co/150x150/64748b/ffffff?text=JD"; }}
        />
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-blue-700 dark:text-blue-400 leading-tight">
          {portfolioData.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 font-medium">
          {portfolioData.tagline}
        </p>
        <button
          onClick={() => scrollToSection('projects')} // Scroll to projects
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 active:bg-blue-800"
        >
          View My Work
        </button>
      </div>
    </Section>
  );

  // About Section
  const AboutSection = () => (
    <Section id="about" sectionRef={aboutRef} bgColor="bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-700 dark:text-blue-400">About Me</h2>
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-center md:text-left">
        {portfolioData.about}
      </p>
    </Section>
  );

  // Skills Section
  const SkillsSection = () => (
    <Section id="skills" sectionRef={skillsRef} bgColor="bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-700 dark:text-blue-400">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {portfolioData.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-5 py-2 rounded-full text-lg font-medium shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg"
          >
            {skill}
          </span>
        ))}
      </div>
    </Section>
  );

  // Projects Section
  const ProjectsSection = () => (
    <Section id="projects" sectionRef={projectsRef} bgColor="bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-700 dark:text-blue-400">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
              onError={(e) => { const target = e.target as HTMLImageElement; target.onerror = null; target.src = "https://placehold.co/400x250/64748b/ffffff?text=Project"; }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 font-medium transition-all duration-200 hover:translate-x-1"
              >
                View Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );

  // Contact Section
  const ContactSection = () => (
    <Section id="contact" sectionRef={contactRef} bgColor="bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-700 dark:text-blue-400">Get In Touch</h2>
      <div className="text-center">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Feel free to reach out if you have any questions or just want to connect!
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-110"
            aria-label="Email"
          >
            <Mail size={36} />
          </a>
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={36} />
          </a>
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={36} />
          </a>
          <a
            href={portfolioData.contact.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-110"
            aria-label="Twitter"
          >
            <Twitter size={36} />
          </a>
        </div>
      </div>
    </Section>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans relative pb-20 md:pb-0">
      {/* Tailwind CSS CDN */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Inter font */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <style>
        {`
        body {
          font-family: 'Inter', sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          scroll-behavior: smooth; /* Enable smooth scrolling for the whole page */
        }
        /* Hide scrollbar for a cleaner look */
        body::-webkit-scrollbar {
          display: none;
        }
        body {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        `}
      </style>

      <Navbar />

      {/* Render all sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="w-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-center py-4 text-sm fixed bottom-0 left-0 right-0 md:relative md:mt-8 md:bottom-auto">
        <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
