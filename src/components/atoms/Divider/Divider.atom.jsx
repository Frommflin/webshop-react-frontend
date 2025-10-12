import React from "react";
import styles from "./Divider.module.css";

const Divider = ({ direction = "horizontal", styling = {} }) => {
  const dividerClass = direction == "vertical" ? styles.vertical : "";
  return <hr className={dividerClass} style={styling} />;
};

export default Divider;
