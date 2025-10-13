import React, { useState } from "react";
import ShoppingCart from "./ShoppingCart.organism";

export default {
  title: "Components/Organisms/ShoppingCart",
  component: ShoppingCart,
};

export const Default = () => {
  
  const [cartItems, setCartItems] = useState([
    { productId: 1, name: "Item-1", price: 199, quantity: 1 },
    { productId: 2, name: "Item-2", price: 499, quantity: 2 },
  ]);

  const incrementQuantity = (productId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.productId === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.productId !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <ShoppingCart
      cartItems={cartItems}
      incrementQuantity={incrementQuantity}
      decrementQuantity={decrementQuantity}
      removeFromCart={removeFromCart}
      clearCart={clearCart}
    />
  );
};

export const EmptyCart = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <ShoppingCart
      cartItems={cartItems}
      incrementQuantity={() => {}}
      decrementQuantity={() => {}}
      removeFromCart={() => {}}
      clearCart={() => setCartItems([])}
    />
  );
};
