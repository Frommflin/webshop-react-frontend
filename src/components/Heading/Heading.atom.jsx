import React from "react";
import styles from "./Heading.module.css";

const Heading = ({ type, text, styling = {} }) => {
  switch (type) {
    case "h1":
      return <h1 style={styling}>{text}</h1>;
    case "h2":
      return <h2 style={styling}>{text}</h2>;
    case "h3":
      return <h3 style={styling}>{text}</h3>;
    case "h4":
      return <h4 style={styling}>{text}</h4>;
    case "h5":
      return <h5 style={styling}>{text}</h5>;
    case "h6":
      return <h6 style={styling}>{text}</h6>;
    default:
      return (
        <p>Heading type is missing, expecting prop 'type', accepting h1-h6</p>
      );
  }
};

export default Heading;
