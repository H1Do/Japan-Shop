import { Navigate } from 'react-router-dom';
import Admin from '../pages/AdminPage/components/Admin';
import Cart from '../pages/CartPage/components/Cart';
import Catalog from '../pages/CatalogPage/components/Catalog';
import Favorite from '../pages/FavoritePage/components/Favorite';
import Main from '../pages/MainPage/components/Main';
import OrderInfo from '../pages/OrderInfoPage/components/OrderInfo';
import OrderRegistration from '../pages/OrderRegistrationPage/components/OrderRegistration';
import Orders from '../pages/OrdersPage/components/Orders';
import ProductInfo from '../pages/ProductInfoPage/components/ProductInfo';
import Login from '../pages/LoginPage/components/Login';

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
