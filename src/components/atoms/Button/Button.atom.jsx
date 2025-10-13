import React from "react";
import styles from "./Button.module.css";

const Button = ({ label, onClick, icon, isDisabled = false, styling = {} }) => {
  const classnames = isDisabled ? styles.disabled : styles.active;

  return (
    <button
      className={`${styles.btn} ${classnames}`}
      style={styling}
      onClick={onClick}
      disabled={isDisabled}
    >
      {icon && <span>{icon}</span>}
      {label && <span>{label}</span>}
    </button>
  );
};

export default Button;
