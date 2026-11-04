import React, { createContext, useContext, useState, useEffect } from 'react';
import { WHATSAPP_NUMBER } from '../data/perfumes';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('glory_haven_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('glory_haven_cart', JSON.stringify(cart));
    } catch {
      // ignore storage errors
    }
  }, [cart]);

  const toggleCartDrawer = () => {
    setIsDrawerOpen(prev => !prev);
  };

  const openCartDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeCartDrawer = () => {
    setIsDrawerOpen(false);
  };

  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [
        ...prevCart,
        {
          id: product.id,
          name: product.name,
          category: product.category,
          price: product.price,
          priceNum: product.priceNum,
          imgSrc: product.imgSrc,
          qty: 1
        }
      ];
    });
    setIsDrawerOpen(true);
  };

  const updateCartQty = (productId, delta) => {
    setCart(prevCart => {
      return prevCart
        .map(item => {
          if (item.id === productId) {
            return { ...item, qty: item.qty + delta };
          }
          return item;
        })
        .filter(item => item.qty > 0);
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.priceNum * item.qty, 0);

  const checkoutWhatsApp = () => {
    if (cart.length === 0) {
      alert("Your cart is empty! Please add some perfumes first.");
      return;
    }
    const summaryLines = cart.map(
      item => `• ${item.name} (x${item.qty}) - Rs. ${item.priceNum * item.qty}`
    );
    const messageStr = `*✨ GLORY HAVEN LUXURY PERFUMES ✨*\n*Official Order Request*\n\nAssalam-o-Alaikum,\nI would like to place an order for the following items:\n\n${summaryLines.join(
      '\n'
    )}\n\n*💵 Total Amount: Rs. ${totalPrice}*\n\nPlease confirm availability, payment methods, and estimated delivery schedule.\n\nThank you!`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageStr)}`, '_blank');
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isDrawerOpen,
        toggleCartDrawer,
        openCartDrawer,
        closeCartDrawer,
        addToCart,
        updateCartQty,
        removeFromCart,
        totalCount,
        totalPrice,
        checkoutWhatsApp
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

