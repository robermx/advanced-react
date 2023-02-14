import {
  ProductButtons,
  ProductCard,
  ProductTitle,
  ProductImage,
} from '../components';
import '../styles/custom-styles.css';
import coffeeImg from '../assets/coffee-mug.png';

const product = {
  id: '123',
  title: 'Coffee Mug - Card',
  img: coffeeImg,
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1 style={{ color: 'gray' }}>Shopping Store</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <ProductCard product={product} className="bg-dark color-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark color-white">
          <ProductImage className="custom-image" />

          <ProductTitle title={'Coffee Val'} className="font-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: '#999' }}>
          <ProductImage
            style={{
              boxShadow: '0px 0px 15px 1px rgba(0,0,0,0.75)',
            }}
          />
          <ProductTitle
            style={{
              color: '#03056b',
              fontWeight: 900,
            }}
          />
          <ProductButtons style={{ justifyContent: 'end' }} />
        </ProductCard>
      </div>
    </div>
  );
};
