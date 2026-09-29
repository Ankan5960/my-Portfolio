// sections/AboutSection.tsx — Task 5: Concrete, short, no adjective stacking
import React, { useEffect, useState, useRef } from 'react';

type AboutSectionProps = {
  sectionRef: React.RefObject<HTMLElement>;
  about: string[];
};

const AboutSection: React.FC<AboutSectionProps> = ({ sectionRef, about }) => {
  const [isVisible, setIsVisible] = useState(false);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, [sectionRef]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-root about-root"
      aria-labelledby="about-heading"
    >
      <div
        className="section-inner"
        ref={innerRef}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <div className="section-heading">
          <h2 id="about-heading">About me</h2>
        </div>

        <div style={{ maxWidth: '68ch' }}>
          {about.map((paragraph, i) => (
            <p key={i} className="about-prose" style={{ marginBottom: i < about.length - 1 ? '1rem' : 0 }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
