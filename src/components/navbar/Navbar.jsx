import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaBell, FaUserCircle, FaChevronDown, FaStar } from 'react-icons/fa';
import { movieService, getPosterUrl } from '../../services/movieService';
import './Navbar.css';

const Navbar = () => {
  const navigate = useRef(useNavigate());
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const navRef = useRef(null);
  const searchContainerRef = useRef(null);

  // Simulated notifications list
  const notifications = [
    { id: 1, text: '🔥 Dune: Part Two is now streaming in VIP Mode.', time: '2m ago' },
    { id: 2, text: '🚀 Cyberpunk collections have been refreshed.', time: '1h ago' },
    { id: 3, text: '⭐ The Dark Knight ranks #1 in Top Rated today.', time: '5h ago' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowNotifications(false);
        setShowProfileMenu(false);
      }
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fetch search suggestions
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchQuery.trim().length < 2) {
        setSuggestions([]);
        return;
      }
      try {
        const res = await movieService.searchMovies(searchQuery);
        setSuggestions(res.results ? res.results.slice(0, 5) : []);
      } catch (err) {
        console.error('Suggestions error:', err);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchSuggestions();
    }, 200);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSuggestions(false);
      navigate.current(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleSuggestionClick = (movieId) => {
    setSearchQuery('');
    setShowSuggestions(false);
    navigate.current(`/movie/${movieId}`);
  };

  return (
    <nav ref={navRef} className="navbar glass-panel">
      <div className="navbar-left">
        {/* Mobile spacing placeholder */}
      </div>

      {/* Floating Search Container */}
      <div ref={searchContainerRef} className="navbar-search-container">
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            placeholder="Search movies..."
            className="glass-input search-input"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
          />
          <button type="submit" className="search-submit-btn" aria-label="Submit search">
            <FaSearch />
          </button>
        </form>

        {/* Suggestions Dropdown */}
        <AnimatePresence>
          {showSuggestions && suggestions.length > 0 && (
            <motion.div
              className="search-suggestions-dropdown glass-panel"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.2 }}
            >
              {suggestions.map((movie) => {
                const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';
                const year = movie.release_date ? movie.release_date.split('-')[0] : 'N/A';
                return (
                  <div
                    key={movie.id}
                    className="suggestion-item"
                    onClick={() => handleSuggestionClick(movie.id)}
                  >
                    <img
                      src={getPosterUrl(movie.poster_path, 'w92')}
                      alt={movie.title}
                      className="suggestion-poster"
                    />
                    <div className="suggestion-info">
                      <span className="suggestion-title">{movie.title}</span>
                      <div className="suggestion-meta">
                        <span className="suggestion-year">{year}</span>
                        <span className="suggestion-rating">
                          <FaStar className="star-icon" /> {rating}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Actions Area */}
      <div className="navbar-actions-area">
        {/* VIP Mode Active status badge */}
        <div className="vip-badge glass-panel glow-card">
          <span className="vip-badge-dot" />
          <span>VIP ACTIVE</span>
        </div>

        {/* Notifications Bell */}
        <div className="nav-action-item">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfileMenu(false);
            }}
            className={`nav-icon-btn ${showNotifications ? 'active' : ''}`}
            aria-label="View notifications"
          >
            <FaBell />
            <span className="notif-badge-indicator" />
          </button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div
                className="notifications-dropdown glass-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.2 }}
              >
                <div className="notif-dropdown-header">
                  <h4>Alert Center</h4>
                </div>
                <div className="notif-list">
                  {notifications.map((item) => (
                    <div key={item.id} className="notif-item">
                      <p>{item.text}</p>
                      <span>{item.time}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Profile Dropdown */}
        <div className="nav-action-item">
          <button
            onClick={() => {
              setShowProfileMenu(!showProfileMenu);
              setShowNotifications(false);
            }}
            className="profile-trigger-btn"
          >
            <div className="avatar-wrapper">
              <FaUserCircle size={28} />
              <span className="online-dot" />
            </div>
            <span className="profile-name">Kishan Singh</span>
            <FaChevronDown size={10} className={`chevron-icon ${showProfileMenu ? 'open' : ''}`} />
          </button>

          <AnimatePresence>
            {showProfileMenu && (
              <motion.div
                className="profile-dropdown glass-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.2 }}
              >
                <div className="profile-dropdown-user">
                  <span className="user-name-title">Agent Kishan Singh</span>
                  <span className="premium-tag">PREMIUM ACCESS</span>
                </div>
                <hr className="dropdown-divider" />
                <div className="profile-status-desc">
                  Simulated local workspace engine enabled. No internet key config required.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
