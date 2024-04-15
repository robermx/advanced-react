import { FC, useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

interface ProductdescriptionProps {
  description?: string;
}

export const ProductDescription: FC<ProductdescriptionProps> = ({
  description,
}) => {
  const { product } = useContext(ProductContext);
  return (
    <p className={styles.productDescription}>
      {description ? description : product.description}
    </p>
  );
};
