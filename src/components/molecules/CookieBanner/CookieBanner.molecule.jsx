import Button from "@/components/atoms/Button/Button.atom";
import Paragraph from "@/components/atoms/Paragraph/Paragraph.atom";
import React, { useState } from "react";
import styles from "./CookieBanner.module.css";

const CookieBanner = ({ onClick, styling = {} }) => {
  const [visible, setVisible] = useState(true);

  const handleAccept = () => {
    setVisible(false);
    onClick();
  };

  if (visible)
    return (
      <div className={styles.banner} style={styling}>
        <Paragraph text="🍪 Den här webbsidan använder kakor!" />
        <Button label="Godkänn" onClick={handleAccept} />
      </div>
    );
};

export default CookieBanner;
