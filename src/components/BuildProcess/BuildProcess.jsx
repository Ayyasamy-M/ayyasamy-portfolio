import { motion } from 'framer-motion';
import { Lightbulb, Boxes, Code2, ShieldCheck, Rocket } from 'lucide-react';

import './BuildProcess.css';

const process = [
  {
    number: '01',
    title: 'IDEA',
    icon: Lightbulb,
    description:
      'I start by understanding the problem, the user, and what the product actually needs.',
    tags: ['RESEARCH', 'USER FLOW', 'REQUIREMENTS'],
  },
  {
    number: '02',
    title: 'ARCHITECTURE',
    icon: Boxes,
    description:
      'I break the idea into a clean structure and decide how the frontend, backend, and data should connect.',
    tags: ['STRUCTURE', 'API', 'DATABASE'],
  },
  {
    number: '03',
    title: 'BUILD',
    icon: Code2,
    description:
      'I turn the architecture into a responsive and functional product using modern development tools.',
    tags: ['REACT', 'NODE', 'MONGODB'],
  },
  {
    number: '04',
    title: 'TEST',
    icon: ShieldCheck,
    description:
      'I check the interface, interactions, responsiveness, and functionality before deployment.',
    tags: ['DEBUG', 'RESPONSIVE', 'QUALITY'],
  },
  {
    number: '05',
    title: 'DEPLOY',
    icon: Rocket,
    description:
      'I take the finished product live and make sure it is ready to be used in the real world.',
    tags: ['GIT', 'VERCEL', 'NETLIFY'],
  },
];

function BuildProcess() {
  return (
    <section className="build-section" id="build">
      <div className="build-background" />

      <div className="build-header">
        <motion.div
          className="build-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="build-status-dot" />

          <span>02 / HOW I BUILD</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          FROM IDEA
          <br />
          TO <span>REALITY.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          A simple idea becomes a working system
          <br />
          through a structured process.
        </motion.p>
      </div>

      <div className="build-process">
        <div className="build-line">
          <motion.div
            className="build-line-progress"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.8,
              ease: 'easeInOut',
            }}
          />
        </div>

        {process.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              className="build-step"
              key={item.number}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: '-80px',
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.7,
              }}
            >
              <div className="build-step-number">{item.number}</div>

              <div className="build-step-icon">
                <Icon size={20} />
              </div>

              <div className="build-step-content">
                <div className="build-step-title">
                  <span>STEP {item.number}</span>

                  <h3>{item.title}</h3>
                </div>

                <p>{item.description}</p>

                <div className="build-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="build-step-index">/ PROCESS_{item.number}</div>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        className="build-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span>PROCESS COMPLETE</span>

        <span className="build-footer-line" />

        <span>READY FOR THE NEXT BUILD</span>
      </motion.div>
    </section>
  );
}

export default BuildProcess;
