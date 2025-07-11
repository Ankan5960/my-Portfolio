// sections/SkillsSection.tsx
import React, { useEffect, useState } from 'react';

type Skill = {
  id: number;
  title: string;
  items: string[];
};

type SkillsSectionProps = {
  sectionRef: React.RefObject<HTMLElement>;
  skills: Skill[];
};

const SkillsSection = ({ sectionRef, skills }: SkillsSectionProps) => {
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
      id="skills"
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center py-16 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100
        transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-10 text-blue-700 dark:text-blue-400">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">  {/* Responsive grid layout */}
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6
                         text-left transform transition-transform duration-300 ease-in-out hover:scale-103 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-300 border-b pb-2 border-blue-200 dark:border-blue-700">
                {skill.title}
              </h3>
              {skill.items.length > 0 ? (
                <ul className="text-lg text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 dark:text-gray-400">No specific items listed.</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;