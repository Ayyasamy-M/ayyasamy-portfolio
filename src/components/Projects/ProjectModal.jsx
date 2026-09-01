import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, X } from 'lucide-react';
import './ProjectModal.css';

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="project-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="project-modal"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ duration: 0.35 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button className="project-modal-close" onClick={onClose} aria-label="Close project">
              <X size={20} />
            </button>

            <div className="modal-top">
              <span>PROJECT / {project.number}</span>
              <span>{project.category}</span>
            </div>

            <div className="modal-main">
              <div className="modal-title-area">
                <span className="modal-small-title">SELECTED WORK</span>

                <h2>{project.shortName}</h2>

                <h3>{project.name}</h3>
              </div>

              <div className="modal-description">
                <span>ABOUT THE PROJECT</span>
                <p>{project.description}</p>
              </div>
            </div>

            <div className="modal-stack">
              <span className="modal-section-label">TECHNOLOGY</span>

              <div className="stack-list">
                {project.stack.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <div className="modal-actions">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-action primary"
              >
                <span>LIVE DEMO</span>
                <ExternalLink size={16} />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-action"
              >
                <span>SOURCE CODE</span>
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="modal-footer">
              <span>AYYASAMY.M</span>
              <span>PROJECT SYSTEM ACTIVE</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectModal;
