import React from 'react';
import { useCart } from '../../context/CartContext';
import { WHATSAPP_NUMBER } from '../../data/perfumes';

const QuickViewModal = ({ product, onClose }) => {
  const { addToCart } = useCart();

  if (!product) return null;

  const directBuyMsg = encodeURIComponent(
    `Assalam-o-Alaikum Glory Haven, I would like to inquire about purchasing *${product.name}* (${
      product.price
    }${product.savings ? ` - ${product.savings}` : ''}). Kindly guide me with the ordering and delivery details.`
  );

  const handleAddAndClose = () => {
    addToCart(product);
    onClose();
  };

  return (
    <div
      className="modal-overlay active"
      id="quickViewOverlay"
      onClick={onClose}
    >
      <div
        className="quickview-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="close-modal"
          onClick={onClose}
        >
          &times;
        </button>

        <img
          src={product.imgSrc}
          alt="Perfume"
          className="modal-img"
          id="modalImg"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80';
          }}
        />

        <div className="modal-info">
          <div className="cat" id="modalCategory">{product.category}</div>
          <h2 id="modalTitle">{product.name}</h2>

          <div className="price" id="modalPrice">
            {product.originalPrice && (
              <span className="original-price">{product.originalPrice}</span>
            )}{' '}
            {product.price}{' '}
            {product.savings && (
              <span className="savings-tag">({product.savings})</span>
            )}
          </div>

          <div className="notes-box">
            <div
              style={{
                marginBottom: '10px',
                lineHeight: 1.4,
                color: '#ddd',
                fontStyle: 'italic'
              }}
              id="modalDescription"
            >
              {product.details?.description}
            </div>
            <div>
              <strong>Top Notes:</strong>{' '}
              <span id="modalTopNotes">{product.details?.top}</span>
            </div>
            <div>
              <strong>Heart Notes:</strong>{' '}
              <span id="modalHeartNotes">{product.details?.heart}</span>
            </div>
            <div>
              <strong>Base Notes:</strong>{' '}
              <span id="modalBaseNotes">{product.details?.base}</span>
            </div>
            <div>
              <strong>Longevity &amp; Sillage:</strong>{' '}
              <span id="modalPerformance">{product.details?.performance}</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              type="button"
              className="btn"
              style={{ flex: 1 }}
              id="modalAddCartBtn"
              onClick={handleAddAndClose}
            >
              <i className="fas fa-shopping-bag"></i> Add to Cart
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${directBuyMsg}`}
              id="modalDirectBuy"
              target="_blank"
              rel="noreferrer"
              className="btn"
              style={{ flex: 1 }}
            >
              <i className="fab fa-whatsapp"></i> Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
