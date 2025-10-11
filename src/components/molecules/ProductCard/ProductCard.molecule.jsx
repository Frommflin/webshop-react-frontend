import React from "react";
import styles from "./ProductCard.module.css";
import Heading from "@/components/atoms/Heading/Heading.atom";
import Image from "@/components/atoms/Image/Image.atom";
import PriceText from "@/components/atoms/PriceText/PriceText.atom";
import Paragraph from "@/components/atoms/Paragraph/Paragraph.atom";
import Badge from "@/components/atoms/Badge/Badge.atom";

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
