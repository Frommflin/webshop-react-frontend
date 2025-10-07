import React from "react";
import styles from "./Button.module.css";

const Button = ({ label, onClick, styling = {} }) => {
  return (
    <button className={styles.btn} style={styling} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
