import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaFilm } from 'react-icons/fa';
import './TrailerModal.css';

const TrailerModal = ({ isOpen, onClose, videoKey }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="trailer-modal-overlay-wrapper">
          {/* Backdrop Blur layer */}
          <motion.div
            className="trailer-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Player Container */}
          <motion.div
            className="trailer-modal-box glass-panel"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          >
            <button className="trailer-modal-close" onClick={onClose} aria-label="Close trailer">
              <FaTimes />
            </button>

            <div className="trailer-aspect-ratio-box">
              {videoKey ? (
                <iframe
                  title="Official Trailer Player"
                  src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&rel=0&modestbranding=1&controls=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="trailer-iframe"
                />
              ) : (
                <div className="trailer-modal-fallback">
                  <FaFilm className="fallback-film-icon" />
                  <h3>Official Trailer Unavailable</h3>
                  <p>No video linked for this title.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TrailerModal;
