// sections/EducationSection.tsx — Task 8: Education with dates, certifications
import React, { useEffect, useState } from 'react';
import { GraduationCap, Award } from 'lucide-react';

type EducationItem = {
  id: number;
  institution: string;
  degree: string;
  detail: string | null;
  year: string;
};

type CertificationItem = {
  id: number;
  name: string;
  organization: string;
  year: string;
};

type EducationSectionProps = {
  sectionRef: React.RefObject<HTMLElement>;
  education: EducationItem[];
  certifications: CertificationItem[];
};

const EducationSection: React.FC<EducationSectionProps> = ({
  sectionRef,
  education,
  certifications,
}) => {
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

  return (
    <section
      id="education"
      ref={sectionRef}
      className="section-root"
      aria-labelledby="education-heading"
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
          <h2 id="education-heading">Education & Certifications</h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
            gap: '2.5rem',
          }}
        >
          {/* Education */}
          <div>
            <h3
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--col-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '1.25rem',
              }}
            >
              <GraduationCap size={18} aria-hidden="true" />
              Education
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {education.map((item) => (
                <div key={item.id} className="edu-card">
                  <p className="edu-degree">{item.degree}</p>
                  <p className="edu-inst">{item.institution}</p>
                  <p className="edu-year">{item.year}</p>
                  {item.detail && (
                    <span className="edu-cgpa">{item.detail}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--col-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '1.25rem',
              }}
            >
              <Award size={18} aria-hidden="true" />
              Certifications
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {certifications.map((item) => (
                <div key={item.id} className="edu-card">
                  <p className="edu-degree">{item.name}</p>
                  <p className="edu-inst">{item.organization}</p>
                  <p className="edu-year">{item.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
