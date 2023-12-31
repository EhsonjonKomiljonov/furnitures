import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
// import { Home } from './pages/Home/Home';

const Home = React.lazy(() => import('./pages/Home/Home'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);
