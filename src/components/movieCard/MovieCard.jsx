import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar, FaPlay, FaHeart, FaRegHeart } from 'react-icons/fa';
import { getPosterUrl } from '../../services/movieService';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const { id, title, poster_path, vote_average, release_date } = movie;
  const rating = vote_average ? vote_average.toFixed(1) : 'N/A';
  const year = release_date ? release_date.split('-')[0] : 'N/A';
  const [inWatchlist, setInWatchlist] = useState(false);

  useEffect(() => {
    const savedWatchlist = JSON.parse(localStorage.getItem('cineverse_watchlist')) || [];
    setInWatchlist(savedWatchlist.some((m) => m.id === id));
  }, [id]);

  const toggleWatchlist = (e) => {
    e.preventDefault();
    const savedWatchlist = JSON.parse(localStorage.getItem('cineverse_watchlist')) || [];
    
    let updatedWatchlist;
    if (inWatchlist) {
      updatedWatchlist = savedWatchlist.filter((m) => m.id !== id);
    } else {
      updatedWatchlist = [...savedWatchlist, movie];
    }
    
    localStorage.setItem('cineverse_watchlist', JSON.stringify(updatedWatchlist));
    setInWatchlist(!inWatchlist);
    window.dispatchEvent(new Event('watchlistUpdated'));
  };

  return (
    <motion.div
      className="movie-card-wrapper"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <Link to={`/movie/${id}`} className="movie-card-link">
        <div className="movie-card glass-panel">
          <div className="card-image-container">
            {poster_path ? (
              <img
                src={getPosterUrl(poster_path, 'w342')}
                alt={title}
                className="card-poster"
                loading="lazy"
              />
            ) : (
              <div className="card-poster-placeholder">
                <span>{title}</span>
              </div>
            )}

            <div className="card-hover-overlay">
              <span className="card-play-btn">
                <FaPlay />
              </span>
            </div>

            <div className="card-rating-tag">
              <FaStar />
              <span>{rating}</span>
            </div>

            <button
              onClick={toggleWatchlist}
              className={`card-watchlist-btn ${inWatchlist ? 'active' : ''}`}
              title={inWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
              aria-label={inWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
            >
              {inWatchlist ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>

          <div className="card-body">
            <h3 className="card-movie-title" title={title}>
              {title}
            </h3>
            <span className="card-movie-year">{year}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default MovieCard;
