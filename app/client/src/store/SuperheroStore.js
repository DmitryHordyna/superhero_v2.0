import { makeAutoObservable } from 'mobx';

export default class SuperheroStore {
  constructor() {
    this._planet = [];
    this._univers = [];
    this._page = 1;
    this._limit = 5;
    this._totalCount = 0;

    this._superhero = [];
    this._selectedByUnivers = {};
    this._selectedByPlanet = {};
    makeAutoObservable(this);
  }

  setPlanet(planet) {
    this._planet = planet;
  }
  setUnivers(univers) {
    this._univers = univers;
  }
  setSuperhero(superhero) {
    this._superhero = superhero;
  }
  setSelectedByUnivers(univers) {
    this._selectedByUnivers = univers;
  }
  setSelectedByPlanet(planet) {
    this._selectedByPlanet = planet;
  }

  setPage(page) {
    this._page = page;
  }
  setTotalCount(total) {
    this._totalCount = total;
  }
  setLimit(limit) {
    this._univers = limit;
  }

  get planet() {
    return this._planet;
  }
  get univers() {
    return this._univers;
  }

  get superhero() {
    return this._superhero;
  }
  get selectedByUnivers() {
    return this._selectedByUnivers;
  }
  get selectedByPlanet() {
    return this._selectedByPlanet;
  }
  get page() {
    return this._page;
  }
  get totalCount() {
    return this._totalCount;
  }
  get limit() {
    return this._limit;
  }
}
