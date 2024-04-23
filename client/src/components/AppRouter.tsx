import { Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes, adminRoutes } from '../router';
import { useContext } from 'react';
import { MainContext } from '../context';
import { observer } from 'mobx-react-lite';

const AppRouter = observer(() => {
  const { user } = useContext(MainContext) as {
    user: UsStore;
    figure: FgStore;
  };

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
