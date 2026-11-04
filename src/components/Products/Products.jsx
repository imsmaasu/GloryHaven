import React from 'react';
import ProductCard from './ProductCard';

const Products = ({ products, onQuickView }) => {
  return (
    <section id="products" className="reveal active">
      <h2 className="section-title">Signature Collection</h2>
      <p style={{ color: '#aaa', marginBottom: '20px' }}>
        Click &apos;Buy Now&apos; to order directly via WhatsApp.
      </p>
      <div className="product-grid" id="productGrid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={onQuickView}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
