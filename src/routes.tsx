import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';

const Home = React.lazy(() => import('./pages/Home/Home'));
const Furnitures = React.lazy(() => import('./pages/Furnitures/Furnitures'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/furnitures',
        element: <Furnitures />,
      },
    ],
  },
]);
