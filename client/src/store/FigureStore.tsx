import { makeAutoObservable } from 'mobx';

export default class FigureStore implements FgStore {
  private _brands: Array<Brand> = [];
  private _figures: Array<Figure> = [];

  private _page: number = 1;
  private _totalPages: number = 0;
  private _limit: number = 9;

  constructor() {
    makeAutoObservable(this);
  }

  setBrands(brands: Array<Brand>) {
    this._brands = brands;
  }

  setFigures(figures: Array<Figure>) {
    this._figures = figures;
  }

  setPage(page: number) {
    this._page = page;
  }

  setTotalPages(totalPages: number) {
    this._totalPages = totalPages;
  }

  setLimit(limit: number) {
    this._limit = limit;
  }

  get brands() {
    return this._brands;
  }

  get figures() {
    return this._figures;
  }

  get page() {
    return this._page;
  }

  get totalPages() {
    return this._totalPages;
  }

  get limit() {
    return this._limit;
  }
}
