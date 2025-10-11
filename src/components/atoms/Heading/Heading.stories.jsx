import Heading from "./Heading.atom";

export default {
  title: "Components/Atoms/Heading",
  component: Heading,
};

export const Default = {};

export const Heading1 = {
  args: {
    type: "h1",
    text: "This is a H1",
  },
};

export const Heading2 = {
  args: {
    type: "h2",
    text: "This is a H2",
  },
};

export const Heading3 = {
  args: {
    type: "h3",
    text: "This is a H3",
  },
};

export const Heading4 = {
  args: {
    type: "h4",
    text: "This is a H4",
  },
};

export const Heading5 = {
  args: {
    type: "h5",
    text: "This is a H5",
  },
};

export const Heading6 = {
  args: {
    type: "h6",
    text: "This is a H6",
  },
};

export const Heading1WithStyling = {
  args: {
    type: "h1",
    text: "This is a H1 with styling prop",
    styling: {
      color: "#74c",
      backgroundColor: "#000",
      width: "fit-content",
      padding: "10px 20px",
    },
  },
};
