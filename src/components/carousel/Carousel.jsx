import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import MovieCard from '../movieCard/MovieCard';
import './Carousel.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <div className="carousel-empty-message">No movies available.</div>;
  }

  return (
    <div className="swiper-carousel-wrapper">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1400: {
            slidesPerView: 6,
            spaceBetween: 24,
          },
        }}
        className="movies-swiper-container"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id} className="swiper-slide-custom">
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
