export default {
  ogCount: (state) => state.count,
  count: (state) => state.count * 2,
  normalizedCount(_state, getters) {
    const val = getters.count / 200;
    return Math.min(Math.max(val, 0), 1);
  },
  /* loggingGetter(state, getters, rootState, rootGetters) {
      console.log(state, getters, rootState, rootGetters);
    } */
};
