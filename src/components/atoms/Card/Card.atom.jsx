import React from "react";
import styles from "./Card.module.css";

const Card = ({ children, classnames, styling = {} }) => {
  return (
    <div className={`${styles.card} ${classnames}`} style={styling}>
      {children}
    </div>
  );
};

export default Card;
