import React from "react";
import PriceText from "./PriceText.atom";

export default {
  title: "Components/PriceText",
  component: PriceText,
  argTypes: {
    amount: { control: "number" },
    currency: { 
      control: { type: "select" },
      options: ["SEK", "EUR", "USD"]
    },
    styling: { control: "object" },
  },
};

const Template = (args) => <PriceText {...args} />;

export const Default = Template.bind({});
Default.args = {
  amount: 299,
  currency: "SEK",
};

export const Euro = Template.bind({});
Euro.args = {
  amount: 1299.5,
  currency: "EUR",
};

export const USD = Template.bind({});
USD.args = {
  amount: 89.99,
  currency: "USD",
};

export const Discounted = Template.bind({});
Discounted.args = {
  amount: 499,
  currency: "SEK",
  styling: { color: "red", textDecoration: "line-through" },
};

export const LargeGreen = Template.bind({});
LargeGreen.args = {
  amount: 999,
  currency: "SEK",
  styling: { color: "green", fontSize: "1.5rem" },
};
