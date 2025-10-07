import React from "react";
import styles from "./Label.module.css";

const Label = ({ text, htmlFor, className = "", type }) => {
  let labelText = text;

  if (!labelText && type) {
    switch (type) {
      case "email":
        labelText = "Email";
        break;
      case "tel":
      case "telephone":
        labelText = "Telephone";
        break;
      default:
        labelText = "Label";
    }
  }

  return (
    <label htmlFor={htmlFor} className={`${styles.label} ${className}`}>
      {labelText}
    </label>
  );
};

export default Label;
