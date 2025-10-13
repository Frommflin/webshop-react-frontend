import ProductDisplay from "./ProductDisplay.organism";

export default {
  title: "Components/Organisms/ProductDisplay",
  component: ProductDisplay,
};

const prods = [
  {
    name: "Product 1",
    id: "prod1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad eos commodi necessitatibus.",
    price: 1199,
    special: null,
    img: "https://picsum.photos/id/1/200",
    alt: "Product 1 image",
  },
  {
    name: "Product 2",
    id: "prod2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad eos commodi necessitatibus.",
    price: 2000,
    special: "REA",
    img: "https://picsum.photos/id/2/200",
    alt: "Product 2 image",
  },
  {
    name: "Product 3",
    id: "prod3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad eos commodi necessitatibus.",
    price: 500,
    special: null,
    img: "https://picsum.photos/id/3/200",
    alt: "Product 3 image",
  },
];

export const Default = {
  args: {
    products: prods,
  },
};
