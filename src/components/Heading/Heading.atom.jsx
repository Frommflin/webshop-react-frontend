import React from "react";

const Heading = ({ type, text, styles = {} }) => {
  switch (type) {
    case "h1":
      return <h1 style={styles}>{text}</h1>;
    case "h2":
      return <h2 style={styles}>{text}</h2>;
    case "h3":
      return <h3 style={styles}>{text}</h3>;
    case "h4":
      return <h4 style={styles}>{text}</h4>;
    case "h5":
      return <h5 style={styles}>{text}</h5>;
    case "h6":
      return <h6 style={styles}>{text}</h6>;
    default:
      return (
        <p>Heading type is missing, expecting prop 'type', accepting h1-h6</p>
      );
  }
};

export default Heading;
