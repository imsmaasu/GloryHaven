import React from 'react';
import { useCart } from '../../context/CartContext';

const CartDrawer = () => {
  const {
    cart,
    isDrawerOpen,
    toggleCartDrawer,
    updateCartQty,
    removeFromCart,
    totalCount,
    totalPrice,
    checkoutWhatsApp
  } = useCart();

  return (
    <>
      {/* Floating Trigger Button */}
      <div
        className="cart-trigger"
        onClick={toggleCartDrawer}
      >
        <i className="fas fa-shopping-bag"></i>
        <div className="cart-badge" id="cartBadge">{totalCount}</div>
      </div>

      {/* Side Cart Drawer Overlay */}
      <div
        className={`cart-drawer-overlay ${isDrawerOpen ? 'active' : ''}`}
        id="cartOverlay"
        onClick={toggleCartDrawer}
      ></div>

      {/* Side Cart Drawer */}
      <div className={`cart-drawer ${isDrawerOpen ? 'active' : ''}`} id="cartDrawer">
        <div className="cart-header">
          <h3>Your Shopping Cart</h3>
          <button
            type="button"
            className="close-cart"
            onClick={toggleCartDrawer}
          >
            &times;
          </button>
        </div>

        <div className="cart-body" id="cartBody">
          {cart.length === 0 ? (
            <p style={{ color: '#888', textAlign: 'center', marginTop: '40px' }}>
              Your cart is currently empty.
            </p>
          ) : (
            cart.map(item => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="cart-item-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80';
                  }}
                />
                <div className="cart-item-details">
                  <div className="cart-item-title">{item.name}</div>
                  <div className="cart-item-price">{item.price}</div>
                  <div className="cart-item-qty">
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => updateCartQty(item.id, -1)}
                    >
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => updateCartQty(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  className="remove-item"
                  onClick={() => removeFromCart(item.id)}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <span>Total Amount:</span>
            <span id="cartTotal">Rs. {totalPrice}</span>
          </div>
          <button
            type="button"
            className="btn"
            style={{ width: '100%', textAlign: 'center' }}
            onClick={checkoutWhatsApp}
          >
            <i className="fab fa-whatsapp"></i> Checkout via WhatsApp
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
