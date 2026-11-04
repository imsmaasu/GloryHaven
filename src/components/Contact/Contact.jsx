import React from 'react';
import { WHATSAPP_NUMBER } from '../../data/perfumes';

const Contact = () => {
  const shareText = encodeURIComponent(
    `✨ *Discover Glory Haven Luxury Perfumes* ✨\nHandcrafted designer fragrances with an unforgettable golden trail. Check out their Signature Collection and exclusive 6 Glory Pack offer (Save Rs. 5,000)!\n\n📲 Connect directly on WhatsApp: https://wa.me/${WHATSAPP_NUMBER}`
  );

  const inquireText = encodeURIComponent(
    'Assalam-o-Alaikum Glory Haven, I would like to inquire about your luxury perfume collection and exclusive offers.'
  );

  return (
    <section id="contact" className="reveal active">
      <h2 className="section-title">Get in Touch</h2>
      <p style={{ marginBottom: '25px', maxWidth: '650px' }}>
        Have questions, need personalized fragrance styling, or want to place an
        order? Connect directly with our concierge on WhatsApp.
      </p>
      <div
        style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}
      >
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${inquireText}`}
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          <i className="fab fa-whatsapp"></i> Chat on WhatsApp (+92 334 2236693)
        </a>
        <a
          href={`https://wa.me/?text=${shareText}`}
          target="_blank"
          rel="noreferrer"
          className="btn"
          style={{ background: 'rgba(212, 175, 55, 0.1)' }}
        >
          <i className="fas fa-share-alt"></i> Share with Friends
        </a>
      </div>
    </section>
  );
};

export default Contact;
