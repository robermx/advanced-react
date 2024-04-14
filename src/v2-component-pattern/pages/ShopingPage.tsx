import {
  ProductButtons,
  ProductCard,
  ProductDescription,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from "../components/ProductCard";

const product = {
  id: "1",
  title: "Coffee cup",
  price: 10,
  description: "This is a coffee cup, lorem ipsum dolor sit amet.",
  image: "./coffee-mug.png",
};

const ShopingPage = () => {
  return (
    <div>
      <h1>Shoping Store</h1>
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        <ProductCard product={product}>
          <ProductCard.Title title={product.title} />
          <ProductCard.Image image={product.image} title={product.title} />
          <ProductCard.Description description={product.description} />
          <ProductCard.Price price={product.price} />
          {/* <ProductCard.Buttons /> */}
        </ProductCard>
        <ProductCard product={product}>
          <ProductTitle title={product.title} />
          <ProductImage image={product.image} title={product.title} />
          <ProductDescription description={product.description} />
          <ProductPrice price={product.price} />
          {/* <ProductButtons /> */}
        </ProductCard>
      </div>
    </div>
  );
};

export default ShopingPage;
