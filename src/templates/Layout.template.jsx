import Footer from "@/components/molecules/Footer/Footer.molecule";
import Header from "@/components/organisms/Header/Header.organism";
import React from "react";
import styles from "./Layout.module.css";
import CookieBanner from "@/components/molecules/CookieBanner/CookieBanner.molecule";
import CookieToggler from "@/components/organisms/CookieToggler/CookieToggler.organism";

const Layout = ({ children }) => {
  const pages = [
    { pageName: "Hem", path: "/" },
    { pageName: "Registrera konto", path: "/register" }, //Hide when logged in
    { pageName: "Logga in", path: "/signin" }, //Hide when logged in
    { pageName: "Mitt konto", path: "/account" }, // Hide when not logged in
    { pageName: "Kundvagn", path: "/cart" },
    { pageName: "Kassa", path: "/checkout" }, //Remove when cart is built and contains button to navigate to path
    { pageName: "Produkter", path: "/products" },
    { pageName: "Produkt information", path: "/product/1" }, //Remove when product list is built and each product navigates to this page chen clicked
  ];
  const handleCookieAccept = () => {
    console.log("Cookies has been accepted");
    // TODO: Send consent to auth backend
  };
  const handleCookieRemoval = () => {
    console.log("Cookie consent has been removed");
    // TODO: Remove cookie consent
  };
  const handleDataRequest = () => {
    console.log("Stored userdata has been requested");
    // TODO: Retrieve data about user in readable format
  };
  const handleDataRemoval = () => {
    console.log("Stored userdata has been removed");
    // TODO: Remove stored data related to user
  };
  return (
    <div className={styles.page}>
      <Header title="WebbShop!" links={pages} />
      <div className={styles.main}>{children}</div>
      <CookieBanner
        onClick={handleCookieAccept}
        styling={{ marginBottom: "4rem" }}
      />
      <CookieToggler
        onAccept={handleCookieAccept}
        onRemoveCookies={handleCookieRemoval}
        onDataAccessRequest={handleDataRequest}
        onRemoveUserData={handleDataRemoval}
      />
      <Footer />
    </div>
  );
};

export default Layout;
