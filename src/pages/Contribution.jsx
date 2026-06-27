import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserFriends, FaUser } from 'react-icons/fa';
import './Contribution.css';

const ContributorCard = ({ contributor, variants }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className="contributor-card glass-panel glass-panel-hover"
      variants={variants}
    >
      <div className="contributor-avatar-container">
        {!imgError ? (
          <img
            src={contributor.image}
            alt={contributor.name}
            className="contributor-avatar"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="contributor-avatar-fallback">
            <FaUser className="fallback-icon" />
          </div>
        )}
      </div>
      <div className="contributor-info">
        <h3>{contributor.name}</h3>
        <span className="contributor-role neon-cyan-color">{contributor.role}</span>
        <p className="contributor-desc">{contributor.desc}</p>
      </div>
    </motion.div>
  );
};

const Contribution = () => {
  const contributors = [
    {
      id: 1,
      name: 'Kishan Singh',
      role: 'Lead Developer',
      desc: 'Architected the core application structure and offline service layer.',
      image: '/src/assets/Kishan singh.jpg'
    },
    {
      id: 2,
      name: 'Trisha',
      role: 'UI/UX Designer',
      desc: 'Designed the cyberpunk aesthetic, layout styles, and animations.',
      image: '/src/assets/Trisha.jpg'
    },
    {
      id: 3,
      name: 'Rohit',
      role: 'Local Storage Specialist',
      desc: 'Optimized local storage persistency.',
      image: '/src/assets/Rohit.jpg'
    },
    {
      id: 4,
      name: 'Friend Name 4',
      role: 'QA / Tester',
      desc: 'Conducted rigorous browser tests and movie media validation.',
      image: '/src/assets/contributors/friend4.jpg'
    },
    {
      id: 5,
      name: 'Ishu Chah',
      role: 'Content Manager',
      desc: 'Curated and formatted local movie descriptions and card assets.',
      image: '/src/assets/Ishu.jpg'
    }
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
    <div className="contribution-page page-container">
      <div className="contribution-header">
        <div className="header-title-wrapper">
          <FaUserFriends className="header-icon neon-purple-color" />
          <h1 className="glow-text-primary">Project Contributions</h1>
        </div>
      </div>

      <div className="contribution-hero-card glass-panel">
        <h2 className="glow-text-secondary">The CineVerse Crew</h2>
        <p className="contribution-summary">
          Meet the minds behind **CineVerse**. This project was made possible by the hard work and collaboration of the contributors listed below. Each card highlights their respective role and key contributions to the application development.
        </p>
      </div>

      <motion.div
        className="contributors-grid"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {contributors.map((contributor) => (
          <ContributorCard
            key={contributor.id}
            contributor={contributor}
            variants={itemVariants}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Contribution;
