import React from "react";
import styles from "./Paragraph.module.css";

const Paragraph = ({ text, styling = {} }) => {
  return (
    <p className={styles.paragraph} style={styling}>
      {text}
    </p>
  );
};

export default Paragraph;
