import React from "react";
import styles from "./PriceText.module.css";

const PriceText = ({ amount, currency = "SEK", styling = {} }) => {

  const formattedPrice = new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  }).format(amount);

  return (
    <span className={styles.priceText} style={styling}>
      {formattedPrice}
    </span>
  );
};

export default PriceText;
