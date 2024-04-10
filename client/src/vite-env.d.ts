/// <reference types="vite/client" />

type Figure = {
  id: number;
  name: string;
  price: number;
  img: string;
};

interface UsStore {
  setIsAuth: (arg: boolean) => void;
  setIsAdmin: (arg: boolean) => void;
  setUser: (arg: User) => void;
  setBasket: (arg: Array<Figure>) => void;
  setFavorite: (arg: Array<Figure>) => void;
  setOrders: (arg: Array<Order>) => void;
  isAuth: boolean;
  isAdmin: boolean;
  user: User;
  basket: Array<Figure>;
  favorite: Array<Figure>;
  orders: Array<Order>;
}

interface FgStore {
  setBrands: (arg: Array<Brand>) => void;
  setFigures: (arg: Array<Figure>) => void;
  brands: Array<Brand>;
  figures: Array<Figure>;
}

type User = {
  email: string;
  password: string;
};

type Brand = {
  id: number;
  name: string;
};

type Order = {
  id: number;
  date: number;
  price: number;
  figures: Array<Figure>;
};
