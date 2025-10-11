import React from "react";
import Label from "./Label.atom";

export default {
  title: "Components/Atoms/Label",
  component: Label,
};

export const Default = {
  args: {
    text: "Full Name",
    htmlFor: "name",
  },
};

export const Email = {
  args: {
    type: "email",
    htmlFor: "email",
  },
};

export const Telephone = {
  args: {
    type: "tel",
    htmlFor: "phone",
  },
};

export const Address = {
  args: {
    type: "address",
    htmlFor: "address",
  },
};

export const Required = {
  args: {
    text: "Email",
    htmlFor: "email",
    styling: { color: "red", fontWeight: "bold" },
  },
};
