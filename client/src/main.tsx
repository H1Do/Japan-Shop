import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { MainContext } from './context';
import UserStore from './store/UserStore';
import FigureStore from './store/FigureStore';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainContext.Provider
      value={{ user: new UserStore(), figure: new FigureStore() }}
    >
      <App />
    </MainContext.Provider>
  </React.StrictMode>,
);
