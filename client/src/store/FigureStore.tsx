import { makeAutoObservable } from 'mobx';

export default class FigureStore implements FgStore {
  private _brands: Array<Brand> = [
    { id: 1, name: 'Nendroid' },
    { id: 2, name: 'Niyazoid' },
  ];
  private _figures: Array<Figure> = [
    { id: 1, name: 'Hutao', price: 123, img: '/asdf' },
    { id: 2, name: 'Kequin', price: 123, img: '/fsef' },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  setBrands(brands: Array<Brand>) {
    this._brands = brands;
  }

  setFigures(figures: Array<Figure>) {
    this._figures = figures;
  }

  get brands() {
    return this._brands;
  }

  get figures() {
    return this._figures;
  }
}
