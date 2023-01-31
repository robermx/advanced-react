import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';
import logo from '../assets/react.svg';

import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazy-load/pages/';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav className="py px">
          <img src={logo} alt="React Logo" width="150" className="pt" />
          <ul>
            <li>
              <NavLink
                to="/lazy1"
                className={({ isActive }) =>
                  isActive ? 'nav-active' : undefined
                }
              >
                lazy1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy2"
                className={({ isActive }) =>
                  isActive ? 'nav-active' : undefined
                }
              >
                lazy2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy3"
                className={({ isActive }) =>
                  isActive ? 'nav-active' : undefined
                }
              >
                lazy3
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="lazy1" element={<LazyPage1 />} />
          <Route path="lazy2" element={<LazyPage2 />} />
          <Route path="lazy3" element={<LazyPage3 />} />
          <Route path="/*" element={<Navigate to="lazy1" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
