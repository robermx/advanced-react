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

interface ProductTitleProps {
  title: string;
}

export const ProductTitle: FC<ProductTitleProps> = ({ title }) => {
  return <h2>{title}</h2>;
};

interface ProductImageProps {
  image?: string;
  title: string;
}

export const ProductImage: FC<ProductImageProps> = ({ image, title }) => {
  return (
    <img
      className={styles.productImg}
      src={image ? image : noImage}
      alt={image ? title : "No image available"}
    />
  );
};

interface ProductdescriptionProps {
  description: string;
}

export const ProductDescription: FC<ProductdescriptionProps> = ({
  description,
}) => {
  return <p className={styles.productDescription}>{description}</p>;
};

interface ProductPriceProps {
  price: number;
}

export const ProductPrice: FC<ProductPriceProps> = ({ price }) => {
  return <p className={styles.productPrice}>$ {price}</p>;
};

interface ProductButtonsProps {
  counter: number;
  increaseBy: (value: number) => void;
}

export const ProductButtons: FC<ProductButtonsProps> = ({
  counter,
  increaseBy,
}) => {
  return (
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
  );
};

const ProductCard: FC<ProductCardProps> = (props) => {
  const { product } = props;
  const { title, price, description, image } = product;

  const { counter, increaseBy } = useProduct();

  return (
    <div className={styles.productCard}>
      <ProductTitle title={title} />
      <ProductImage image={image} title={title} />
      <ProductDescription description={description} />
      <ProductPrice price={price} />
      <ProductButtons counter={counter} increaseBy={increaseBy} />
    </div>
  );
};

export default ProductCard;
