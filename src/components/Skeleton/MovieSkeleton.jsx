import React from 'react';

// Single Loading Shimmer Card
export const SkeletonCard = () => {
  return (
    <div className="movie-card-wrapper">
      <div className="movie-card glass-panel" style={{ border: '1px solid rgba(255, 255, 255, 0.05)', pointerEvents: 'none' }}>
        <div className="card-image-container shimmer" style={{ paddingTop: '150%' }} />
        <div className="card-body">
          <div className="shimmer" style={{ height: '14px', width: '80%', borderRadius: '4px', marginBottom: '8px' }} />
          <div className="shimmer" style={{ height: '10px', width: '40%', borderRadius: '3px' }} />
        </div>
      </div>
    </div>
  );
};

// Shimmering Grid Layout
export const MovieSkeletonGrid = ({ count = 8 }) => {
  return (
    <div className="movie-grid">
      {Array.from({ length: count }).map((_, idx) => (
        <SkeletonCard key={idx} />
      ))}
    </div>
  );
};

// Shimmering Carousel Row
export const MovieSkeletonCarousel = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', overflow: 'hidden', padding: '12px 0 36px 0' }}>
      {Array.from({ length: 6 }).map((_, idx) => (
        <div key={idx} style={{ flex: '0 0 180px', width: '180px' }}>
          <SkeletonCard />
        </div>
      ))}
    </div>
  );
};

export default SkeletonCard;
