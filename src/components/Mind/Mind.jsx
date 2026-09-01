import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

import { skills } from '../../data/skills';
import NeuralNetwork from '../NeuralNetwork/NeuralNetwork';
import SkillPanel from './SkillPanel';
import ProjectModal from '../Projects/ProjectModal';

import './Mind.css';

function Mind() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSkillClick = (skill) => {
    setActiveSkill(skill);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseSkill = () => {
    setActiveSkill(null);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <section className="mind-section" id="mind">
      <div className="mind-background-grid" />

      <div className="mind-header">
        <motion.div
          className="mind-eyebrow"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Brain size={15} />

          <span>01 / MY MIND</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          HOW I <span>THINK.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Every technology is connected to something I build.
          <br />
          Explore the system.
        </motion.p>
      </div>

      <div className="mind-workspace">
        <NeuralNetwork skills={skills} activeSkill={activeSkill} onSkillClick={handleSkillClick} />

        <SkillPanel
          skill={activeSkill}
          onClose={handleCloseSkill}
          onProjectClick={handleProjectClick}
        />
      </div>

      <ProjectModal project={selectedProject} onClose={handleCloseProject} />
    </section>
  );
}

export default Mind;
