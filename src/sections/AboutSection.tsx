// sections/AboutSection.tsx
import React, { useEffect, useState } from 'react';

type AboutSectionProps = {
  sectionRef: React.RefObject<HTMLElement>;
  about: string;
};

const AboutSection = ({ sectionRef, about }: AboutSectionProps) => {
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

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [sectionRef]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center py-16 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100
        transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-10 text-blue-700 dark:text-blue-400">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          {about}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
