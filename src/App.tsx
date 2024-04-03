import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/styles.scss';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';
import { useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
