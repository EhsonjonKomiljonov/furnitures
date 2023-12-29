import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.css';
import { router } from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
