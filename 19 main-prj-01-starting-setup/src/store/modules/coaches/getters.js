export default {
  outOfDate: (state) => state.lastFetch < new Date().getTime() - 1000 * 60,
  coaches: (state, _getters, _rootState, rootGetters) =>
    state.coaches.filter((coach) => coach.id !== rootGetters.userID),
};
