import { lazy, LazyExoticComponent } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazy-load/pages';
import { NoLazy } from '../01-lazy-load/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
  key: string;
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  linkName: string;
}

const LazyLayout = lazy(() => import('../01-lazy-load/layout/LazyLayout'));

export const routes: Route[] = [
  {
    key: 'abx12',
    to: '/lazy-load/',
    path: '/lazy-load/*',
    Component: LazyLayout,
    linkName: 'Lazy 1',
  },
  {
    key: 'abz17',
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    linkName: 'No Lazy',
  },
];
