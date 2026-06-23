import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFilm } from 'react-icons/fa';
import { movieService } from '../services/movieService';
import MovieCard from '../components/movieCard/MovieCard';
import { MovieSkeletonGrid } from '../components/Skeleton/MovieSkeleton';
import './Movies.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [loading, setLoading] = useState(true);

  // Load genres and initial popular movies list
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        const genresRes = await movieService.getGenres();
        setGenres(genresRes.genres || []);
        
        const moviesRes = await movieService.getPopularMovies();
        setMovies(moviesRes.results || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  // Fetch movies by selected genre
  useEffect(() => {
    const fetchGenreMovies = async () => {
      try {
        setLoading(true);
        if (!selectedGenre) {
          const res = await movieService.getPopularMovies();
          setMovies(res.results || []);
        } else {
          const res = await movieService.getMoviesByGenre(selectedGenre);
          setMovies(res.results || []);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGenreMovies();
  }, [selectedGenre]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 22 } }
  };

  return (
    <div className="movies-page page-container">
      <div className="movies-header">
        <div className="header-title-wrapper">
          <FaFilm className="header-icon neon-cyan-color" />
          <h1 className="glow-text-primary">Explore Movies</h1>
        </div>
      </div>

      {/* Genre Filter Scroll Row */}
      <div className="genre-scroll-wrapper">
        <button
          onClick={() => setSelectedGenre('')}
          className={`genre-filter-btn glass-panel ${selectedGenre === '' ? 'active' : ''}`}
        >
          All Popular
        </button>
        {genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => setSelectedGenre(genre.id)}
            className={`genre-filter-btn glass-panel ${selectedGenre === genre.id ? 'active' : ''}`}
          >
            {genre.name}
          </button>
        ))}
      </div>

      {loading ? (
        <MovieSkeletonGrid count={12} />
      ) : movies.length === 0 ? (
        <div className="movies-empty-catalog glass-panel">
          <h3>No Movies Found</h3>
          <p>No films were discovered matching this category filter.</p>
        </div>
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

export default Movies;
