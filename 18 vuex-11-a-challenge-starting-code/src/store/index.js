import { createStore } from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

import products from './modules/products';
import cart from './modules/cart';

export default createStore({
  state() {
    return {
      loggedIn: false,
    };
  },
  actions: actions,
  mutations: mutations,
  getters: getters,
  modules: { products, cart },
});
