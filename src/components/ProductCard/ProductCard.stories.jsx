import ProductCard from "./ProductCard.molecule";

export default {
  title: "Components/ProductCard",
  component: ProductCard,
};

export const Default = {
  args: {
    imgPath: "https://picsum.photos/id/1/200",
    imgAlt: "product",
    productName: "Product",
    productDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolor magni voluptatibus iure?",
    price: 100,
  },
};

export const CardWithBadge = {
  args: {
    imgPath: "https://picsum.photos/id/1/200",
    imgAlt: "product",
    badgeText: "Rea",
    productName: "Product",
    productDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolor magni voluptatibus iure?",
    price: 100,
  },
};
