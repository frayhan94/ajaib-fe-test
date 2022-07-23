import React from 'react';

const Home = React.lazy(() => import('./pages/home'));

const routes = [
  {
    path: '/',
    name: 'home',
    Component: Home,
  },
];

export default routes;
