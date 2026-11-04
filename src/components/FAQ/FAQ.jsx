import React, { useState } from 'react';
import { FAQS } from '../../data/perfumes';

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleIndex = (index) => {
    setOpenIndexes(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="faq" className="reveal active">
      <h2 className="section-title">Common Questions</h2>
      <div style={{ width: '100%' }}>
        {FAQS.map((item, index) => {
          const isOpen = !!openIndexes[index];
          return (
            <div className="faq-item" key={index}>
              <button
                type="button"
                className={`faq-btn ${isOpen ? 'active' : ''}`}
                onClick={() => toggleIndex(index)}
              >
                {item.question} <span>{isOpen ? '-' : '+'}</span>
              </button>
              <div className="faq-answer">{item.answer}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
