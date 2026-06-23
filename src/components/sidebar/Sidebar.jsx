import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaFire, FaFilm, FaHeart, FaInfoCircle, FaChevronRight, FaTimes, FaBars, FaUserFriends } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/trending', label: 'Trending', icon: <FaFire /> },
    { path: '/movies', label: 'Movies', icon: <FaFilm /> },
    { path: '/watchlist', label: 'Watchlist', icon: <FaHeart /> },
    { path: '/about', label: 'About', icon: <FaInfoCircle /> },
    { path: '/contribution', label: 'Contribution', icon: <FaUserFriends /> },
  ];

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      {/* Mobile Header Bar */}
      <div className="mobile-header glass-panel">
        <NavLink to="/" className="mobile-brand">
          Cine<span className="logo-neon">Verse</span>
        </NavLink>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-toggle-btn">
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Main Sidebar Component */}
      <aside className={`sidebar glass-panel ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <NavLink to="/" className="sidebar-logo">
            <span className="logo-symbol"><FaFilm /></span>
            <span className="logo-text">Cine<span className="logo-neon">Verse</span></span>
          </NavLink>
          <button 
            className="collapse-btn-desktop" 
            onClick={() => setCollapsed(!collapsed)}
            aria-label="Toggle sidebar"
          >
            <motion.span animate={{ rotate: collapsed ? 180 : 0 }}>
              <FaChevronRight />
            </motion.span>
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              >
                <div className="link-icon">{item.icon}</div>
                <span className="link-label">{item.label}</span>

                {isActive && (
                  <motion.div
                    layoutId="activeSidebarIndicator"
                    className="sidebar-active-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          {!collapsed ? (
            <div className="footer-premium-card glass-panel glow-card">
              <span className="premium-glow">VIP MODE</span>
              <p>Unlimited Streaming Simulator</p>
            </div>
          ) : (
            <div className="footer-premium-dot" title="VIP Access Mode Enabled" />
          )}
        </div>
      </aside>

      {mobileOpen && (
        <div className="mobile-sidebar-backdrop" onClick={() => setMobileOpen(false)} />
      )}
    </>
  );
};

export default Sidebar;
