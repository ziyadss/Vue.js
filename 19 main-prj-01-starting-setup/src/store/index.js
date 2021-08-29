import { createStore } from 'vuex';
import actions from './actions';
import getters from './getters';
import coaches from './modules/coaches';
import requests from './modules/requests';
import mutations from './mutations';

export default createStore({
  state() {
    return {
      userID: 3,
      isCoach: false,
    };
  },
  mutations,
  actions,
  getters,
  modules: { coaches, requests },
});
