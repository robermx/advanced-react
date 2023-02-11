import { Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';

import logo from '../assets/react.svg';
import { routes } from './routes';

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
