// sections/ContactSection.tsx — Task 8: Full contact section with all links
import React, { useEffect, useState } from 'react';
import { Mail, Github, FileText } from 'lucide-react';

// LinkedIn SVG
const LinkedInIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

type ContactInfo = {
  email: string;
  github: string;
  linkedin: string;
  resume: string;
};

type ContactSectionProps = {
  sectionRef: React.RefObject<HTMLElement>;
  contact: ContactInfo;
};

const ContactSection: React.FC<ContactSectionProps> = ({ sectionRef, contact }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, [sectionRef]);

  const links = [
    {
      href: `mailto:${contact.email}`,
      label: contact.email,
      ariaLabel: `Email ${contact.email}`,
      icon: <Mail size={20} aria-hidden="true" />,
      id: 'contact-email',
      external: false,
    },
    {
      href: contact.github,
      label: 'GitHub',
      ariaLabel: 'View GitHub profile',
      icon: <Github size={20} aria-hidden="true" />,
      id: 'contact-github',
      external: true,
    },
    {
      href: contact.linkedin,
      label: 'LinkedIn',
      ariaLabel: 'View LinkedIn profile',
      icon: <LinkedInIcon size={20} />,
      id: 'contact-linkedin',
      external: true,
    },
    {
      href: contact.resume,
      label: 'Resume (PDF)',
      ariaLabel: 'Download resume PDF',
      icon: <FileText size={20} aria-hidden="true" />,
      id: 'contact-resume',
      external: false,
      download: true,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-root about-root"
      aria-labelledby="contact-heading"
    >
      <div
        className="section-inner"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <div className="section-heading">
          <h2 id="contact-heading">Get in touch</h2>
        </div>

        <p style={{ color: 'var(--col-muted)', marginBottom: '2rem', maxWidth: '52ch', fontSize: '1rem' }}>
          I'm looking for full-time software engineering roles. If you have a position that might be a fit, or just want to connect, reach out via any of the channels below.
        </p>

        <div className="contact-links">
          {links.map((link) => (
            <a
              key={link.id}
              id={link.id}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              download={('download' in link && link.download) ? true : undefined}
              className="contact-link-item"
              aria-label={link.ariaLabel}
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
