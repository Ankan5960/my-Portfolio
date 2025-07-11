import React, { useRef, useState, useEffect } from 'react';
import Navbar from './components/NavbarComponet';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

type SectionName = 'home' | 'about' | 'skills' | 'projects' | 'contact';

const App = () => {
  const homeRef = useRef<HTMLElement>(null!);
  const aboutRef = useRef<HTMLElement>(null!);
  const skillsRef = useRef<HTMLElement>(null!);
  const projectsRef = useRef<HTMLElement>(null!);
  const contactRef = useRef<HTMLElement>(null!);

  const sectionRefs: Record<SectionName, React.RefObject<HTMLElement>> = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
    contact: contactRef,
  };

  const [activeSection, setActiveSection] = useState<SectionName>('home');

  const scrollToSection = (sectionName: SectionName) => {
    const ref = sectionRefs[sectionName];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionName);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const portfolioData = {
    name: "Ankan Maity",
    profileImage: "https://media.licdn.com/dms/image/v2/D4D03AQHKfZxxO8L_sg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1693981299357?e=1757548800&v=beta&t=m4JZv0Vggk7mYc2B-AqN7ivh4x4HIo-BzydvI6tXGGk",
    tagline: "Full-Stack Developer | Passionate about creating impactful web experiences.",
    about: "Hello! I'm Ankan Maity, a passionate full-stack developer...",
    skills: [
      {
        id:1,
        title: "languages",
        items: ["JavaScript", "TypeScript", "Python", "C#", "Java"]
      },
      {
        id:2,
        title: "cloud",
        items: ["AWS","Google Cloud"]
      },
      {
        id:3,
        title: "databases",
        items: ["PostgreSQL", "MySQL"]
      },
      {
        id:4,
        title: "tools",
        items: ["Git", "Docker"]
      }
    ],
    projects: [
      {
        id: 1,
        title: "EcoBin – IoT-Based Smart Waste Management System",
        description: ` EcoBin is a full-stack waste management solution
          designed using a microservices architecture. The backend is
          built with .NET Web API and PostgreSQL, while the
          frontend uses React (TypeScript) and Tailwind CSS. The
          system is containerized with Docker and implements
          role-based authentication for Admins, Collectors, Users, and
          Guests.`,
        link: "https://github.com/Ankan5960/EcoBin",
        image: "https://placehold.co/400x250/007bff/ffffff?text=Project+1"
      },
      {
        id: 2,
        title: "Task Management App",
        description: "Drag-and-drop task manager.",
        link: "#",
        image: "https://placehold.co/400x250/28a745/ffffff?text=Project+2"
      },
    ],
    contact: {
      email: "maityankan55@gmail.com",
      phone: "+91 8509640363",
      github: "https://github.com/Ankan5960",
      linkedin: "www.linkedin.com/in/ankan-maity-a1b44927a",
      twitter: "https://x.com/AnkanMa54350416",
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20 md:pb-0">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection sectionRef={homeRef} data={portfolioData} scrollToSection={scrollToSection} />
      <AboutSection sectionRef={aboutRef} about={portfolioData.about} />
      <SkillsSection sectionRef={skillsRef} skills={portfolioData.skills} />
      <ProjectsSection sectionRef={projectsRef} projects={portfolioData.projects} />
      <ContactSection sectionRef={contactRef} contact={portfolioData.contact} />

      <footer className="text-center py-4 text-sm fixed bottom-0 left-0 right-0 md:relative">
        <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
