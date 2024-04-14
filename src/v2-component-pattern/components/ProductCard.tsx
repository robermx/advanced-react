import { FC } from "react";
import useProduct from "../hooks/useProduct";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = (props) => {
  const { product } = props;
  const { id, title, price, description, image } = product;

  const { counter, increaseBy } = useProduct();

  return (
    <div className={styles.productCard}>
      <h2>{title}</h2>
      <img
        className={styles.productImg}
        src={image ? image : noImage}
        alt="coffee"
      />

      <span className={styles.productDescription}>{description}</span>
      <div className={styles.buttonsContainer}>
        <button
          disabled={counter <= 0}
          onClick={() => increaseBy(-1)}
          className={styles.buttonMinus}
        >
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button onClick={() => increaseBy(+1)} className={styles.buttonAdd}>
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
