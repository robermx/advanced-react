import {
  ProductTitle,
  ProductImage,
  ProductDescription,
  ProductPrice,
  ProductButtons,
  ProductCard,
} from "../components";

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
      <br />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
        <ProductCard product={product}>
          <ProductCard.Title title="Bachas Coffee" />
          <ProductCard.Image />
          <ProductCard.Description
            description={"Cafe colombiano con una gran aceptación"}
          />
          <ProductCard.Price price={50} />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={product}>
          <ProductTitle />
          <ProductImage image={product.image} />
          <ProductDescription />
          <ProductPrice />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShopingPage;
