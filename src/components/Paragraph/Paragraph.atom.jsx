import React from "react";
import styles from "./Paragraph.module.css";

const Paragraph = ({ text, className = "", styling = {} }) => {
  return (
    <p className={`${styles.paragraph} ${className}`} style={styling}>
      {text}
    </p>
  );
};

export default Paragraph;
