import React, { useRef, useState, useEffect } from 'react';
import Navbar from './components/NavbarComponet';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import EducationSection from './sections/EducationSection';
import { portfolioData } from './data/PortfolioData';
import { Github, Mail } from 'lucide-react';

// LinkedIn icon
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export type SectionName = 'home' | 'about' | 'skills' | 'projects' | 'education' | 'contact';

const App: React.FC = () => {
  const homeRef = useRef<HTMLElement>(null!);
  const aboutRef = useRef<HTMLElement>(null!);
  const skillsRef = useRef<HTMLElement>(null!);
  const projectsRef = useRef<HTMLElement>(null!);
  const educationRef = useRef<HTMLElement>(null!);
  const contactRef = useRef<HTMLElement>(null!);

  const sectionRefs: Record<SectionName, React.RefObject<HTMLElement>> = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
    education: educationRef,
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
      { root: null, rootMargin: '-20% 0px -60% 0px', threshold: 0 }
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
    <>
      {/* Skip to main content link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      <main id="main-content">
        <HeroSection
          sectionRef={homeRef}
          data={{
            name: portfolioData.name,
            headline: portfolioData.headline,
            subline: portfolioData.subline,
            availabilityBadge: portfolioData.availabilityBadge,
            profileImage: portfolioData.profileImage,
            contact: portfolioData.contact,
          }}
          scrollToSection={scrollToSection}
        />

        <AboutSection sectionRef={aboutRef} about={portfolioData.about} />

        <SkillsSection sectionRef={skillsRef} skills={portfolioData.skills} />

        <ProjectsSection sectionRef={projectsRef} projects={portfolioData.projects} />

        <EducationSection
          sectionRef={educationRef}
          education={portfolioData.education}
          certifications={portfolioData.certifications}
        />

        <ContactSection sectionRef={contactRef} contact={portfolioData.contact} />
      </main>

      {/* Footer with social links */}
      <footer className="footer-root">
        <div className="footer-inner">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </p>
          <div className="footer-links">
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="GitHub profile"
            >
              <Github size={16} aria-hidden="true" />
            </a>
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon />
            </a>
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="icon-link"
              aria-label={`Email ${portfolioData.contact.email}`}
            >
              <Mail size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
