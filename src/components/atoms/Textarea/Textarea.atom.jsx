import React from "react";
import styles from "./Textarea.module.css";

const Textarea = ({ name, text, placeholder, required, styling = {} }) => {
  return (
    <textarea
      name={name}
      id={name}
      placeholder={placeholder}
      required={required}
      className={styles.field}
      style={styling}
    >
      {text}
    </textarea>
  );
};

export default Textarea;
