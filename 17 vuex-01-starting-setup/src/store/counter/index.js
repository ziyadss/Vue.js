import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  state() {
    return {
      count: 0,
    };
  },
  actions: actions,
  mutations: mutations,
  getters: getters,
  namespaced: true,
};
