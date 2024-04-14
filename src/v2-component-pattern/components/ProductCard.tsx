import { FC, ReactElement, createContext } from "react";
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
  children?: ReactElement | ReactElement[];
}

interface ProductCardComponent extends FC<ProductCardProps> {
  Title: typeof ProductTitle;
  Image: typeof ProductImage;
  Description: typeof ProductDescription;
  Price: typeof ProductPrice;
  Buttons: typeof ProductButtons;
}
interface ProductTitleProps {
  title: string;
}

interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

const ProductContext = createContext<ProductContextProps | null>(null);
const { Provider } = ProductContext;

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

export const ProductCard: ProductCardComponent = ({ product, children }) => {
  // const { title, price, description, image } = product;

  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>
        {children}
        {/* <ProductTitle title={title} />
      <ProductImage image={image} title={title} />
      <ProductDescription description={description} />
      <ProductPrice price={price} />
      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Description = ProductDescription;
ProductCard.Price = ProductPrice;
ProductCard.Buttons = ProductButtons;
