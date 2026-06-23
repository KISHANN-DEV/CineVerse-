import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaGithub, FaGlobe } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass-panel">
      <div className="footer-container">
        <div className="footer-brand-section">
          <h3>Cine<span className="logo-neon">Verse</span></h3>
          <p className="footer-tagline">Your ultimate cyberpunk cinematic universe.</p>
          <p className="footer-credits">
            Crafted with <FaHeart className="heart-icon" /> by Kishan Singh
          </p>
        </div>

        <div className="footer-links-section">
          <div className="footer-link-group">
            <h4>Explore</h4>
            <Link to="/">Home</Link>
            <Link to="/trending">Trending</Link>
            <Link to="/movies">Movies</Link>
          </div>
          <div className="footer-link-group">
            <h4>Account</h4>
            <Link to="/watchlist">Watchlist</Link>
            <Link to="/about">About Us</Link>
          </div>
        </div>

        <div className="footer-social-section">
          <h4>Connect</h4>
          <div className="social-links-row">
            <a href="https://github.com/KISHANN-DEV" target="_blank" rel="noopener noreferrer" aria-label="Github link"><FaGithub /></a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" aria-label="Website link"><FaGlobe /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          This is a simulated movie catalog built as a React showcase. Film metadata and graphics are locally cached.
        </p>
        <p className="copyright-text">&copy; {new Date().getFullYear()} CineVerse Clean. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
