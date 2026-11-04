import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'quiz', 'reviews', 'faq', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav>
      <a href="#home" className="brand-logo" onClick={closeMenu}>
        <img src="/Data/logo.jpg" alt="Glory Haven Logo" className="brand-logo-img" />
        <span>Glory Haven</span>
      </a>

      <div
        className="menu-toggle"
        id="mobile-menu"
        onClick={() => setMobileMenuOpen(prev => !prev)}
      >
        &#9776;
      </div>

      <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} id="nav-links">
        <li>
          <a
            href="#home"
            className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#products"
            className={`nav-item ${activeSection === 'products' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="#quiz"
            className={`nav-item ${activeSection === 'quiz' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Scent Finder
          </a>
        </li>
        <li>
          <a
            href="#reviews"
            className={`nav-item ${activeSection === 'reviews' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Reviews
          </a>
        </li>
        <li>
          <a
            href="#faq"
            className={`nav-item ${activeSection === 'faq' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            FAQ
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
