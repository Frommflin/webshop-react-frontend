import React from "react";
import Label from "./Label";

export default {
  title: "Components/Label",
  component: Label,
  argTypes: {
    text: { control: "text" },
    htmlFor: { control: "text" },
    type: { 
      control: { type: "select" },
      options: ["text", "email", "tel", "password", "address", "custom"]
    },
    className: { control: "text" },
  },
};

const Template = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Full Name",
  htmlFor: "name",
};

export const Email = Template.bind({});
Email.args = {
  type: "email",
  htmlFor: "email",
};

export const Telephone = Template.bind({});
Telephone.args = {
  type: "tel",
  htmlFor: "phone",
};

export const Required = Template.bind({});
Required.args = {
  text: "Email",
  htmlFor: "email",
  className: "required",
};
