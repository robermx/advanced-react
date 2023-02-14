<div align="center">
  <h1 >
    <br>
       <img src="/src/assets/react.svg" alt="React Logo" width="200" />
    <hr/>
    React Advanced + TypeScript
  </h1>
  <p>Lazy load for each component and each module.</p>
</div>

## Technologies

- React v18
- Vite v4
- Typescript
- React Router Dom V6

## Branch - lazy-load-rrd-v6

Applying dynamic routes with a suspense mechanism for data fetching

```
export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav className="py px">
            <img src={logo} alt="React Logo" width="150" className="pt" />
            <ul>
              {routes.map(({ key, linkName, to }) => (
                <li key={key}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive ? 'nav-active' : undefined
                    }
                  >
                    {linkName}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ Component, key, path }) => (
              <Route key={key} path={path} element={<Component />} />
            ))}

            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

```
