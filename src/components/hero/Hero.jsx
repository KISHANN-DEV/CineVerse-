import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPlay, FaInfoCircle, FaStar } from 'react-icons/fa';
import { getBackdropUrl } from '../../services/movieService';
import './Hero.css';

const Hero = ({ movie, onWatchTrailer }) => {
  const navigate = useNavigate();

  if (!movie) {
    return <div className="hero-loading-slot shimmer" />;
  }

  const { id, title, overview, backdrop_path, vote_average, release_date } = movie;
  const rating = vote_average ? vote_average.toFixed(1) : 'N/A';
  const year = release_date ? release_date.split('-')[0] : 'N/A';

  const truncateOverview = (text, limit = 160) => {
    if (!text) return '';
    return text.length > limit ? text.slice(0, limit) + '...' : text;
  };

  return (
    <div className="hero-banner-section">
      <div
        className="hero-backdrop"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(5, 8, 22, 0.95) 0%, rgba(5, 8, 22, 0.4) 50%, rgba(5, 8, 22, 0.1) 100%), 
                            linear-gradient(to top, var(--bg-primary) 0%, rgba(5, 8, 22, 0) 30%), 
                            url(${getBackdropUrl(backdrop_path)})`
        }}
      />

      <div className="hero-content-outer">
        <motion.div
          className="hero-glass-details glass-panel"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: 'spring', damping: 20 }}
        >
          <div className="hero-meta-row">
            <span className="hero-rating-pill">
              <FaStar /> {rating}
            </span>
            <span className="hero-year-pill">{year}</span>
            <span className="hero-badge">CV SPOTLIGHT</span>
          </div>

          <h1 className="hero-movie-title glow-text-primary">{title}</h1>
          <p className="hero-movie-desc">{truncateOverview(overview)}</p>

          <div className="hero-actions-row">
            <button
              onClick={() => onWatchTrailer(id)}
              className="btn-neon hero-btn"
            >
              <FaPlay size={12} /> Watch Trailer
            </button>
            <button
              onClick={() => navigate(`/movie/${id}`)}
              className="btn-glass hero-btn"
            >
              <FaInfoCircle size={12} /> Explore Movie
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
