import React from 'react';

const Hero = () => {
  return (
    <section id="home">
      <img
        className="hero-bg"
        src="/Data/Hero.jpg"
        alt="Glory Haven Premium Perfumes Hero Background"
      />
      <div style={{ zIndex: 1 }} className="hero-animate">
        <h1>Glory Haven</h1>
        <p>
          Discover the essence of luxury. Handcrafted fragrances that leave an
          unforgettable golden trail.
        </p>
        <a href="#products" className="btn">
          Explore Collection
        </a>
      </div>
    </section>
  );
};

export default Hero;
