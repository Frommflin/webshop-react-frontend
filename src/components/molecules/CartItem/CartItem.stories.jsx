import React, { useState } from "react";
import CartItem from "./CartItem.molecule";

export default {
  title: "Molecules/CartItem",
  component: CartItem,
};

const Template = (args) => {
  const [quantity, setQuantity] = useState(args.quantity || 1);
  const [visible, setVisible] = useState(true);

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => setQuantity((q) => (q > 1 ? q - 1 : q));
  const handleRemove = () => setVisible(false); 

  if (!visible) return null; 

  return (
    <CartItem
      {...args}
      quantity={quantity}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onRemove={handleRemove}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  productId: 1,
  name: "T-shirt",
  price: 199,
  quantity: 1,
};
