import React from "react";
import styles from "./ProductCard.module.css";
import Heading from "../Heading/Heading.atom";
import Image from "../Image/Image.atom";
import PriceText from "../PriceText/PriceText.atom";
import Paragraph from "../Paragraph/Paragraph.atom";
import Badge from "../Badge/Badge.atom";

const ProductCard = ({
  imgPath,
  imgAlt,
  badgeText,
  badgeVariant,
  productName,
  productDescription,
  price,
}) => {
  return (
    <div className={styles.card}>
      <Heading type="h3" text={productName} />
      {badgeText && (
        <Badge
          text={badgeText}
          variant={badgeVariant}
          classNames={styles.cardBadge}
        />
      )}
      <Image path={imgPath} alt={imgAlt} />
      <PriceText amount={price} />
      <Paragraph text={productDescription} />
    </div>
  );
};

export default ProductCard;
