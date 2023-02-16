import { useContext, CSSProperties, useEffect } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { counter, handleButton } = useContext(ProductContext);

  return (
    <div style={style} className={`${styles.buttonsContainer} ${className}`}>
      <button onClick={() => handleButton(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button onClick={() => handleButton(+1)} className={styles.buttonAdd}>
        +
      </button>
    </div>
  );
};
