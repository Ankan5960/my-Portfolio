// sections/ProjectsSection.tsx — Task 4: Stack chips + Live/Source buttons
import React, { useEffect, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  stack: string[];
  sourceUrl: string | null;
  liveUrl: string | null;
  image: string;
  imageCaption: string;
};

type ProjectsSectionProps = {
  sectionRef: React.RefObject<HTMLElement>;
  projects: Project[];
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ sectionRef, projects }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, [sectionRef]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-root about-root"
      aria-labelledby="projects-heading"
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
          <h2 id="projects-heading">Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="card project-card" aria-label={project.title}>
              {/* Project image */}
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt={project.imageCaption}
                  width="400"
                  height="200"
                  className="project-img"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://placehold.co/400x200/161b22/8b949e?text=Project';
                  }}
                />
                {/* Caption badge for circuit diagrams / non-screenshots */}
                {project.imageCaption !== project.title && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '8px',
                      left: '8px',
                      fontSize: '0.7rem',
                      padding: '0.15rem 0.4rem',
                      background: 'rgba(0,0,0,0.65)',
                      color: '#e6edf3',
                      borderRadius: '4px',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {project.imageCaption}
                  </span>
                )}
              </div>

              {/* Card body */}
              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>

                {/* Stack chips */}
                <div className="project-card-chips" aria-label="Technology stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons — pinned to bottom */}
                <div className="project-card-actions">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ fontSize: '0.82rem', padding: '0.45rem 0.9rem', minHeight: '40px' }}
                      aria-label={`Live demo of ${project.title}`}
                      id={`project-live-${project.id}`}
                    >
                      <ExternalLink size={14} aria-hidden="true" />
                      Live demo
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{ fontSize: '0.82rem', padding: '0.45rem 0.9rem', minHeight: '40px' }}
                      aria-label={`Source code for ${project.title} on GitHub`}
                      id={`project-source-${project.id}`}
                    >
                      <Github size={14} aria-hidden="true" />
                      Source code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer note */}
        <p style={{ marginTop: '2.5rem', fontSize: '0.85rem', color: 'var(--col-muted)' }}>
          More experiments and learning projects on{' '}
          <a
            href="https://github.com/Ankan5960"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View more projects on GitHub"
          >
            GitHub →
          </a>
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
