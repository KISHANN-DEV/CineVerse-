import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Pages
import Home from '../pages/Home';
import Trending from '../pages/Trending';
import Movies from '../pages/Movies';
import SearchPage from '../pages/SearchPage';
import MovieDetails from '../pages/MovieDetails';
import WatchPage from '../pages/WatchPage';
import Watchlist from '../pages/Watchlist';
import About from '../pages/About';
import Contribution from '../pages/Contribution';

// Transition component
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: [0.25, 0.8, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/trending" element={<PageTransition><Trending /></PageTransition>} />
        <Route path="/movies" element={<PageTransition><Movies /></PageTransition>} />
        <Route path="/search" element={<PageTransition><SearchPage /></PageTransition>} />
        <Route path="/movie/:id" element={<PageTransition><MovieDetails /></PageTransition>} />
        <Route path="/watch/:id" element={<PageTransition><WatchPage /></PageTransition>} />
        <Route path="/watchlist" element={<PageTransition><Watchlist /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contribution" element={<PageTransition><Contribution /></PageTransition>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
