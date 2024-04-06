import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/styles.scss';
import AppRouter from './components/AppRouter';
import { MainContext } from './context';
import { useState } from 'react';

function App() {
  const [contextValue, setContextValue] = useState({
    isAuth: false,
    cart: [],
    favorite: [],
    orders: [],
  });

  return (
    <MainContext.Provider value={{ contextValue, setContextValue }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;
