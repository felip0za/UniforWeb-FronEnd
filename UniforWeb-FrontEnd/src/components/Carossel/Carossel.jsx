import React, { useState } from 'react';
import './Carossel.css';  // Estilos específicos para o carrossel

const images = [
];

const Carossel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel-container">
      <button className="prev" onClick={goToPrevious}>
        ‹
      </button>
      <img src={images[currentIndex]} alt="Carrossel" className="carousel-image" />
      <button className="next" onClick={goToNext}>
        ›
      </button>
    </div>
  );
};

export default Carossel;
