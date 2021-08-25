import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  state() {
    return {
      items: [],
      total: 0,
      qty: 0,
    };
  },
  actions: actions,
  mutations: mutations,
  getters: getters,
  namespaced: true,
};
