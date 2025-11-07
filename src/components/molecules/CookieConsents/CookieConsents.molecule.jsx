import Button from "@/components/atoms/Button/Button.atom";
import React from "react";
import styles from "./CookieConsents.module.css";

const CookieConsents = ({
  onAccept,
  onRemoveCookies,
  onRemoveUserData,
  onDataAccessRequest,
  classnames,
  inlineStyle = {},
}) => {
  return (
    <div
      className={`${styles.cookieSettings} ${classnames}`}
      style={inlineStyle}
    >
      <Button label="Accept cookies" onClick={onAccept} />
      <Button label="Remove consent" onClick={onRemoveCookies} />
      <Button label="Retrieve stored data" onClick={onDataAccessRequest} />
      <Button label="Remove my data" onClick={onRemoveUserData} />
    </div>
  );
};

export default CookieConsents;
