import { BrowserRouter } from 'react-router-dom';
import './assets/styles/styles.scss';
import { useContext, useEffect, useState } from 'react';
import { MainContext } from './context';
import { check } from './pages/LoginPage/API/userAPI';
import { fetchBasket } from './pages/CartPage/API/basketAPI';
import { fetchOneFigure } from './API/figureAPI';
import { fetchFavorite } from './pages/FavoritePage/API/favoriteAPI';
import { fetchOrders } from './pages/OrdersPage/API/ordersAPI';
import AppRouter from './modules/AppRouter/components/AppRouter';

function App() {
  const { user } = useContext(MainContext) as {
    user: UsStore;
    figure: FgStore;
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      setLoading(false);
      return;
    }

    check()
      .then((data) => {
        user.setUser({ email: data.email, password: data.password });
        user.setIsAuth(true);

        if (data.role === 'ADMIN') {
          user.setIsAdmin(true);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [localStorage.getItem('token')]);

  useEffect(() => {
    if (!loading) {
      fetchBasket().then((data) => {
        user.setBasket([]);
        data.map((basketFigure: { figureId: string }) => {
          if (basketFigure.figureId) {
            fetchOneFigure(basketFigure.figureId).then((figure) => {
              user.setBasket([...user.basket, figure]);
            });
          }
        });
      });
    }
  }, [loading]);

  useEffect(() => {
    if (!loading) {
      fetchFavorite().then((data) => {
        user.setFavorite([]);

        data.map((favoriteFigure: { figureId: string }) => {
          if (favoriteFigure.figureId) {
            fetchOneFigure(favoriteFigure.figureId).then((figure) => {
              user.setFavorite([...user.favorite, figure]);
            });
          }
        });
      });
    }
  }, [loading]);

  useEffect(() => {
    if (!loading) {
      user.setOrders([]);

      fetchOrders().then((data) => {
        user.setOrders(data);
      });
    }
  }, [loading]);

  if (loading) {
    return <div></div>;
  }

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
