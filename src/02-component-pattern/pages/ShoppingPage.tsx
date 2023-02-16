import { ProductButtons, ProductCard, ProductTitle, ProductImage } from '../components';
import { useShoppingCard } from '../hooks/useShoppingCard';
import { products } from '../data/products';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {
  const { onProductCountChange, shoppingChart } = useShoppingCard();

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
        {products.map((product) => (
          <ProductCard
            product={product}
            className="bg-dark color-white"
            key={product.id}
            onChange={onProductCountChange}
            value={shoppingChart[product.id]?.count || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="font-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-card">
        {Object.entries(shoppingChart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark color-white"
            style={{ width: '100px' }}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductImage className="custom-image" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
