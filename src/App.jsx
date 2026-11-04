import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Products from './components/Products/Products';
import Quiz from './components/Quiz/Quiz';
import Reviews from './components/Reviews/Reviews';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import CartDrawer from './components/Cart/CartDrawer';
import QuickViewModal from './components/Modal/QuickViewModal';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';
import { PRODUCTS } from './data/perfumes';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="app-container">
      {/* Sticky Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Brand Story Section */}
        <About />

        {/* Signature Products Collection */}
        <Products
          products={PRODUCTS}
          onQuickView={(product) => setSelectedProduct(product)}
        />

        {/* Interactive Scent Finder Quiz */}
        <Quiz />

        {/* Customer Reviews Testimonials Carousel */}
        <Reviews />

        {/* Common Questions Accordion */}
        <FAQ />

        {/* Contact & WhatsApp Concierge */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Interactive Elements */}
      <FloatingWhatsApp />
      <CartDrawer />

      {/* Quick View Product Details Modal */}
      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

export default App;
