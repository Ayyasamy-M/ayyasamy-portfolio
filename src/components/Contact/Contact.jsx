import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, GitBranch, Mail, MapPin, Send } from 'lucide-react';

import './Contact.css';

const contactLinks = [
  {
    label: 'GITHUB',
    value: 'github.com/Ayyasamy-M',
    url: 'https://github.com/Ayyasamy-M',
    icon: GitBranch,
  },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/ayyasamy-muthu-685913264',
    url: 'https://www.linkedin.com/in/ayyasamy-muthu-685913264/',
    icon: ExternalLink,
  },
];

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-grid" />

      <div className="contact-header">
        <motion.div
          className="contact-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="contact-dot" />

          <span>06 / INITIATE CONNECTION</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          LET&apos;S
          <br />
          <span>BUILD.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Have an idea, project, or opportunity?
          <br />
          Let&apos;s turn it into something real.
        </motion.p>
      </div>

      <div className="contact-console">
        <div className="contact-terminal">
          <div className="contact-terminal-bar">
            <div className="terminal-lights">
              <span />
              <span />
              <span />
            </div>

            <small>connection.exe</small>
          </div>

          <div className="contact-terminal-body">
            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span>whoami</span>
            </div>

            <div className="terminal-output">AYYASAMY.M</div>

            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span>role</span>
            </div>

            <div className="terminal-output">FRONTEND / FULL STACK DEVELOPER</div>

            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span>location</span>
            </div>

            <div className="terminal-output">INDIA</div>

            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span>status</span>
            </div>

            <div className="terminal-output terminal-active">AVAILABLE FOR OPPORTUNITIES</div>

            <div className="terminal-cursor">
              <span>$</span>
              <i />
            </div>
          </div>
        </div>

        <motion.div
          className="contact-action"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="contact-action-label">
            <Mail size={14} />
            <span>DIRECT CONNECTION</span>
          </div>

          <h3>
            HAVE SOMETHING
            <br />
            <span>WORTH BUILDING?</span>
          </h3>

          <p>Send me a message and let&apos;s discuss your next digital idea.</p>

          <a className="contact-email" href="mailto:your-email@example.com">
            <span>START A CONVERSATION</span>
            <Send size={15} />
          </a>
        </motion.div>
      </div>

      <div className="contact-links">
        {contactLinks.map((link, index) => {
          const Icon = link.icon;

          return (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
              }}
            >
              <div className="contact-link-icon">
                <Icon size={17} />
              </div>

              <div className="contact-link-info">
                <span>{link.label}</span>
                <strong>{link.value}</strong>
              </div>

              <ArrowUpRight size={15} />
            </motion.a>
          );
        })}
      </div>

      <div className="contact-meta">
        <div>
          <MapPin size={12} />
          <span>INDIA</span>
        </div>

        <span>© {new Date().getFullYear()} AYYASAMY.M</span>

        <span>BUILT WITH REACT</span>
      </div>
    </section>
  );
}

export default Contact;
