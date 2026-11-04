import React from 'react';
import { WHATSAPP_NUMBER } from '../../data/perfumes';

const FloatingWhatsApp = () => {
  const defaultText = encodeURIComponent(
    'Assalam-o-Alaikum Glory Haven, I am interested in your luxury perfumes.'
  );

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${defaultText}`}
      className="float-wa"
      target="_blank"
      rel="noreferrer"
      title="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default FloatingWhatsApp;
