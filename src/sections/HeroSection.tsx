import React, { useEffect, useState } from 'react';
import DownloadCVButton from '../components/DownloadCVButton';

type HeroSectionProps = {
  sectionRef: React.RefObject<HTMLElement>;
  data: {
    name: string;
    tagline: string;
    profileImage?: string;
  };
  scrollToSection: (section: 'projects') => void;
};

const HeroSection = ({ sectionRef, data, scrollToSection }: HeroSectionProps) => {
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
      id="home"
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center py-16 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100
        transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="text-center">
        <img
          src={data.profileImage || "https://placehold.co/150x150/64748b/ffffff?text=AM"}
          alt="Profile"
          className="w-50 h-50 rounded-full mx-auto mb-6 shadow-lg object-cover transform transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = "https://placehold.co/150x150/64748b/ffffff?text=AM";
          }}
        />
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-blue-700 dark:text-blue-400 leading-tight">
          {data.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 font-medium">
          {data.tagline}
        </p>
        <button
          onClick={() => scrollToSection('projects')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 active:bg-blue-800"
        >
          View My Work
        </button>
        <div className="block md:hidden mt-1">
          <DownloadCVButton />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;