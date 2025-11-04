import React from "react";
import styles from "./CartItem.module.css";
import Button from "@/components/atoms/Button/Button.atom";
import PriceText from "@/components/atoms/PriceText/PriceText.atom";

const CartItem = ({
  productId,
  name,
  price,
  quantity,
  onIncrement,
  onDecrement,
  onRemove,
}) => {
  return (
    <li className={styles.cartItem}>
      <span className={styles.itemName}>{name}</span>

      <div className={styles.quantity}>
        <Button label="−" onClick={() => onDecrement(productId)} />
        <span className={styles.quantityValue}>{quantity}</span>
        <Button label="+" onClick={() => onIncrement(productId)} />
      </div>

      <PriceText amount={price} />

      <Button
        label="Remove"
        styling={{ backgroundColor: "#61170eff", color: "#fff" }}
        onClick={() => onRemove(productId)}
      />
    </li>
  );
};

export default CartItem;
