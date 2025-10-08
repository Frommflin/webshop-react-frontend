import React from "react";
import Paragraph from "./Paragraph.atom";

export default {
  title: "Components/Paragraph",
  component: Paragraph,
  argTypes: {
    text: { control: "text" },
    className: { 
      control: { type: "select" },
      options: ["", "small", "large", "highlight"]
    },
    styling: { control: "object" },
  },
};

const Template = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "This is a standard paragraph component. It uses a clean font size and spacing for readability.",
};

export const Small = Template.bind({});
Small.args = {
  text: "This paragraph uses the 'small' class.",
  className: "small",
};

export const Large = Template.bind({});
Large.args = {
  text: "This paragraph uses the 'large' class.",
  className: "large",
};

export const Highlight = Template.bind({});
Highlight.args = {
  text: "This is a highlighted paragraph — great for drawing attention to important information.",
  className: "highlight",
};
