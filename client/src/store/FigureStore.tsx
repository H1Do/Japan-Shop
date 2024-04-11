import { makeAutoObservable } from 'mobx';

export default class FigureStore implements FgStore {
  private _brands: Array<Brand> = [];
  private _figures: Array<Figure> = [];

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
