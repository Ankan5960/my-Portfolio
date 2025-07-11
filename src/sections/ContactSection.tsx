// sections/ContactSection.tsx
import React, { useEffect, useState } from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

type ContactInfo = {
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
};

type ContactSectionProps = {
  sectionRef: React.RefObject<HTMLElement>;
  contact: ContactInfo;
};

const ContactSection = ({ sectionRef, contact }: ContactSectionProps) => {
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
      id="contact"
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center py-16 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100
        transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-700 dark:text-blue-400">Get In Touch</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Feel free to reach out if you have any questions or just want to connect!
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href={`mailto:${contact.email}`}
            className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-110"
            aria-label="Email"
          >
            <Mail size={36} />
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={36} />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={36} />
          </a>
          <a
            href={contact.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-110"
            aria-label="Twitter"
          >
            <Twitter size={36} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
