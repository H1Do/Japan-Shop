import { BrowserRouter } from 'react-router-dom';
import './styles/styles.scss';
import AppRouter from './components/AppRouter';
import { useContext, useEffect, useState } from 'react';
import { MainContext } from './context';
import { check } from './API/userAPI';
import { fetchBasket } from './API/basketAPI';
import { fetchOneFigure } from './API/figureAPI';
import { fetchFavorite } from './API/favoriteAPI';
import { fetchOrders } from './API/ordersAPI';

function App() {
  const { user } = useContext(MainContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      setLoading(false);
      return;
    }

    check()
      .then((data) => {
        user.setUser(true);
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
