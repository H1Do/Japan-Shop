import { Navigate } from 'react-router-dom';
import Catalog from '../pages/Catalog';
import Main from '../pages/Main';
import ProductInfo from '../pages/ProductInfo';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Cart from '../pages/Cart';
import Favorite from '../pages/Favorite';
import Orders from '../pages/Orders';
import OrderInfo from '../pages/OrderInfo';

export const privateRoutes = [
  { path: '/', element: <Main /> },
  { path: '/catalog', element: <Catalog /> },
  { path: '/catalog/:id', element: <ProductInfo /> },
  { path: '/cart', element: <Cart /> },
  { path: '/orders/:id', element: <OrderInfo /> },
  { path: '/orders', element: <Orders /> },
  { path: '/cart', element: <Cart /> },
  { path: '/favorite', element: <Favorite /> },
  { path: '*', element: <Navigate to="/" replace /> },
];

export const publicRoutes = [
  { path: '/', element: <Main /> },
  { path: '/catalog', element: <Catalog /> },
  { path: '/signin', element: <SignIn /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/catalog/:id', element: <ProductInfo /> },
  { path: '*', element: <Navigate to="/signin" replace /> },
];
