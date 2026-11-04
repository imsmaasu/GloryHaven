import React, { useState, useEffect } from 'react';
import { REVIEWS } from '../../data/perfumes';

const Reviews = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx(prev => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextReview = () => {
    setCurrentIdx(prev => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentIdx(prev => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section id="reviews" className="reveal active">
      <h2 className="section-title">What Our Clients Say</h2>
      <p style={{ color: '#aaa', marginBottom: '20px' }}>
        Real experiences from fragrance lovers across the country.
      </p>

      <div className="reviews-wrapper">
        {REVIEWS.map((review, idx) => (
          <div
            key={idx}
            className={`review-card ${idx === currentIdx ? 'active' : ''}`}
          >
            <div className="stars">
              {Array.from({ length: review.stars }).map((_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
            </div>
            <p className="review-text">&ldquo;{review.text}&rdquo;</p>
            <div className="customer-info">
              <img
                src={review.avatar}
                alt={review.name}
                className="customer-avatar"
              />
              <div>
                <div className="customer-name">{review.name}</div>
                <div className="customer-tag">{review.tag}</div>
              </div>
            </div>
          </div>
        ))}

        <div className="carousel-nav">
          <button
            type="button"
            className="nav-btn"
            onClick={prevReview}
            aria-label="Previous Review"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            type="button"
            className="nav-btn"
            onClick={nextReview}
            aria-label="Next Review"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
