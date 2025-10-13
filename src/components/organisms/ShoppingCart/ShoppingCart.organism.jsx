import React from "react";
import styles from "./ShoppingCart.module.css";
import Button from "../../atoms/Button/Button.atom";
import Paragraph from "../../atoms/Paragraph/Paragraph.atom";
import PriceText from "../../atoms/PriceText/PriceText.atom";
import Badge from "../../atoms/Badge/Badge.atom";
import CartItem from "../../molecules/CartItem/CartItem.molecule";

const ShoppingCart = ({
  cartItems = [],
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
}) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <Paragraph text="Your cart is empty." />;
  }

  return (
    <div className={styles.cartContainer}>
      <div className={styles.header}>
        <h2>User Cart</h2>
        <Badge text={`${cartItems.length}`} variant="info" />
      </div>

      <ul className={styles.cartItems}>
        {cartItems.map((item) => (
          <CartItem
            key={item.productId}
            {...item}
            onIncrement={incrementQuantity}
            onDecrement={decrementQuantity}
            onRemove={removeFromCart}
          />
        ))}
      </ul>

      <div className={styles.orderSection}>
        <Paragraph text="Total:" />
        <PriceText amount={total} />
        <Button label="Clear Cart" onClick={clearCart} />
      </div>
    </div>
  );
};

export default ShoppingCart;
