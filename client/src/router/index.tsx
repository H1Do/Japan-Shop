import { Navigate } from 'react-router-dom';
import Catalog from '../pages/Catalog';
import Main from '../pages/Main';
import ProductInfo from '../pages/ProductInfo';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import Favorite from '../pages/Favorite';
import Orders from '../pages/Orders';
import OrderInfo from '../pages/OrderInfo';
import Admin from '../pages/Admin';
import OrderRegistration from '../pages/OrderRegistration';

export const adminRoutes = [{ path: '/admin', element: <Admin /> }];

export const privateRoutes = [
  { path: '/', element: <Main /> },
  { path: '/catalog', element: <Catalog /> },
  { path: '/catalog/:id', element: <ProductInfo /> },
  { path: '/cart', element: <Cart /> },
  { path: '/orders/:id', element: <OrderInfo /> },
  { path: '/orders', element: <Orders /> },
  { path: '/cart', element: <Cart /> },
  { path: '/favorite', element: <Favorite /> },
  { path: '/orderreg', element: <OrderRegistration /> },
  { path: '*', element: <Navigate to="/" replace /> },
];

export const publicRoutes = [
  { path: '/', element: <Main /> },
  { path: '/catalog', element: <Catalog /> },
  { path: '/login', element: <Login /> },
  { path: '/catalog/:id', element: <ProductInfo /> },
  { path: '*', element: <Navigate to="/login" replace /> },
];
