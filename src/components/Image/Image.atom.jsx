import React from "react";
import styles from "./Image.module.css";

const Image = ({ path, alt, styling }) => {
  return <img className={styles.img} src={path} alt={alt} style={styling} />;
};

export default Image;
