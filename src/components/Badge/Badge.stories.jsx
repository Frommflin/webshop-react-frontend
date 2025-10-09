import Badge from "./Badge.atom";

export default {
  title: "Components/Badge",
  component: Badge,
};

export const Default = {
  args: {
    text: "-5%",
  },
};

export const NewItem = {
  args: {
    text: "New",
    variant: "new",
  },
};

export const LargeSoldOut = {
  args: {
    text: "Sold out",
    variant: ["sold-out", "large"],
  },
};
