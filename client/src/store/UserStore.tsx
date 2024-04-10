import { makeAutoObservable } from 'mobx';

export default class UserStore implements UsStore {
  private _isAuth: boolean = true;
  private _isAdmin: boolean = false;
  private _user: User = { email: '', password: '' };
  private _basket: Array<Figure> = [
    { id: 1, name: 'Hutao', price: 123, img: '/asdf' },
    { id: 2, name: 'Kequin', price: 123, img: '/fsef' },
  ];
  private _favorite: Array<Figure> = [
    { id: 1, name: 'Hutao', price: 123, img: '/asdf' },
    { id: 2, name: 'Kequin', price: 123, img: '/fsef' },
  ];
  private _orders: Array<Order> = [
    {
      id: 1,
      date: 7479923234,
      price: 333,
      figures: [
        { id: 1, name: 'Hutao', price: 123, img: '/asdf' },
        { id: 2, name: 'Kequin', price: 123, img: '/fsef' },
      ],
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  setIsAuth(bool: boolean) {
    this._isAuth = bool;
  }

  setIsAdmin(bool: boolean) {
    this._isAdmin = bool;
  }

  setUser(user: User) {
    this._user = user;
  }

  setBasket(basket: Array<Figure>) {
    this._basket = basket;
  }

  setFavorite(favorite: Array<Figure>) {
    this._favorite = favorite;
  }

  setOrders(orders: Array<Order>) {
    this._orders = orders;
  }

  get isAuth() {
    return this._isAuth;
  }

  get isAdmin() {
    return this._isAdmin;
  }

  get user(): User {
    return this._user;
  }

  get basket(): Array<Figure> {
    return this._basket;
  }

  get favorite(): Array<Figure> {
    return this._favorite;
  }

  get orders(): Array<Order> {
    return this._orders;
  }
}
