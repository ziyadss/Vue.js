import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  namespaced: false,
  actions,
  getters,
  mutations,
  state() {
    return {
      name: null,
      refreshToken: null,
      userID: null,
      userToken: null,
    };
  },
};
