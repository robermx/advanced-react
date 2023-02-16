import { Props as ProductButtonsProp } from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';

export interface Product {
  id: string;
  img?: string;
  title: string;
}

export interface ProductContextProps {
  counter: number;
  handleButton: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Buttons: (Props: ProductButtonsProp) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
}

export interface onChangeArgs {
  count: number;
  product: Product;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface ProductCountChangeProps {
  count: number;
  product: Product;
}
