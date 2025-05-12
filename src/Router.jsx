import { createBrowserRouter } from 'react-router-dom';
import Home from './routes/home';
import Layout from './components/Layout/Layout';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
]);
