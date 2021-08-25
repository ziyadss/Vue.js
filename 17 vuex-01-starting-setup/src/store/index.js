import { createStore } from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

import counter from './counter';

export default createStore({
  state() {
    return {
      loggedIn: false,
    };
  },
  actions: actions,
  mutations: mutations,
  getters: getters,
  modules: { counter },
});
