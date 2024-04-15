import { FC, useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

interface ProductPriceProps {
  price?: number;
}

export const ProductPrice: FC<ProductPriceProps> = ({ price }) => {
  const { product } = useContext(ProductContext);

  return (
    <p className={styles.productPrice}>$ {price ? price : product.price}</p>
  );
};
