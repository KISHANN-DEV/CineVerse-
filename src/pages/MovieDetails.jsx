import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar, FaPlay, FaHeart, FaRegHeart, FaTv, FaCalendarAlt, FaClock, FaChevronLeft } from 'react-icons/fa';
import { movieService, getBackdropUrl, getPosterUrl, getProfileUrl } from '../services/movieService';
import TrailerModal from '../components/trailer/TrailerModal';
import Carousel from '../components/carousel/Carousel';
import './MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [trailerKey, setTrailerKey] = useState('');
  const [inWatchlist, setInWatchlist] = useState(false);

  // UI loading states
  const [loading, setLoading] = useState(true);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  useEffect(() => {
    const fetchAllDetails = async () => {
      try {
        setLoading(true);
        window.scrollTo(0, 0);

        // Fetch parallel
        const [detailsRes, creditsRes, videosRes, similarRes] = await Promise.all([
          movieService.getMovieDetails(id),
          movieService.getMovieCredits(id),
          movieService.getMovieVideos(id),
          movieService.getSimilarMovies(id),
        ]);

        setMovie(detailsRes);
        setCast(creditsRes.cast ? creditsRes.cast : []);
        setSimilar(similarRes.results ? similarRes.results : []);

        const videos = videosRes.results || [];
        const trailer = videos.find((vid) => vid.type === 'Trailer');
        setTrailerKey(trailer ? trailer.key : '');

        const savedWatchlist = JSON.parse(localStorage.getItem('cineverse_watchlist')) || [];
        setInWatchlist(savedWatchlist.some((m) => m.id === Number(id)));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllDetails();
  }, [id]);

  const toggleWatchlist = () => {
    if (!movie) return;
    const savedWatchlist = JSON.parse(localStorage.getItem('cineverse_watchlist')) || [];
    
    let updatedWatchlist;
    if (inWatchlist) {
      updatedWatchlist = savedWatchlist.filter((m) => m.id !== movie.id);
    } else {
      updatedWatchlist = [...savedWatchlist, movie];
    }
    
    localStorage.setItem('cineverse_watchlist', JSON.stringify(updatedWatchlist));
    setInWatchlist(!inWatchlist);
    window.dispatchEvent(new Event('watchlistUpdated'));
  };

  const formatRuntime = (minutes) => {
    if (!minutes) return 'N/A';
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hrs > 0 ? `${hrs}h ${mins}m` : `${mins}m`;
  };

  if (loading) {
    return (
      <div className="movie-details-loading-container page-container">
        <div className="skeleton-backdrop shimmer" />
        <div className="skeleton-details-row">
          <div className="skeleton-details-poster shimmer" />
          <div className="skeleton-details-content">
            <div className="skeleton-bar-title shimmer" />
            <div className="skeleton-bar-meta shimmer" />
            <div className="skeleton-bar-desc shimmer" />
          </div>
        </div>
      </div>
    );
  }

  if (!movie) return null;

  const year = movie.release_date ? movie.release_date.split('-')[0] : 'N/A';
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';

  return (
    <div className="movie-details-page page-container">
      {/* Background Backdrop */}
      <div
        className="details-blur-backdrop"
        style={{
          backgroundImage: `linear-gradient(to top, var(--bg-primary) 0%, rgba(5, 8, 22, 0.4) 60%, rgba(5, 8, 22, 0.9) 100%), 
                            url(${getBackdropUrl(movie.backdrop_path)})`
        }}
      />

      <div className="details-back-nav">
        <button onClick={() => navigate(-1)} className="back-link-btn">
          <FaChevronLeft /> <span>Back</span>
        </button>
      </div>

      <div className="details-content-grid">
        {/* Left Column: Poster */}
        <div className="details-poster-box">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {movie.poster_path ? (
              <img
                src={getPosterUrl(movie.poster_path, 'w500')}
                alt={movie.title}
                className="details-poster-img glass-panel glow-card"
              />
            ) : (
              <div className="details-poster-placeholder glass-panel">
                <span>{movie.title}</span>
              </div>
            )}
          </motion.div>
        </div>

        {/* Right Column: Info */}
        <div className="details-info-box">
          <div className="details-stats-row">
            <span className="stat-pill"><FaCalendarAlt /> {year}</span>
            <span className="stat-pill"><FaClock /> {formatRuntime(movie.runtime)}</span>
            <span className="rating-glow-pill"><FaStar /> {rating}</span>
          </div>

          <h1 className="details-movie-title glow-text-primary">{movie.title}</h1>
          {movie.tagline && <p className="details-movie-tagline">"{movie.tagline}"</p>}

          <div className="details-genres-row">
            {movie.genres && movie.genres.map((g) => (
              <span key={g.id} className="genre-badge-chip">
                {g.name}
              </span>
            ))}
          </div>

          <div className="details-overview-box">
            <h3>Overview</h3>
            <p>{movie.overview || 'No overview summary is available.'}</p>
          </div>

          <div className="details-actions-row-page">
            {trailerKey && (
              <button
                onClick={() => setIsTrailerOpen(true)}
                className="btn-neon action-button-details"
              >
                <FaPlay /> Watch Trailer
              </button>
            )}

            <Link to={`/watch/${movie.id}`} className="btn-glass action-button-details glow-cyan-hover">
              <FaTv /> Stream Movie
            </Link>

            <button
              onClick={toggleWatchlist}
              className={`btn-glass action-button-details fav-toggle-btn ${inWatchlist ? 'active' : ''}`}
            >
              {inWatchlist ? (
                <>
                  <FaHeart className="watchlist-icon-heart filled" /> In Watchlist
                </>
              ) : (
                <>
                  <FaRegHeart className="watchlist-icon-heart" /> Add Watchlist
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Cast Scroll Section */}
      {cast.length > 0 && (
        <section className="details-section-row">
          <h2 className="details-row-heading">Top Cast</h2>
          <div className="cast-scroll-container">
            {cast.map((member) => (
              <div key={member.id} className="cast-member-card glass-panel">
                <img
                  src={getProfileUrl(member.profile_path)}
                  alt={member.name}
                  className="cast-photo-img"
                  loading="lazy"
                />
                <div className="cast-names-box">
                  <span className="cast-actor-name">{member.name}</span>
                  <span className="cast-character-name">{member.character}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Recommendations Carousel */}
      {similar.length > 0 && (
        <section className="details-section-row">
          <h2 className="details-row-heading">Recommended Movies</h2>
          <Carousel movies={similar} />
        </section>
      )}

      <TrailerModal
        isOpen={isTrailerOpen}
        onClose={() => setIsTrailerOpen(false)}
        videoKey={trailerKey}
      />
    </div>
  );
};

export default MovieDetails;
