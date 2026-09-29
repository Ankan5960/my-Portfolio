// sections/HeroSection.tsx — Task 1: Hero rewrite with credibility links
import React, { useEffect, useState } from 'react';
import { Github, Mail, FileText, ChevronDown } from 'lucide-react';
import type { SectionName } from '../App';

// Inline LinkedIn icon (lucide-react doesn't export a proper LinkedIn)
const LinkedInIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

type HeroSectionProps = {
  sectionRef: React.RefObject<HTMLElement>;
  data: {
    name: string;
    headline: string;
    subline: string;
    availabilityBadge: string;
    profileImage?: string;
    contact: {
      email: string;
      github: string;
      linkedin: string;
      resume: string;
    };
  };
  scrollToSection: (section: SectionName) => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({ sectionRef, data, scrollToSection }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Slight delay so the animation feels intentional on page load
    const timer = setTimeout(() => setIsVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="hero-root blueprint-bg"
      aria-label="Introduction"
    >
      <div
        className="hero-inner"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        {/* Left: text content */}
        <div className="hero-content">
          {/* Availability badge */}
          <div style={{ marginBottom: '1.25rem' }}>
            <span className="badge-available" aria-label="Availability status">
              {data.availabilityBadge}
            </span>
          </div>

          {/* Name */}
          <p
            style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--col-muted)',
              marginBottom: '0.5rem',
            }}
          >
            Hi, I'm
          </p>
          <h1 className="hero-title" style={{ marginBottom: '0.5rem' }}>
            {data.name}
          </h1>

          {/* Headline */}
          <p
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              fontWeight: 600,
              color: 'var(--col-text)',
              marginBottom: '0.75rem',
              fontFamily: 'var(--font-mono)',
              opacity: 0.9,
            }}
          >
            {data.headline}
          </p>

          {/* Sub-line */}
          <p className="hero-sub">{data.subline}</p>

          {/* CTA Buttons */}
          <div className="hero-actions">
            {/* Primary: Resume */}
            <a
              href={data.contact.resume}
              download
              className="btn btn-primary"
              id="hero-resume-btn"
              aria-label="Download Ankan Maity's resume (PDF)"
            >
              <FileText size={16} aria-hidden="true" />
              Resume
            </a>

            {/* GitHub */}
            <a
              href={data.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              id="hero-github-btn"
              aria-label="View GitHub profile"
            >
              <Github size={16} aria-hidden="true" />
              GitHub
            </a>

            {/* Email */}
            <a
              href={`mailto:${data.contact.email}`}
              className="btn btn-secondary"
              id="hero-email-btn"
              aria-label={`Email Ankan at ${data.contact.email}`}
            >
              <Mail size={16} aria-hidden="true" />
              Email me
            </a>
          </div>

          {/* Social icon row */}
          <div className="hero-social">
            <a
              href={data.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="GitHub profile"
            >
              <Github size={18} aria-hidden="true" />
            </a>
            <a
              href={data.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon size={18} />
            </a>
            <a
              href={`mailto:${data.contact.email}`}
              className="icon-link"
              aria-label={`Send email to ${data.contact.email}`}
            >
              <Mail size={18} aria-hidden="true" />
            </a>
          </div>

          {/* Quiet secondary link */}
          <div style={{ marginTop: '1.5rem' }}>
            <button
              onClick={() => scrollToSection('projects')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--col-muted)',
                fontSize: '0.85rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                transition: 'color 0.2s',
                padding: '0.25rem 0',
                fontFamily: 'var(--font-sans)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--col-text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--col-muted)')}
              aria-label="Scroll to projects"
            >
              See projects
              <ChevronDown size={15} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Right: Profile photo */}
        <div className="hero-photo-wrapper">
          <img
            src={data.profileImage || 'https://placehold.co/240x240/161b22/8b949e?text=AM'}
            alt="Ankan Maity — profile photo"
            width="240"
            height="240"
            className="hero-photo"
            loading="eager"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = 'https://placehold.co/240x240/161b22/8b949e?text=AM';
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;