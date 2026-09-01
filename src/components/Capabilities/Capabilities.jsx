import { useState } from 'react';
import { motion } from 'framer-motion';
import { Braces, Database, GitBranch, Globe, Server, Terminal } from 'lucide-react';

import './Capabilities.css';

const capabilities = [
  {
    id: 'frontend',
    title: 'FRONTEND',
    icon: Braces,
    level: 'CORE',
    description:
      'Building responsive interfaces, reusable components, animations, and user-focused experiences.',
    technologies: ['REACT', 'JAVASCRIPT', 'HTML', 'CSS'],
    strength: 92,
  },
  {
    id: 'backend',
    title: 'BACKEND',
    icon: Server,
    level: 'CORE',
    description:
      'Creating APIs, server-side logic, authentication flows, and application architecture.',
    technologies: ['NODE.JS', 'EXPRESS'],
    strength: 82,
  },
  {
    id: 'database',
    title: 'DATABASE',
    icon: Database,
    level: 'CORE',
    description: 'Designing and connecting application data using document-based database systems.',
    technologies: ['MONGODB'],
    strength: 78,
  },
  {
    id: 'deployment',
    title: 'DEPLOYMENT',
    icon: Globe,
    level: 'WORKFLOW',
    description: 'Taking applications from local development to production environments.',
    technologies: ['VERCEL', 'NETLIFY', 'RENDER'],
    strength: 80,
  },
  {
    id: 'version-control',
    title: 'VERSION CONTROL',
    icon: GitBranch,
    level: 'WORKFLOW',
    description:
      'Managing source code, repositories, project history, and collaborative development workflows.',
    technologies: ['GIT', 'GITHUB'],
    strength: 85,
  },
];

function Capabilities() {
  const [activeCapability, setActiveCapability] = useState(capabilities[0]);

  return (
    <section className="capabilities-section" id="capabilities">
      <div className="capabilities-grid" />

      <div className="capabilities-header">
        <motion.div
          className="capabilities-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="capabilities-dot" />

          <span>05 / CAPABILITIES</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          MY
          <br />
          <span>DEVELOPER OS.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The tools and systems I use
          <br />
          to turn ideas into products.
        </motion.p>
      </div>

      <div className="capabilities-console">
        <div className="console-sidebar">
          <div className="console-sidebar-heading">
            <Terminal size={13} />

            <span>SYSTEM MODULES</span>
          </div>

          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            const isActive = activeCapability.id === capability.id;

            return (
              <motion.button
                key={capability.id}
                className={`capability-tab ${isActive ? 'active' : ''}`}
                onClick={() => setActiveCapability(capability)}
                whileHover={{ x: 5 }}
              >
                <span className="capability-tab-number">0{index + 1}</span>

                <Icon size={15} />

                <span>{capability.title}</span>
              </motion.button>
            );
          })}
        </div>

        <motion.div
          className="console-main"
          key={activeCapability.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="console-topbar">
            <span>MODULE / {activeCapability.id.toUpperCase()}</span>

            <span className="console-online">● ACTIVE</span>
          </div>

          <div className="console-title">
            <span>{activeCapability.level}</span>

            <h3>{activeCapability.title}</h3>
          </div>

          <p className="console-description">{activeCapability.description}</p>

          <div className="console-strength">
            <div className="strength-heading">
              <span>SYSTEM FAMILIARITY</span>

              <strong>{activeCapability.strength}%</strong>
            </div>

            <div className="strength-track">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${activeCapability.strength}%`,
                }}
                transition={{
                  duration: 0.8,
                  ease: 'easeOut',
                }}
              />
            </div>
          </div>

          <div className="console-tech-heading">CONNECTED TECHNOLOGIES</div>

          <div className="console-technologies">
            {activeCapability.technologies.map((technology, index) => (
              <motion.div
                key={technology}
                className="console-tech"
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
              >
                <span className="tech-index">0{index + 1}</span>

                <span>{technology}</span>

                <span className="tech-status">READY</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="capabilities-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span>DEVELOPER ENVIRONMENT</span>

        <span className="capabilities-footer-line" />

        <span>INITIALIZED</span>
      </motion.div>
    </section>
  );
}

export default Capabilities;
