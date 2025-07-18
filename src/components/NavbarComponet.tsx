// components/Navbar.tsx
import React from 'react';
import { Home, User, Code, Briefcase, Mail } from 'lucide-react';
import DownloadCVButton from './DownloadCVButton';

type SectionName = 'home' | 'about' | 'skills' | 'projects' | 'contact' ;

const Navbar = ({ activeSection, scrollToSection }: {
  activeSection: SectionName,
  scrollToSection: (section: SectionName) => void
}) => {
  const NavItem = ({ icon: Icon, label, section }: {
    icon: React.ElementType,
    label: string,
    section: SectionName
  }) => (
    <button
      onClick={() => scrollToSection(section)}
      className={`flex flex-col items-center p-2 rounded-lg transition-colors duration-300
        ${activeSection === section ? 'text-blue-600 bg-blue-50 dark:bg-blue-900' : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}
        md:flex-row md:space-x-2 md:px-4 md:py-2`}
    >
      <Icon size={20} />
      <span className="text-xs md:text-base mt-1 md:mt-0">{label}</span>
    </button>
  );

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg md:relative md:top-0 md:left-0 md:right-auto md:w-full md:shadow-none z-50">
      <div className="container mx-auto px-4 py-3 flex justify-around md:justify-center md:space-x-8">
        <NavItem icon={Home} label="Home" section="home" />
        <NavItem icon={User} label="About" section="about" />
        <NavItem icon={Code} label="Skills" section="skills" />
        <NavItem icon={Briefcase} label="Projects" section="projects" />
        <NavItem icon={Mail} label="Contact" section="contact" />
        <div className="hidden md:block">
          <DownloadCVButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
