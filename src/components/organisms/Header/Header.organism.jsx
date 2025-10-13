import Heading from "@/components/atoms/Heading/Heading.atom";
import Link from "@/components/atoms/Link/Link.atom";
import React from "react";
import styles from "./Header.module.css";

const Header = ({ title, links }) => {
  const navlinks = Array.isArray(links)
    ? links.map((link) => (
        <Link key={link.path} label={link.pageName} path={link.path} />
      ))
    : [];

  return (
    <header className={styles.header}>
      <Heading type="h1" text={title} />
      <nav>{navlinks}</nav>
    </header>
  );
};

export default Header;
