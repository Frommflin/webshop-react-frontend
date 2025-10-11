import React from "react";
import styles from "./Button.module.css";

const Button = ({ label, onClick, icon, styling = {} }) => {
  return (
    <button className={styles.btn} style={styling} onClick={onClick}>
      {icon && <span>{icon}</span>}
      {label && <span>{label}</span>}
    </button>
  );
};

export default Button;
