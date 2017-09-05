import constants from './constants';

const prefix = constants.APP_NAME;

export default {
  getItem: (key) => {
    return global.window.localStorage.getItem(`${prefix}:${key}`);
  },
  removeItem: (key) => {
    return global.window.localStorage.removeItem(`${prefix}:${key}`);
  },
  setItem: (key, value) => {
    return global.window.localStorage.setItem(`${prefix}:${key}`, value);
  },
};
