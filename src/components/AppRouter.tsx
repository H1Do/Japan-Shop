import { Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router';
import { useContext } from 'react';
import { MainContext } from '../context';

const AppRouter = () => {
  const { contextValue } = useContext(MainContext);

  return contextValue.isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
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
};

export default AppRouter;
