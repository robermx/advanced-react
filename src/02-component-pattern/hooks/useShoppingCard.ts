import { useState } from 'react';
import { ProductInCart, ProductCountChangeProps } from '../interfaces/interfaces';

export const useShoppingCard = () => {
  const [shoppingChart, setShoppingChart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: ProductCountChangeProps) => {
    setShoppingChart((prevShoppingCart) => {
      const productInCart: ProductInCart = prevShoppingCart[product.id] || { ...product, count: 0 };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...prevShoppingCart,
          [product.id]: productInCart,
        };
      }

      // Delete Product
      const { [product.id]: toDelete, ...rest } = prevShoppingCart;
      return rest;

      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = prevShoppingCart;
      //   return rest;
      // }
      // return {
      //   ...prevShoppingCart,
      //   [product.id]: { ...product, count },
      // };
    });
  };

  return {
    shoppingChart,
    onProductCountChange,
  };
};
