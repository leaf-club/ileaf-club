export function once (fn) {
  return (...args) => {
    if (fn) {
      let ret = fn.bind(this, args);
      fn = null;
      return ret;
    }
  }
};
