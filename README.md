<div align="center">
  <h1 >
    <br>
       <img src="/src/assets/react.svg" alt="React Logo" width="200" />
    <hr/>
    React Advanced + TypeScript
  </h1>
  <p>Lazy load nested in one component.</p>
</div>

## Technologies

- React v18
- Vite v4
- Typescript
- React Router Dom V6

Applying routes inside a LazyLayout component in one view page

```
export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>
      <ul>
        <li>
          <NavLink to="lazy1">Lazy 1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">Lazy 2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">Lazy 3</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="Lazy1" element={<LazyPage1 />} />
        <Route path="Lazy2" element={<LazyPage2 />} />
        <Route path="Lazy3" element={<LazyPage3 />} />
        <Route path="*" element={<Navigate replace to="lazy1" />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
```
