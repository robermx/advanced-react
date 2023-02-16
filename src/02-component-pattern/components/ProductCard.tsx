import {
  createContext,
  CSSProperties,
  MouseEventHandler,
  ReactElement,
} from 'react';
import { useProduct } from '../hooks/useProduct';
import {
  ProductContextProps,
  Product,
  onChangeArgs,
} from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  className?: string;
  children?: ReactElement | ReactElement[];
  product: Product;
  style?: CSSProperties;
  // onChange?: MouseEventHandler<HTMLButtonElement> | undefined;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
}: Props) => {
  const { counter, handleButton, setCounter } = useProduct({
    onChange,
    product,
    value,
  });

  return (
    <Provider
      value={{
        counter,
        handleButton,
        product,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  );
};
