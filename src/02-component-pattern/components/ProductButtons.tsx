import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export const ProductButtons = () => {
  const { counter, handleButton } = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
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
