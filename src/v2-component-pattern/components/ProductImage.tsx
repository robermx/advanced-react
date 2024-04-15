import { FC, useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

interface ProductImageProps {
  image?: string | undefined | null;
  title?: string;
}

export const ProductImage: FC<ProductImageProps> = ({
  image = null,
  title,
}) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;

  switch (true) {
    case image !== null && image !== undefined:
      imgToShow = product?.image || noImage;
      break;
    default:
      imgToShow = noImage;
      break;
  }
  return (
    <img
      className={styles.productImg}
      src={imgToShow}
      alt={image ? title : "No image available"}
    />
  );
};
