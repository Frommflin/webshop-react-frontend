import React from "react";
import { NavLink } from "react-router-dom";

const Link = ({ external = false, label, path }) => {
  switch (external) {
    case "true":
      return (
        <a href={path} target="_blank">
          {label}
        </a>
      );
    default:
      return <NavLink to={path}>{label}</NavLink>;
  }
};

export default Link;
