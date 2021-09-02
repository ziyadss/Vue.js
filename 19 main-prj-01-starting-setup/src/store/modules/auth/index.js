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
      displayName: null,
      refreshToken: null,
      userEmail: null,
      userID: null,
      userToken: null,
    };
  },
};
