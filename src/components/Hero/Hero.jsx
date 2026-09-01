import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowDown, Terminal } from 'lucide-react';

import './Hero.css';

const techStack = ['REACT', 'NODE', 'MONGODB'];

function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;

    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const scrollToMind = () => {
    document.getElementById('mind')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className="hero-section" onMouseMove={handleMouseMove}>
      <div className="hero-grid" />

      <motion.div
        className="hero-cursor-glow"
        style={{
          left: smoothX,
          top: smoothY,
        }}
      />

      <div className="hero-noise" />

      <div className="hero-content">
        <motion.div
          className="hero-system-label"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <span className="system-dot" />

          <span>SYSTEM / 001</span>

          <span className="system-line" />

          <span>PORTFOLIO.EXE</span>
        </motion.div>

        <motion.div
          className="hero-intro"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.15,
            duration: 0.7,
          }}
        >
          HELLO, I'M
        </motion.div>

        <div className="hero-name-wrapper">
          <motion.h1
            className="hero-name"
            initial={{
              opacity: 0,
              y: 60,
              skewY: 4,
            }}
            animate={{
              opacity: 1,
              y: 0,
              skewY: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            AYYASAMY
            <span>.M</span>
          </motion.h1>

          <motion.div
            className="hero-name-index"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.9,
            }}
          >
            01
          </motion.div>
        </div>

        <motion.div
          className="hero-role"
          initial={{
            opacity: 0,
            x: -30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.55,
            duration: 0.7,
          }}
        >
          <span>FULL STACK</span>
          <span className="role-divider">/</span>
          <span>DEVELOPER</span>
        </motion.div>

        <motion.div
          className="hero-statement"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.7,
            duration: 0.7,
          }}
        >
          <span className="statement-mark">“</span>

          <p>
            I DON'T JUST BUILD
            <strong> WEBSITES.</strong>
            <br />I BUILD
            <strong> SYSTEMS.</strong>
          </p>
        </motion.div>

        <motion.button
          className="hero-explore"
          onClick={scrollToMind}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: 0.6,
          }}
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          <span>EXPLORE MY MIND</span>

          <ArrowDown size={15} />
        </motion.button>
      </div>

      <motion.div
        className="hero-terminal"
        initial={{
          opacity: 0,
          x: 30,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.8,
          duration: 0.7,
        }}
      >
        <div className="terminal-heading">
          <Terminal size={13} />

          <span>SYSTEM STATUS</span>
        </div>

        <div className="terminal-status">
          <span className="status-online" />

          <span>ALL SYSTEMS OPERATIONAL</span>
        </div>

        <div className="terminal-tech">
          {techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </motion.div>

      <div className="hero-side-label">
        <span>SCROLL TO EXPLORE</span>

        <span className="side-line" />
      </div>

      <div className="hero-bottom-meta">
        <span>FULL STACK / REACT / NODE</span>

        <span>2026</span>
      </div>
    </section>
  );
}

export default Hero;
