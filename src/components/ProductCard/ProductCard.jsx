import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";
import styles from "./productcard.module.css";

const ProductCard = ({ product, handleProductLike }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imgContainer}>
        <Image src={product.image} alt={product.title} layout="fill" />
      </div>
      <h3>{product.name}</h3>
      <div>
        <p>
          <a href="#">Sign in</a> or Create an account to see pricing
        </p>

        <Heart
          color={!product.isLiked ? "#666" : "#fa5252"}
          id={product.id}
          onClick={handleProductLike}
        />
      </div>
    </div>
  );
};

export default ProductCard;
