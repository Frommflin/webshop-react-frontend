import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Link.module.css";

const Link = ({ external = false, label, path, classes, styling = {} }) => {
  switch (external) {
    case "true":
      return (
        <a
          className={`${styles.base} ${classes}`}
          style={styling}
          href={path}
          target="_blank"
        >
          {label}
        </a>
      );
    default:
      return (
        <NavLink className={styles.base} style={styling} to={path}>
          {label}
        </NavLink>
      );
  }
};

export default Link;
