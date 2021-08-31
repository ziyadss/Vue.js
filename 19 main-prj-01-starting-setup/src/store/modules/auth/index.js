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
      userID: '-MiJpZaTj6enyJdB9UZ7',
      isCoach: true,
      idToken: null,
      email: null,
      refreshToken: null,
      expiresIn: null,
      localId: null,
    };
  },
};

//"auth != null"
