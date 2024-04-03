import { createContext } from 'react';

export const MainContext = createContext({
  isAuth: false,
  cart: [],
  favorite: [],
});
