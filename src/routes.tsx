import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';

const Home = React.lazy(() => import('./pages/Home/Home'));
const Furnitures = React.lazy(() => import('./pages/Furnitures/Furnitures'));
const SavedProducts = React.lazy(
  () => import('./pages/SavedProducts/SavedProducts')
);
const OurWork = React.lazy(() => import('./pages/OurWork/OurWork'));
const ContactUs = React.lazy(() => import('./pages/ContactUs/ContactUs'));
const News = React.lazy(() => import('./pages/News/News'));

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
      {
        path: '/our-work',
        element: <OurWork />,
      },
      {
        path: '/news',
        element: <News />,
      },
      {
        path: '/contact',
        element: <ContactUs />,
      },
      {
        path: '/saved',
        element: <SavedProducts />,
      },
    ],
  },
]);
