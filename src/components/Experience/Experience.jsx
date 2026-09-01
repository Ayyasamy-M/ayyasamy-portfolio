import { motion } from 'framer-motion';
import { BriefcaseBusiness, Code2, Layers3, Terminal } from 'lucide-react';

import './Experience.css';

const experiences = [
  {
    version: 'V1.0',
    period: '2023 — 2024',
    role: 'FULL STACK FOUNDATION',
    company: 'LEARNING / DEVELOPMENT',
    icon: Terminal,
    description:
      'Built my foundation in modern web development by working with frontend, backend, databases, APIs, and deployment workflows.',
    stack: ['REACT', 'NODE.JS', 'MONGODB'],
  },
  {
    version: 'V2.0',
    period: '2024 — 2025',
    role: 'FREELANCE FRONTEND DEVELOPER',
    company: 'REMOTE',
    icon: Code2,
    description:
      'Worked on real-world frontend projects, focusing on responsive interfaces, reusable components, user experience, and deployment.',
    stack: ['REACT', 'JAVASCRIPT', 'CSS'],
  },
  {
    version: 'V3.0',
    period: '2025',
    role: 'JUNIOR SOFTWARE DEVELOPER',
    company: 'PROFESSIONAL DEVELOPMENT',
    icon: BriefcaseBusiness,
    description:
      'Worked in a professional software environment and contributed to application development using modern web technologies.',
    stack: ['REACT', 'NODE.JS', 'WEB DEVELOPMENT'],
  },
  {
    version: 'NOW',
    period: 'CURRENT',
    role: 'BUILDING THE NEXT VERSION',
    company: 'AYYASAMY.M',
    icon: Layers3,
    description:
      'Continuously building, experimenting, learning, and turning ideas into functional digital products.',
    stack: ['FULL STACK', 'SYSTEMS', 'CREATIVE DEVELOPMENT'],
  },
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-grid" />

      <div className="experience-header">
        <motion.div
          className="experience-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="experience-dot" />
          <span>04 / VERSION HISTORY</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          HOW I
          <br />
          <span>EVOLVED.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Every project, every challenge,
          <br />
          added another layer to the system.
        </motion.p>
      </div>

      <div className="experience-terminal">
        <div className="experience-terminal-bar">
          <span />
          <span />
          <span />

          <small>career.log</small>
        </div>

        <div className="experience-terminal-body">
          <span>$ whoami</span>

          <strong>AYYASAMY.M</strong>

          <span>$ status</span>

          <em>EVOLVING...</em>
        </div>
      </div>

      <div className="experience-timeline">
        <div className="experience-line">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.8,
              ease: 'easeInOut',
            }}
          />
        </div>

        {experiences.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              className="experience-item"
              key={item.version}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -40 : 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                margin: '-80px',
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
            >
              <div className="experience-marker">
                <Icon size={15} />
              </div>

              <div className="experience-card">
                <div className="experience-card-top">
                  <span className="experience-version">{item.version}</span>

                  <span className="experience-period">{item.period}</span>
                </div>

                <h3>{item.role}</h3>

                <div className="experience-company">{item.company}</div>

                <p>{item.description}</p>

                <div className="experience-stack">
                  {item.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        className="experience-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span>BUILD STATUS</span>

        <div className="experience-progress">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '78%' }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              delay: 0.3,
            }}
          />
        </div>

        <span>CONTINUOUSLY IMPROVING</span>
      </motion.div>
    </section>
  );
}

export default Experience;
