import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export const ProductButtons = () => {
  const { counter, increaseBy } = useContext(ProductContext);
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
