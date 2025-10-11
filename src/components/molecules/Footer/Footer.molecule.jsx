import React from "react";
import styles from "./Footer.module.css";

const Footer = ({ styling = {} }) => {
  return (
    <div className={styles.footer} style={styling}>
      Webshop footer
    </div>
  );
};

export default Footer;
