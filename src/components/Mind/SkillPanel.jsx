import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

import { projects } from '../../data/projects';

function SkillPanel({ skill, onClose, onProjectClick }) {
  return (
    <AnimatePresence>
      {skill && (
        <motion.aside
          className="skill-panel"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.35 }}
        >
          <button className="panel-close" onClick={onClose} aria-label="Close skill panel">
            <X size={18} />
          </button>

          <div className="panel-number">// SKILL.{skill.id.toUpperCase()}</div>

          <div className="panel-category">{skill.category}</div>

          <h3>{skill.name}</h3>

          <p className="panel-description">{skill.shortDescription}</p>

          <div className="panel-block">
            <span className="panel-label">USED FOR</span>

            <ul>
              {skill.usedFor.map((item) => (
                <li key={item}>
                  <span />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="panel-block">
            <span className="panel-label">CONNECTED PROJECTS</span>

            <div className="project-links">
              {skill.projects.map((project) => {
                const projectData = projects.find((item) => item.name === project.name);

                return (
                  <button
                    key={project.name}
                    className="project-link"
                    onClick={() => {
                      if (projectData) {
                        onProjectClick(projectData);
                      }
                    }}
                  >
                    <span>{project.name}</span>

                    <ArrowUpRight size={14} />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="panel-status">
            <span className="status-dot" />

            <span>SYSTEM CONNECTION ACTIVE</span>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

export default SkillPanel;
