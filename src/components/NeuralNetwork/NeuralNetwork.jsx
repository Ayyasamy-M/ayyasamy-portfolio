import { motion } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';
import { useState } from 'react';

import './NeuralNetwork.css';

const nodes = [
  { id: 'javascript', x: 50, y: 15 },
  { id: 'react', x: 25, y: 37 },
  { id: 'node', x: 75, y: 37 },
  { id: 'html-css', x: 15, y: 68 },
  { id: 'express', x: 50, y: 58 },
  { id: 'mongodb', x: 85, y: 68 },
  { id: 'git', x: 50, y: 82 },
];

const connections = [
  ['javascript', 'react'],
  ['javascript', 'node'],
  ['react', 'html-css'],
  ['react', 'express'],
  ['node', 'express'],
  ['node', 'mongodb'],
  ['express', 'mongodb'],
  ['express', 'git'],
];

function NeuralNetwork({ skills, activeSkill, onSkillClick }) {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const getSkill = (id) => skills.find((skill) => skill.id === id);

  const focusedSkill = hoveredSkill || activeSkill;

  return (
    <div className="neural-network">
      <div className="network-grid" />

      <div className="network-glow" />

      <motion.div
        className="network-scan"
        animate={{ y: ['-100%', '100%'] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="network-core">
        <motion.div
          className="core-ring core-ring-one"
          animate={{ rotate: 360 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.div
          className="core-ring core-ring-two"
          animate={{ rotate: -360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <div className="core-center">
          <span>AM</span>
          <small>DEV</small>
        </div>
      </div>

      <svg className="network-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
        {connections.map(([from, to], index) => {
          const start = nodes.find((node) => node.id === from);

          const end = nodes.find((node) => node.id === to);

          if (!start || !end) return null;

          const isConnected = focusedSkill?.id === from || focusedSkill?.id === to;

          return (
            <g key={`${from}-${to}`}>
              <line
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                className={isConnected ? 'connection active' : 'connection'}
              />

              <motion.circle
                r="0.7"
                className="connection-pulse"
                initial={{
                  cx: start.x,
                  cy: start.y,
                  opacity: 0,
                }}
                animate={{
                  cx: [start.x, end.x],
                  cy: [start.y, end.y],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2.4,
                  delay: index * 0.3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </g>
          );
        })}
      </svg>

      <div className="network-nodes">
        {nodes.map((node, index) => {
          const skill = getSkill(node.id);

          if (!skill) return null;

          const isActive = activeSkill?.id === node.id;

          const isHovered = hoveredSkill?.id === node.id;

          return (
            <motion.button
              key={node.id}
              className={`skill-node ${isActive ? 'active' : ''} ${isHovered ? 'hovered' : ''}`}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
              }}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                type: 'spring',
                stiffness: 180,
                damping: 14,
              }}
              whileHover={{
                scale: 1.15,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              onFocus={() => setHoveredSkill(skill)}
              onBlur={() => setHoveredSkill(null)}
              onClick={() => onSkillClick(skill)}
              aria-label={`Explore ${skill.name}`}
            >
              <span className="node-pulse" />

              <span className="node-dot" />

              <span className="node-label">{skill.name}</span>

              <span className="node-category">{skill.category}</span>
            </motion.button>
          );
        })}
      </div>

      <motion.div
        className="network-focus"
        animate={{
          opacity: focusedSkill ? 1 : 0,
        }}
      >
        <span>FOCUS //</span>

        <strong>{focusedSkill?.name || 'SYSTEM'}</strong>
      </motion.div>

      <div className="network-hint">
        <MousePointer2 size={13} />
        <span>CLICK A NODE</span>
      </div>
    </div>
  );
}

export default NeuralNetwork;
