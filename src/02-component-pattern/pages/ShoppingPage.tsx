import {
  ProductButtons,
  ProductCard,
  ProductTitle,
  ProductImage,
} from '../components';
import coffeeImg from '../assets/coffee-mug.png';

const product = {
  id: '123',
  title: 'Coffee Mug - Card',
  img: coffeeImg,
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <ProductCard product={product}>
          <ProductCard.Image img={product.img} />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title={'coffee'} />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
