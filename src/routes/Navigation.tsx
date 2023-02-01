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

          <Route path="/*" element={<Navigate to="lazy1" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
