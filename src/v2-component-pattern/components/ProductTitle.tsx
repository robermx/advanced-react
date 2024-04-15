import { FC, useContext } from "react";
import { ProductContext } from "./ProductCard";

interface ProductTitleProps {
  title?: string;
}

export const ProductTitle: FC<ProductTitleProps> = ({ title }) => {
  const { product } = useContext(ProductContext);
  return <h2>{title ? title : product.title}</h2>;
};
