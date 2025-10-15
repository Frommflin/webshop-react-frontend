import React from "react";
import styles from "./Footer.module.css";

const Footer = ({ classnames, styling = {} }) => {
  return (
    <div className={`${styles.footer} ${classnames}`} style={styling}>
      Webshop footer
    </div>
  );
};

export default Footer;
