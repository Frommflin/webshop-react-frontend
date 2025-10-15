import Card from "./Card.atom";

export default {
  title: "Components/Atoms/Card",
  component: Card,
};

export const Default = {};

export const WithContent = () => {
  const styleOverride = {
    backgroundColor: "#e6ffdb",
  };
  return (
    <Card styling={styleOverride}>
      <h1>This is a title</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta
        voluptatum pariatur, deserunt voluptatibus vel cumque accusamus culpa,
        ipsa et sequi quaerat ad facilis dolorem ea ut, repellendus architecto
        libero.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum
        sapiente earum pariatur? Explicabo, non voluptate?
      </p>
    </Card>
  );
};
