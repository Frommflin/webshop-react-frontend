import React from "react";
import styles from "./Card.module.css";

const Card = ({ children, styling = {} }) => {
  return (
    <div className={styles.card} style={styling}>
      {children}
    </div>
  );
};

export default Card;
