import { Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes, adminRoutes } from '../router';
import { useContext, useEffect, useState } from 'react';
import { MainContext } from '../context';
import { observer } from 'mobx-react-lite';
import { check } from '../API/userAPI';

const AppRouter = observer(() => {
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
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div></div>;
  }

  return user.isAuth ? (
    <Routes>
      {user.isAdmin
        ? [...adminRoutes, ...privateRoutes].map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))
        : privateRoutes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  );
});

export default AppRouter;
