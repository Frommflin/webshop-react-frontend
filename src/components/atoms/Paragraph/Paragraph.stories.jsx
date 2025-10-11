import Paragraph from "./Paragraph.atom";

export default {
  title: "Components/Atoms/Paragraph",
  component: Paragraph,
};

export const Default = {
  args: {
    text: "This is a default paragraph. It uses the base styling.",
  },
};

export const Small = {
  args: {
    text: "This paragraph uses the 'small' class for smaller text.",
    className: "small",
  },
};

export const Large = {
  args: {
    text: "This paragraph uses the 'large' class for bigger text.",
    className: "large",
  },
};

export const Highlight = {
  args: {
    text: "This paragraph uses the 'highlight' class to draw attention.",
    className: "highlight",
  },
};

export const WithInlineStyling = {
  args: {
    text: "This paragraph has custom inline styling with green text and padding.",
    styling: {
      color: "green",
      backgroundColor: "#f0f0f0",
      padding: "10px",
      borderRadius: "8px",
    },
  },
};
