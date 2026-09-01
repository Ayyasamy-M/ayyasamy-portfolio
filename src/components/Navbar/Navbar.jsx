import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

import './Navbar.css';

const navItems = [
  { number: '01', label: 'MIND', id: 'mind' },
  { number: '02', label: 'BUILD', id: 'build' },
  { number: '03', label: 'WORK', id: 'projects' },
  { number: '04', label: 'JOURNEY', id: 'experience' },
  { number: '05', label: 'CAPABILITIES', id: 'capabilities' },
  { number: '06', label: 'CONTACT', id: 'contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.05, 0.2, 0.4],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavigation = (id) => {
    setMenuOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <header className="navbar">
        <button
          className="navbar-logo"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
          aria-label="Go to top"
        >
          <span>AM</span>
          <small>DEV</small>
        </button>

        <nav className="navbar-desktop">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={activeSection === item.id ? 'nav-item active' : 'nav-item'}
              onClick={() => handleNavigation(item.id)}
            >
              <span>{item.number}</span>
              <strong>{item.label}</strong>
            </button>
          ))}
        </nav>

        <div className="navbar-status">
          <span className="status-light" />
          <span>AVAILABLE</span>
        </div>

        <button
          className="navbar-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <div className={`mobile-navigation ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-navigation-inner">
          <div className="mobile-navigation-label">
            <span>// NAVIGATION</span>
            <span>AM.DEV</span>
          </div>

          <nav>
            {navItems.map((item, index) => (
              <button
                key={item.id}
                className={activeSection === item.id ? 'mobile-nav-item active' : 'mobile-nav-item'}
                onClick={() => handleNavigation(item.id)}
              >
                <span>0{index + 1}</span>
                <strong>{item.label}</strong>
              </button>
            ))}
          </nav>

          <div className="mobile-navigation-footer">
            <span>FRONTEND / FULL STACK DEVELOPER</span>
            <span>INDIA</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
