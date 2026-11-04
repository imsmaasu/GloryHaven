import React, { useState } from 'react';
import { QUIZ_DATABASE, WHATSAPP_NUMBER } from '../../data/perfumes';

const Quiz = () => {
  const [step, setStep] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleSelectAnswer = (qNumber, choice) => {
    const updated = { ...selectedAnswers, [qNumber]: choice };
    setSelectedAnswers(updated);
    if (qNumber === 1) {
      setStep(2);
    } else if (qNumber === 2) {
      setStep(3);
    } else if (qNumber === 3) {
      setStep(4);
    }
  };

  const restartQuiz = () => {
    setSelectedAnswers({});
    setStep(1);
  };

  const matchedKey = selectedAnswers[2] || 'oudh';
  const match = QUIZ_DATABASE[matchedKey] || QUIZ_DATABASE.oudh;

  const buyMatchMsg = encodeURIComponent(
    `Assalam-o-Alaikum Glory Haven, I completed your Scent Finder Quiz and matched with *${match.name}* (${match.price})! I would love to place an order for this perfume.`
  );

  const progressPercentage = step === 1 ? '33%' : step === 2 ? '66%' : '100%';

  return (
    <section id="quiz" className="reveal active">
      <h2 className="section-title">Find Your Signature Scent</h2>
      <p style={{ color: '#aaa', marginBottom: '20px' }}>
        Answer 3 quick questions to discover your ideal fragrance match.
      </p>

      <div className="quiz-card">
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            id="progressBar"
            style={{ width: progressPercentage }}
          ></div>
        </div>

        {/* Question 1 */}
        {step === 1 && (
          <div className="question-card active" id="q1">
            <h3 className="question-text">
              1. Which Pakistani occasion or routine are you shopping for?
            </h3>
            <div className="options-grid">
              <button
                type="button"
                className="option-btn"
                onClick={() => handleSelectAnswer(1, 'royal')}
              >
                <i className="fas fa-gem"></i>
                <span>Weddings, Barat &amp; Dholkis</span>
              </button>
              <button
                type="button"
                className="option-btn"
                onClick={() => handleSelectAnswer(1, 'fresh')}
              >
                <i className="fas fa-mosque"></i>
                <span>Jummah Prayers, Eid &amp; Daily Wear</span>
              </button>
              <button
                type="button"
                className="option-btn"
                onClick={() => handleSelectAnswer(1, 'romantic')}
              >
                <i className="fas fa-glass-cheers"></i>
                <span>Family Dawats &amp; Evening Gatherings</span>
              </button>
            </div>
          </div>
        )}

        {/* Question 2 */}
        {step === 2 && (
          <div className="question-card active" id="q2">
            <h3 className="question-text">
              2. Which traditional fragrance profile appeals to your taste?
            </h3>
            <div className="options-grid">
              <button
                type="button"
                className="option-btn"
                onClick={() => handleSelectAnswer(2, 'oudh')}
              >
                <i className="fas fa-flask"></i>
                <span>Rich Pure Oudh, Amber &amp; Attar Notes</span>
              </button>
              <button
                type="button"
                className="option-btn"
                onClick={() => handleSelectAnswer(2, 'citrus')}
              >
                <i className="fas fa-sun"></i>
                <span>Cooling Citrus &amp; Summer Heat Resistors</span>
              </button>
              <button
                type="button"
                className="option-btn"
                onClick={() => handleSelectAnswer(2, 'floral')}
              >
                <i className="fas fa-spa"></i>
                <span>Motiya (Jasmine), Rose &amp; Gulab Notes</span>
              </button>
            </div>
          </div>
        )}

        {/* Question 3 */}
        {step === 3 && (
          <div className="question-card active" id="q3">
            <h3 className="question-text">
              3. What performance feature is most important to you?
            </h3>
            <div className="options-grid">
              <button
                type="button"
                className="option-btn"
                onClick={() => handleSelectAnswer(3, 'mysterious')}
              >
                <i className="fas fa-clock"></i>
                <span>24-Hour Projection &amp; Royal Trail</span>
              </button>
              <button
                type="button"
                className="option-btn"
                onClick={() => handleSelectAnswer(3, 'vibrant')}
              >
                <i className="fas fa-wind"></i>
                <span>Sweat-Resistant Intense Freshness</span>
              </button>
              <button
                type="button"
                className="option-btn"
                onClick={() => handleSelectAnswer(3, 'elegant')}
              >
                <i className="fas fa-heart"></i>
                <span>Subtle, Elegant &amp; Non-Overpowering</span>
              </button>
            </div>
          </div>
        )}

        {/* Result Card */}
        {step === 4 && (
          <div className="result-card active" id="resultCard">
            <h3 className="result-name" id="resultName">{match.name}</h3>
            <img
              src={match.img}
              alt="Perfume Match"
              className="result-img"
              id="resultImg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80';
              }}
            />
            <p className="result-desc" id="resultDesc">{match.desc}</p>
            <div
              style={{
                display: 'flex',
                gap: '15px',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${buyMatchMsg}`}
                id="buyMatchBtn"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                <i className="fab fa-whatsapp"></i> Order This Match
              </a>
              <button type="button" className="btn" onClick={restartQuiz}>
                <i className="fas fa-redo"></i> Retake Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Quiz;
