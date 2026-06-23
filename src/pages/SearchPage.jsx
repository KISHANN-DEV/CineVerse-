import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { movieService } from '../services/movieService';
import MovieCard from '../components/movieCard/MovieCard';
import { MovieSkeletonGrid } from '../components/Skeleton/MovieSkeleton';
import './SearchPage.css';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [localQuery, setLocalQuery] = useState(query);

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Advanced filters state
  const [showFilters, setShowFilters] = useState(false);
  const [yearFilter, setYearFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('0');

  useEffect(() => {
    setLocalQuery(query);
    if (!query) {
      setMovies([]);
      return;
    }

    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        const res = await movieService.searchMovies(query);
        setMovies(res.results || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (localQuery.trim()) {
      setSearchParams({ q: localQuery.trim() });
    }
  };

  // Filter movies locally
  const filteredMovies = movies.filter((movie) => {
    const movieYear = movie.release_date ? movie.release_date.split('-')[0] : '';
    const movieRating = movie.vote_average || 0;
    
    const matchesYear = yearFilter ? movieYear === yearFilter : true;
    const matchesRating = movieRating >= Number(ratingFilter);

    return matchesYear && matchesRating;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 220, damping: 24 } }
  };

  return (
    <div className="search-page page-container">
      {/* Search Header Form */}
      <div className="search-page-header">
        <form onSubmit={handleSearchSubmit} className="search-page-form">
          <input
            type="text"
            className="glass-input search-page-input"
            placeholder="Search movies..."
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
          />
          <button type="submit" className="search-page-btn" aria-label="Submit search">
            <FaSearch />
          </button>
        </form>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`filter-toggle-btn btn-glass ${showFilters ? 'active' : ''}`}
        >
          <FaFilter /> Filters
        </button>
      </div>

      {/* Advanced Filter Panel */}
      {showFilters && (
        <motion.div
          className="advanced-filters-panel glass-panel"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="filter-group">
            <label htmlFor="year-select">Release Year</label>
            <input
              id="year-select"
              type="number"
              placeholder="e.g. 2024"
              className="glass-input filter-input"
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <label htmlFor="rating-select">Minimum Rating ({ratingFilter}+)</label>
            <input
              id="rating-select"
              type="range"
              min="0"
              max="10"
              step="0.5"
              className="filter-slider"
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
            />
          </div>

          <button
            onClick={() => {
              setYearFilter('');
              setRatingFilter('0');
            }}
            className="btn-glass reset-filters-btn"
          >
            Clear Filters
          </button>
        </motion.div>
      )}

      {query && (
        <p className="search-results-info">
          Search results for: <span className="highlight-query">"{query}"</span> ({filteredMovies.length} found)
        </p>
      )}

      {loading ? (
        <MovieSkeletonGrid count={8} />
      ) : filteredMovies.length === 0 ? (
        query ? (
          <div className="search-empty-state glass-panel">
            <h3>No Matches Found</h3>
            <p>No films fit your search criteria. Try a different keyword.</p>
          </div>
        ) : (
          <div className="search-empty-state glass-panel">
            <h3>Enter a search query</h3>
            <p>Type a movie title or description in the search bar above to begin.</p>
          </div>
        )
      ) : (
        <motion.div
          className="movie-grid"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {filteredMovies.map((movie) => (
            <motion.div key={movie.id} variants={itemVariants}>
              <MovieCard movie={movie} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default SearchPage;
