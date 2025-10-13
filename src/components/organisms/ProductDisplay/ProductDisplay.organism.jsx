import ProductCard from "@/components/molecules/ProductCard/ProductCard.molecule";
import React from "react";
import styles from "./ProductDisplay.module.css";

const ProductDisplay = ({ products = [] }) => {
  return (
    <div className={styles.flex}>
      {products &&
        products.map((prod) => {
          return (
            <ProductCard
              key={prod.id}
              imgPath={prod.img}
              imgAlt={prod.alt}
              productName={prod.name}
              productDescription={prod.desc}
              price={prod.price}
              badgeText={prod.special}
            />
          );
        })}
    </div>
  );
};

export default ProductDisplay;
