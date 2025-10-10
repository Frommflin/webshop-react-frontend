import React from "react";
import styles from "./Label.module.css";

const Label = ({ text, htmlFor, type, styling = {} }) => {
 
  const typeTextMap = {
    email: "Email",
    tel: "Telephone",
    password: "Password",
    address: "Address",
  };

  const labelText = text || typeTextMap[type] || "Label";

  return (
    <label htmlFor={htmlFor} className={styles.label} style={styling}>
      {labelText}
    </label>
  );
};

export default Label;
