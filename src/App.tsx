import React, { useRef, useState, useEffect } from 'react';
import Navbar from './components/NavbarComponet';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import { portfolioData } from './Data/PortfolioData';

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
