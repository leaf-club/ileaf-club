export class Storage {
  constructor () {
    if (!window.localStorage) {
      throw new ReferenceError('your device is not support localstorage!');
    }
  }
  isExist (key) {
    if (localStorage.getItem(key) !== '') {
      return true;
    } else {
      return false;
    }
  }
  setItem (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getItem (key) {
    return JSON.parse(localStorage.getItem(key));
  }
  removeItem (key) {
    localStorage.removeItem(key);
  }
  removeAll () {
    localStorage.clear();
  }
};
