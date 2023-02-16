<div align="center">
  <h1 >
    <br>
       <img src="/src/assets/react.svg" alt="React Logo" width="200" />
    <hr/>
    React Advanced - TypeScript
  </h1>
  <p>Adding props configuration on different component in char section</p>
</div>

## Technologies

- React v18
- Vite v4
- Typescript
- React Router Dom V6

## Branch - component-control-props

In this section we will learn how to give our user or co-worker control over the properties and state of our component, usually this pattern is the one that is traditionally used in forms, that is:

```
Example

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

```
