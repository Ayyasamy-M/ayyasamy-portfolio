import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

import { projects } from '../../data/projects';
import './Projects.css';

function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-grid" />

      {/* ================================
          HEADER
      ================================= */}

      <div className="projects-header">
        <motion.div
          className="projects-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="projects-dot" />

          <span>03 / SELECTED WORKS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          THINGS I
          <br />
          <span>BUILT.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Not just websites.
          <br />
          Systems built around real use cases.
        </motion.p>
      </div>

      {/* ================================
          PROJECT COMMAND
      ================================= */}

      <div className="projects-command">
        {/* PROJECT LIST */}

        <div className="project-list">
          {projects.map((project, index) => {
            const isActive = activeProject?.id === project.id;

            return (
              <motion.button
                key={project.id}
                type="button"
                className={`project-row ${isActive ? 'active' : ''}`}
                onClick={() => setActiveProject(project)}
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
              >
                <span className="project-number">{project.number}</span>

                <span className="project-row-name">{project.name}</span>

                <span className="project-row-type">{project.category}</span>

                <ArrowUpRight size={16} />
              </motion.button>
            );
          })}
        </div>

        {/* PROJECT DISPLAY */}

        {activeProject && (
          <motion.div
            className="project-display"
            key={activeProject.id}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.45,
            }}
          >
            {/* DISPLAY TOP */}

            <div className="project-display-top">
              <span>PROJECT PREVIEW</span>

              <span>{activeProject.category}</span>
            </div>

            {/* PROJECT VISUAL */}

            <div className="project-visual">
              <div className="visual-glow" />

              <div className="visual-window">
                <div className="window-bar">
                  <span />
                  <span />
                  <span />

                  <small>{activeProject.name}</small>
                </div>

                <div className="window-content">
                  <span className="window-code">{'<PROJECT />'}</span>

                  <strong>{activeProject.shortName}</strong>

                  <span>SYSTEM ONLINE</span>
                </div>
              </div>
            </div>

            {/* PROJECT INFORMATION */}

            <div className="project-display-info">
              <span className="project-display-index">/ WORK_{activeProject.shortName}</span>

              <h3>{activeProject.name}</h3>

              <p>{activeProject.description}</p>

              {/* TECHNOLOGIES */}

              <div className="project-tech">
                {activeProject.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              {/* ACTION BUTTONS */}

              <div className="project-actions">
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                >
                  <span>LIVE PROJECT</span>

                  <ExternalLink size={14} />
                </a>

                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                >
                  <span>SOURCE CODE</span>

                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Projects;
