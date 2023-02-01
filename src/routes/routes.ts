import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazy-load/pages';

interface Route {
  key: string;
  to: string;
  path: string;
  Component: () => JSX.Element;
  linkName: string;
}

export const routes: Route[] = [
  {
    key: 'abx12',
    to: '/lazy1',
    path: 'lazy1',
    Component: LazyPage1,
    linkName: 'lazy 1',
  },
  {
    key: 'abz17',
    to: '/lazy2',
    path: 'lazy2',
    Component: LazyPage2,
    linkName: 'lazy 2',
  },
  {
    key: 'abu32',
    to: '/lazy3',
    path: 'lazy3',
    Component: LazyPage3,
    linkName: 'lazy 3',
  },
];
