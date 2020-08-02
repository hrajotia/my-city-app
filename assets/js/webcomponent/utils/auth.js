'use strict';

import browserStorage from './browserStorage';

const token_key = 'mycity_v1_token';

class Auth {

  constructor() {
    this.token = '';
  }

  isAuthenticated() {
    return !!this.token;
  }

  getToken() {
    if (this.token) {
      return this.token;
    }

    this.token = browserStorage.getItem(token_key);
    return this.token;
  }

  setToken(token) {
    this.token = token || '';
    browserStorage.setItem(token_key, this.token);
  }

  deleteToken() {
    this.token = null;

    browserStorage.removeItem(token_key);
  }

}

const auth = new Auth();

(() => {
  const token = auth.getToken();

  if (token) {
    auth.setToken(token);
  }
})();

export default auth;
