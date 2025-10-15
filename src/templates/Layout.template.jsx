import Footer from "@/components/molecules/Footer/Footer.molecule";
import Header from "@/components/organisms/Header/Header.organism";
import React from "react";
import styles from "./Layout.module.css";

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
  return (
    <div className={styles.page}>
      <Header title="WebbShop!" links={pages} />
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
