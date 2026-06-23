import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaHeartBroken, FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MovieCard from '../components/movieCard/MovieCard';
import './Watchlist.css';

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  const loadWatchlist = () => {
    const saved = JSON.parse(localStorage.getItem('cineverse_watchlist')) || [];
    setWatchlist(saved);
  };

  useEffect(() => {
    loadWatchlist();
    window.addEventListener('watchlistUpdated', loadWatchlist);
    return () => window.removeEventListener('watchlistUpdated', loadWatchlist);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 220, damping: 24 } },
    exit: { opacity: 0, scale: 0.9, y: 15, transition: { duration: 0.25 } }
  };

  return (
    <div className="watchlist-page page-container">
      <div className="watchlist-header">
        <div className="header-title-wrapper">
          <FaHeart className="header-icon neon-pink-color" />
          <h1 className="glow-text-primary">My Watchlist</h1>
        </div>
      </div>

      <AnimatePresence mode="popLayout">
        {watchlist.length === 0 ? (
          <motion.div
            className="watchlist-empty-state glass-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            key="empty"
          >
            <FaHeartBroken className="empty-heart-icon" />
            <h3>Your Watchlist is empty</h3>
            <p>Add films to your list by clicking the heart button on movie cards or details pages.</p>
            <Link to="/" className="btn-neon empty-action-btn">
              <FaPlay /> Explore Movies
            </Link>
          </motion.div>
        ) : (
          <motion.div
            className="movie-grid"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            key="grid"
          >
            {watchlist.map((movie) => (
              <motion.div
                key={movie.id}
                variants={itemVariants}
                exit="exit"
                layout
              >
                <MovieCard movie={movie} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Watchlist;
