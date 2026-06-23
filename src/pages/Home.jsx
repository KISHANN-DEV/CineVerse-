import React, { useState, useEffect } from 'react';
import { FaFire, FaStar, FaHeart, FaHistory, FaTv } from 'react-icons/fa';
import { movieService } from '../services/movieService';
import Hero from '../components/hero/Hero';
import Carousel from '../components/carousel/Carousel';
import TrailerModal from '../components/trailer/TrailerModal';
import { MovieSkeletonCarousel } from '../components/Skeleton/MovieSkeleton';
import './Home.css';

const Home = () => {
  const [heroMovie, setHeroMovie] = useState(null);
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [recentlyAdded, setRecentlyAdded] = useState([]);

  const [loading, setLoading] = useState(true);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [trailerKey, setTrailerKey] = useState('');

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        setLoading(true);
        const [trendingRes, popularRes, topRatedRes, recommendedRes, recentRes] = await Promise.all([
          movieService.getTrendingMovies(),
          movieService.getPopularMovies(),
          movieService.getTopRatedMovies(),
          movieService.getRecommendedMovies(),
          movieService.getRecentlyAddedMovies(),
        ]);

        const trendingList = trendingRes.results || [];
        setTrending(trendingList);
        setPopular(popularRes.results || []);
        setTopRated(topRatedRes.results || []);
        setRecommended(recommendedRes.results || []);
        setRecentlyAdded(recentRes.results || []);

        if (trendingList.length > 0) {
          setHeroMovie(trendingList[0]);
        }
      } catch (err) {
        console.error('Home data load error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  const handleWatchTrailer = async (movieId) => {
    try {
      const response = await movieService.getMovieVideos(movieId);
      const videos = response.results || [];
      const trailer = videos.find((vid) => vid.type === 'Trailer');
      setTrailerKey(trailer ? trailer.key : '');
      setIsTrailerOpen(true);
    } catch (err) {
      console.error('Error fetching trailer video:', err);
    }
  };

  return (
    <div className="home-page page-container">
      {/* Hero Spotlight */}
      {loading ? (
        <div className="hero-loading-slot shimmer" />
      ) : (
        <Hero movie={heroMovie} onWatchTrailer={handleWatchTrailer} />
      )}

      {/* Movie Rows */}
      <div className="home-sections-container">
        <section className="home-movie-section">
          <div className="section-title-row">
            <FaFire className="section-title-icon neon-pink-color" />
            <h2 className="section-heading">Trending Now</h2>
          </div>
          {loading ? <MovieSkeletonCarousel /> : <Carousel movies={trending} />}
        </section>

        <section className="home-movie-section">
          <div className="section-title-row">
            <FaStar className="section-title-icon neon-cyan-color" />
            <h2 className="section-heading">Popular on CineVerse</h2>
          </div>
          {loading ? <MovieSkeletonCarousel /> : <Carousel movies={popular} />}
        </section>

        <section className="home-movie-section">
          <div className="section-title-row">
            <FaTv className="section-title-icon neon-purple-color" />
            <h2 className="section-heading">Top Rated</h2>
          </div>
          {loading ? <MovieSkeletonCarousel /> : <Carousel movies={topRated} />}
        </section>

        <section className="home-movie-section">
          <div className="section-title-row">
            <FaHeart className="section-title-icon neon-pink-color" />
            <h2 className="section-heading">Recommended</h2>
          </div>
          {loading ? <MovieSkeletonCarousel /> : <Carousel movies={recommended} />}
        </section>

        <section className="home-movie-section">
          <div className="section-title-row">
            <FaHistory className="section-title-icon neon-cyan-color" />
            <h2 className="section-heading">Recently Added</h2>
          </div>
          {loading ? <MovieSkeletonCarousel /> : <Carousel movies={recentlyAdded} />}
        </section>
      </div>

      <TrailerModal
        isOpen={isTrailerOpen}
        onClose={() => setIsTrailerOpen(false)}
        videoKey={trailerKey}
      />
    </div>
  );
};

export default Home;
