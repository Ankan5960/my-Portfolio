// components/Navbar.tsx
import React, { useState } from 'react';
import type { SectionName } from '../App';
import { FileText } from 'lucide-react';
import { portfolioData } from '../data/PortfolioData';

const NAV_ITEMS: { label: string; section: SectionName }[] = [
  { label: 'Home', section: 'home' },
  { label: 'About', section: 'about' },
  { label: 'Skills', section: 'skills' },
  { label: 'Projects', section: 'projects' },
  { label: 'Education', section: 'education' },
  { label: 'Contact', section: 'contact' },
];

const Navbar: React.FC<{
  activeSection: SectionName;
  scrollToSection: (section: SectionName) => void;
}> = ({ activeSection, scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (section: SectionName) => {
    scrollToSection(section);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar" aria-label="Main navigation">
        <div className="navbar-inner">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="navbar-logo"
            onClick={(e) => { e.preventDefault(); handleNav('home'); }}
            aria-label="Ankan Maity — back to top"
          >
            Ankan<span>.</span>
          </a>

          {/* Desktop links */}
          <ul className="navbar-links" role="list">
            {NAV_ITEMS.map(({ label, section }) => (
              <li key={section}>
                <button
                  className={`nav-btn${activeSection === section ? ' active' : ''}`}
                  onClick={() => handleNav(section)}
                  aria-current={activeSection === section ? 'page' : undefined}
                >
                  {label}
                </button>
              </li>
            ))}
            {/* Resume link in nav */}
            <li>
              <a
                href={portfolioData.contact.resume}
                download
                className="btn btn-primary"
                style={{ padding: '0.4rem 0.9rem', fontSize: '0.85rem', minHeight: '36px' }}
                aria-label="Download resume PDF"
              >
                <FileText size={15} aria-hidden="true" />
                Resume
              </a>
            </li>
          </ul>

          {/* Hamburger (mobile) */}
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {NAV_ITEMS.map(({ label, section }) => (
          <button
            key={section}
            className={`nav-btn${activeSection === section ? ' active' : ''}`}
            onClick={() => handleNav(section)}
            aria-current={activeSection === section ? 'page' : undefined}
          >
            {label}
          </button>
        ))}
        <a
          href={portfolioData.contact.resume}
          download
          className="btn btn-primary"
          style={{ marginTop: '0.5rem', width: '100%', justifyContent: 'center' }}
          aria-label="Download resume PDF"
          onClick={() => setMenuOpen(false)}
        >
          <FileText size={16} aria-hidden="true" />
          Download Resume
        </a>
      </div>
    </>
  );
};

export default Navbar;
