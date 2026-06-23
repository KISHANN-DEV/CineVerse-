import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFire } from 'react-icons/fa';
import { movieService } from '../services/movieService';
import MovieCard from '../components/movieCard/MovieCard';
import { MovieSkeletonGrid } from '../components/Skeleton/MovieSkeleton';
import './Trending.css';

const Trending = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeWindow, setTimeWindow] = useState('week'); // day or week

  useEffect(() => {
    const fetchTrendingData = async () => {
      try {
        setLoading(true);
        // Time window filters can trigger variations on order in mock mode
        const res = await movieService.getTrendingMovies();
        let list = res.results || [];
        if (timeWindow === 'day') {
          // reverse order to mock difference
          list = [...list].reverse();
        }
        setMovies(list);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingData();
  }, [timeWindow]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 22 } }
  };

  return (
    <div className="trending-page page-container">
      <div className="page-header-row">
        <div className="header-title-wrapper">
          <FaFire className="header-icon neon-pink-color" />
          <h1 className="glow-text-primary">Trending Movies</h1>
        </div>

        <div className="time-toggle-tabs glass-panel">
          <button
            onClick={() => setTimeWindow('day')}
            className={`tab-toggle-btn ${timeWindow === 'day' ? 'active' : ''}`}
          >
            Today
          </button>
          <button
            onClick={() => setTimeWindow('week')}
            className={`tab-toggle-btn ${timeWindow === 'week' ? 'active' : ''}`}
          >
            This Week
          </button>
        </div>
      </div>

      {loading ? (
        <MovieSkeletonGrid count={12} />
      ) : (
        <motion.div
          className="movie-grid"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {movies.map((movie) => (
            <motion.div key={movie.id} variants={itemVariants}>
              <MovieCard movie={movie} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Trending;
