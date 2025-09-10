import React, { useEffect, useState } from "react";

type EducationItem = {
  institution: string;
  degree: string;
  year: string;
};

type CertificationItem = {
  name: string;
  organization: string;
  year: string;
};

type EducationSectionProps = {
  sectionRef: React.RefObject<HTMLElement>;
  education: EducationItem[];
  certifications: CertificationItem[];
};

const EducationSection = ({
  sectionRef,
  education,
  certifications,
}: EducationSectionProps) => {
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
      id="education"
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center py-16 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100
        transition-all duration-1000 ease-out
        ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-10 text-blue-700 dark:text-blue-400">
          Education & Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 duration-300"
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {item.degree}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.institution}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                    {item.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 duration-300"
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {item.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.organization}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                    {item.year}
                  </p>
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
