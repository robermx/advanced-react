import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);

  return (
    <h3 className={styles.productDescription}>
      {title ? title : product.title}
    </h3>
  );
};
