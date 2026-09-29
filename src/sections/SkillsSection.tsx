// sections/SkillsSection.tsx — Task 6: Proven, grouped, no miscategorized items
import React, { useEffect, useState } from 'react';

type SkillItem = {
  label: string;
  project: string | null;
};

type SkillsData = {
  strong: SkillItem[];
  working: SkillItem[];
};

type SkillsSectionProps = {
  sectionRef: React.RefObject<HTMLElement>;
  skills: SkillsData;
};

const SkillsSection: React.FC<SkillsSectionProps> = ({ sectionRef, skills }) => {
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
      id="skills"
      ref={sectionRef}
      className="section-root"
      aria-labelledby="skills-heading"
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
          <h2 id="skills-heading">Skills</h2>
        </div>

        {/* Strong / proven skills */}
        <div className="skills-group">
          <p className="skills-group-label">Strong — used in shipped projects</p>
          <div className="chips-wrap" role="list">
            {skills.strong.map((skill) => (
              <span
                key={skill.label}
                className="chip"
                role="listitem"
                title={skill.project ? `Used in: ${skill.project}` : undefined}
              >
                {skill.label}
              </span>
            ))}
          </div>
        </div>

        {/* Working knowledge */}
        <div className="skills-group">
          <p className="skills-group-label">Working knowledge</p>
          <div className="chips-wrap" role="list">
            {skills.working.map((skill) => (
              <span
                key={skill.label}
                className="chip chip-blue"
                role="listitem"
                title={skill.project ? `Used in: ${skill.project}` : undefined}
              >
                {skill.label}
              </span>
            ))}
          </div>
        </div>

        {/* Note */}
        <p style={{ fontSize: '0.8rem', color: 'var(--col-muted-2)', marginTop: '1rem' }}>
          Hover a chip to see which project it comes from.
        </p>
      </div>
    </section>
  );
};

export default SkillsSection;