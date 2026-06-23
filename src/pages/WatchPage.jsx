import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaStar, FaCalendarAlt, FaClock, FaInfoCircle } from 'react-icons/fa';
import { movieService, getBackdropUrl } from '../services/movieService';
import Carousel from '../components/carousel/Carousel';
import './WatchPage.css';

const WatchPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [videoKey, setVideoKey] = useState('');
  const [similar, setSimilar] = useState([]);

  // UI loading states
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWatchData = async () => {
      try {
        setLoading(true);
        window.scrollTo(0, 0);

        const [detailsRes, videosRes, similarRes] = await Promise.all([
          movieService.getMovieDetails(id),
          movieService.getMovieVideos(id),
          movieService.getSimilarMovies(id),
        ]);

        setMovie(detailsRes);
        setSimilar(similarRes.results ? similarRes.results : []);

        const videos = videosRes.results || [];
        const trailer = videos.find((vid) => vid.type === 'Trailer');
        setVideoKey(trailer ? trailer.key : '');
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWatchData();
  }, [id]);

  const formatRuntime = (minutes) => {
    if (!minutes) return 'N/A';
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hrs > 0 ? `${hrs}h ${mins}m` : `${mins}m`;
  };

  if (loading) {
    return (
      <div className="watch-page-loading-container page-container">
        <div className="skeleton-player shimmer" />
        <div className="skeleton-watch-title shimmer" />
      </div>
    );
  }

  if (!movie) return null;

  const year = movie.release_date ? movie.release_date.split('-')[0] : 'N/A';
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';

  return (
    <div className="watch-page page-container">
      <div
        className="watch-page-ambience-glow"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(34, 211, 238, 0.15) 0%, transparent 65%), 
                            url(${getBackdropUrl(movie.backdrop_path)})`
        }}
      />

      <div className="watch-back-row">
        <Link to={`/movie/${movie.id}`} className="watch-back-link">
          <FaChevronLeft /> <span>Back to Details</span>
        </Link>
      </div>

      {/* Main Theatre Player */}
      <div className="theatre-screen-frame glass-panel">
        {videoKey ? (
          <iframe
            title={`${movie.title} simulated playback`}
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&rel=0&modestbranding=1&controls=1&showinfo=0`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="theatre-iframe"
          />
        ) : (
          <div className="theatre-screen-fallback">
            <h3>Simulation Feed Unlinked</h3>
            <p>No video linked for this title.</p>
            <Link to={`/movie/${movie.id}`} className="btn-neon" style={{ marginTop: '16px' }}>
              <FaInfoCircle /> View Movie Details
            </Link>
          </div>
        )}
      </div>

      {/* Movie Details Summary */}
      <div className="watch-info-block glass-panel">
        <div className="watch-info-title-row">
          <h1 className="watch-movie-title glow-text-primary">{movie.title}</h1>
          <div className="watch-badges-row">
            <span className="watch-badge-tag"><FaCalendarAlt /> {year}</span>
            <span className="watch-badge-tag"><FaClock /> {formatRuntime(movie.runtime)}</span>
            <span className="watch-rating-glow-tag"><FaStar /> {rating}</span>
          </div>
        </div>

        <div className="watch-genres-row">
          {movie.genres && movie.genres.map((g) => (
            <span key={g.id} className="watch-genre-pill">
              {g.name}
            </span>
          ))}
        </div>

        <div className="watch-movie-synopsis">
          <h3>Synopsis</h3>
          <p>{movie.overview || 'No synopsis details have been mapped.'}</p>
        </div>
      </div>

      {/* Suggested continuation movies carousel */}
      {similar.length > 0 && (
        <section className="watch-suggested-section">
          <h2 className="watch-suggested-title">Continue Watching</h2>
          <Carousel movies={similar} />
        </section>
      )}
    </div>
  );
};

export default WatchPage;
