import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick'; // Import the Slider component
import Header from './Header';
import NavigationBar from './NavigationBar';

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [searchActive, setSearchActive] = useState(false);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  const toggleSearch = () => {
    setSearchActive((prev) => !prev);
    if (!searchActive) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 500);
    }
  };

  // Click outside to close the search bar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Settings for the slider
  const settings = {
    dots: false, // Using custom dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (_, next) => setActiveSlide(next),
    fade: true,
  };

  // Placeholder images for the slider
  const slides = [
    'https://frensville.co/cdn/shop/files/book4-cover.jpg',
    'https://frensville.co/cdn/shop/files/book5-cover.jpg',
    'https://frensville.co/cdn/shop/files/book2-cover.jpg',
    'https://frensville.co/cdn/shop/files/book3-cover.jpg',
  ];

  return (
    <div className="home-container">
      <Header />
      <div className="top-nav-bar" ref={searchRef}>
        {!searchActive && (
          <>
            <button className="top-nav-button">Read</button>
            <button className="top-nav-button">Watch</button>
            <button className="top-nav-button">Play</button>
            <button className="top-nav-button">More</button>
          </>
        )}
        <button className="top-nav-button search-button" onClick={toggleSearch}>
          <i className="fas fa-search"></i>
        </button>
        <input
          ref={inputRef}
          type="text"
          className={`search-bar ${searchActive ? 'active' : ''}`}
          placeholder="Search..."
        />
      </div>
      <div className="book-showcase">
        <h2>Just added!</h2>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <img src={slide} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
        <ul className="pagination-dots">
          {slides.map((_, index) => (
            <li
              key={index}
              className={`pagination-dot ${index === activeSlide ? 'active' : ''}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </ul>
      </div>
      <NavigationBar />
    </div>
  );
};

export default Home;
