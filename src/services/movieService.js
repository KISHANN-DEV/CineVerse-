// Simulated Movie API Service using static moviesData

import { MOCK_MOVIES, MOCK_GENRES } from './moviesData';

// Image CDNs (TMDB public image hosting does not require API keys)
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export const getBackdropUrl = (path, size = 'original') => {
  if (!path) return 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80';
  return path.startsWith('http') ? path : `${IMAGE_BASE_URL}/${size}${path}`;
};

export const getPosterUrl = (path, size = 'w500') => {
  if (!path) return 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=500&q=80';
  return path.startsWith('http') ? path : `${IMAGE_BASE_URL}/${size}${path}`;
};

export const getProfileUrl = (path, size = 'w185') => {
  if (!path || path.startsWith('/') && path.length < 5) {
    return 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=185&q=80';
  }
  return path.startsWith('http') ? path : `${IMAGE_BASE_URL}/${size}${path}`;
};

// Simulated network latency
const delay = (ms = 150) => new Promise((resolve) => setTimeout(resolve, ms));

export const movieService = {
  getTrendingMovies: async () => {
    await delay(200);
    // Return a curated subset of movies
    return { results: MOCK_MOVIES.slice(0, 8) };
  },

  getPopularMovies: async () => {
    await delay(200);
    // Sorted by popularity
    const sorted = [...MOCK_MOVIES].sort((a, b) => b.popularity - a.popularity);
    return { results: sorted };
  },

  getTopRatedMovies: async () => {
    await delay(200);
    // Sorted by ratings
    const sorted = [...MOCK_MOVIES].sort((a, b) => b.vote_average - a.vote_average);
    return { results: sorted };
  },

  getRecommendedMovies: async () => {
    await delay(200);
    // Return alternate movies
    const filtered = MOCK_MOVIES.filter((_, idx) => idx % 2 === 0);
    return { results: filtered };
  },

  getRecentlyAddedMovies: async () => {
    await delay(200);
    // Sorted by release date
    const sorted = [...MOCK_MOVIES].sort(
      (a, b) => new Date(b.release_date) - new Date(a.release_date)
    );
    return { results: sorted };
  },

  getMoviesByGenre: async (genreId) => {
    await delay(250);
    const filtered = MOCK_MOVIES.filter((movie) =>
      movie.genre_ids.includes(Number(genreId))
    );
    return { results: filtered };
  },

  searchMovies: async (query) => {
    await delay(150);
    if (!query) return { results: [] };
    const lowercaseQuery = query.toLowerCase();
    const filtered = MOCK_MOVIES.filter((movie) =>
      movie.title.toLowerCase().includes(lowercaseQuery) ||
      movie.tagline.toLowerCase().includes(lowercaseQuery) ||
      movie.overview.toLowerCase().includes(lowercaseQuery)
    );
    return { results: filtered };
  },

  getMovieDetails: async (id) => {
    await delay(200);
    const movie = MOCK_MOVIES.find((m) => m.id === Number(id));
    if (!movie) throw new Error('Movie not found');
    return movie;
  },

  getMovieCredits: async (id) => {
    await delay(150);
    const movie = MOCK_MOVIES.find((m) => m.id === Number(id));
    return { cast: movie ? movie.cast : [] };
  },

  getMovieVideos: async (id) => {
    await delay(150);
    const movie = MOCK_MOVIES.find((m) => m.id === Number(id));
    return {
      results: movie ? [{ site: 'YouTube', type: 'Trailer', key: movie.video_key }] : []
    };
  },

  getSimilarMovies: async (id) => {
    await delay(200);
    const movie = MOCK_MOVIES.find((m) => m.id === Number(id));
    if (!movie || !movie.similar_ids) {
      // Fallback: return everything else
      const others = MOCK_MOVIES.filter((m) => m.id !== Number(id));
      return { results: others };
    }
    const similar = MOCK_MOVIES.filter((m) => movie.similar_ids.includes(m.id));
    return { results: similar };
  },

  getGenres: async () => {
    await delay(50);
    return MOCK_GENRES;
  }
};

export default movieService;
