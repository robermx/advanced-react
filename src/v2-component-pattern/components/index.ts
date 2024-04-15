// ? imports
import { ProductButtons } from "./ProductButtons";
import { ProductCard as productCardHOC } from "./ProductCard";
import { ProductImage } from "./ProductImage";
import { ProductPrice } from "./ProductPrice";
import { ProductTitle } from "./ProductTitle";
import { ProductDescription } from "./productDescription";

//? exports
export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductPrice } from "./ProductPrice";
export { ProductTitle } from "./ProductTitle";
export { ProductDescription } from "./productDescription";

export const ProductCard = Object.assign(productCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Description: ProductDescription,
  Price: ProductPrice,
  Buttons: ProductButtons,
});

export default ProductCard;
