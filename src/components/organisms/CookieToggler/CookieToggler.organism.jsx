import Button from "@/components/atoms/Button/Button.atom";
import CookieConsents from "@/components/molecules/CookieConsents/CookieConsents.molecule";
import React, { useState } from "react";
import { MdOutlineCookie } from "react-icons/md";
import styles from "./CookieToggler.module.css";

const CookieToggler = ({
  onAccept,
  onRemoveCookies,
  onRemoveUserData,
  onDataAccessRequest,
}) => {
  const [showButtons, setShowButtons] = useState(false);
  const handleToggle = () => setShowButtons((prev) => !prev);

  return (
    <div className={styles.cookieToggle}>
      {showButtons && (
        <CookieConsents
          onAccept={onAccept}
          onDataAccessRequest={onDataAccessRequest}
          onRemoveCookies={onRemoveCookies}
          onRemoveUserData={onRemoveUserData}
        />
      )}
      <Button
        icon={<MdOutlineCookie />}
        onClick={handleToggle}
        styling={{
          width: "4.5rem",
          "--btn-height": "3rem",
        }}
      />
    </div>
  );
};

export default CookieToggler;
