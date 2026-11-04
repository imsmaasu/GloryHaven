import React from 'react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const isFeatured = !!product.badge;

  return (
    <div className={`product-card ${isFeatured ? 'featured-deal' : ''}`}>
      {product.badge && <div className="discount-badge">{product.badge}</div>}

      <img
        src={product.imgSrc}
        alt={product.name}
        className="product-img"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80';
        }}
      />

      <div className="product-category">{product.category}</div>
      <h3 className="product-title">{product.name}</h3>

      <div className="product-price">
        {product.originalPrice && (
          <span className="original-price">{product.originalPrice}</span>
        )}
        {product.price}{' '}
        {product.savings && (
          <span className="savings-tag">({product.savings})</span>
        )}
      </div>

      <div
        style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: 'auto'
        }}
      >
        <button
          type="button"
          onClick={() => onQuickView(product)}
          className="btn"
          style={{ padding: '8px 12px', fontSize: '13px' }}
        >
          <i className="fas fa-eye"></i> Quick View
        </button>
        <button
          type="button"
          onClick={() => addToCart(product)}
          className="btn"
          style={{
            padding: '8px 12px',
            fontSize: '13px',
            background: 'var(--gold)',
            color: '#000'
          }}
        >
          <i className="fas fa-cart-plus"></i> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

