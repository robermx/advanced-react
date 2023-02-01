import { lazy, LazyExoticComponent } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazy-load/pages';

type JSXComponent = () => JSX.Element;

interface Route {
  key: string;
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  linkName: string;
}

const lazy1 = lazy(() => import('../01-lazy-load/pages/LazyPage1'));
const lazy2 = lazy(() => import('../01-lazy-load/pages/LazyPage2'));
const lazy3 = lazy(() => import('../01-lazy-load/pages/LazyPage3'));

export const routes: Route[] = [
  {
    key: 'abx12',
    to: '/lazy1',
    path: 'lazy1',
    Component: lazy1,
    linkName: 'Lazy 1',
  },
  {
    key: 'abz17',
    to: '/lazy2',
    path: 'lazy2',
    Component: lazy2,
    linkName: 'Lazy 2',
  },
  {
    key: 'abu32',
    to: '/lazy3',
    path: 'lazy3',
    Component: lazy3,
    linkName: 'Lazy 3',
  },
];
