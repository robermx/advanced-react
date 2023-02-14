<div align="center">
  <h1 >
    <br>
       <img src="/src/assets/react.svg" alt="React Logo" width="200" />
    <hr/>
    Lazy Load + TypeScript
  </h1>
  <p>Lazy load for each component and each module.</p>
</div>

## Technologies

- React v18
- Vite v4
- Typescript
- React Router Dom V6

## Brach - component-extend-styles

integrate styles with className and in-line classes both compound-components pattern

```
Example

<ProductCard product={product} className="bg-dark color-white">
  <ProductCard.Image />
  <ProductCard.Title />
  <ProductCard.Buttons />
</ProductCard>

<ProductCard product={product} className="bg-dark color-white">
  <ProductImage style={{
    boxShadow: '0px 0px 15px 1px rgba(0,0,0,0.75)',
  }}
  />
  <ProductTitle />
  <ProductButtons />
</ProductCard>

```
