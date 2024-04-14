import ProductCard from "../components/ProductCard";

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
        <ProductCard product={product} />
      </div>
    </div>
  );
};

export default ShopingPage;
