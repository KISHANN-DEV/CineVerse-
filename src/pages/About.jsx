import React from 'react';
import { motion } from 'framer-motion';
import { FaInfoCircle, FaReact, FaCss3Alt, FaMobileAlt, FaDatabase } from 'react-icons/fa';
import { SiFramer, SiVite } from 'react-icons/si';
import './About.css';

const About = () => {
  const techCards = [
    { name: 'React', icon: <FaReact />, desc: 'Core UI framework.' },
    { name: 'Vite', icon: <SiVite />, desc: 'Build tool and dev server.' },
    { name: 'Framer Motion', icon: <SiFramer />, desc: 'Page transitions and animations.' },
    { name: 'Swiper JS', icon: <FaMobileAlt />, desc: 'Touch carousel sliders.' },
    { name: 'Offline Engine', icon: <FaDatabase />, desc: 'High-fidelity mock movie collection.' },
    { name: 'CSS Grid & Flex', icon: <FaCss3Alt />, desc: 'Glassmorphic responsive grids.' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } }
  };

  return (
    <div className="about-page page-container">
      <div className="about-header">
        <div className="header-title-wrapper">
          <FaInfoCircle className="header-icon neon-purple-color" />
          <h1 className="glow-text-primary">About CineVerse</h1>
        </div>
      </div>

      <div className="about-hero-card glass-panel">
        <h2 className="glow-text-secondary">Prinstine Offline Streaming Showcase</h2>
        <p className="about-summary">
          **CineVerse Clean** is a zero-configuration, cyberpunk-styled movie catalog simulation. Built entirely with local mock services, it removes any TMDB key requirements, letting you explore trailers, cast listings, and genres instantly with zero load failures.
        </p>
      </div>

      <h2 className="tech-stack-heading">Engine Specifications</h2>

      <motion.div
        className="tech-grid"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {techCards.map((tech) => (
          <motion.div
            key={tech.name}
            className="tech-card glass-panel glass-panel-hover"
            variants={itemVariants}
          >
            <div className="tech-icon-circle">{tech.icon}</div>
            <h3>{tech.name}</h3>
            <p>{tech.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="qa-section glass-panel">
        <h3>Feature Capabilities</h3>
        <ul className="qa-list">
          <li>
            <strong>Instant Startup:</strong> No online API key setup prompts or connection delays. Runs immediately upon load.
          </li>
          <li>
            <strong>Visual Animations:</strong> Employs Framer Motion page fades, swiper slides, and glowing hover states to deliver a premium user experience.
          </li>
          <li>
            <strong>Watchlist Persistency:</strong> Tracks and saves movie configurations in local storage.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
