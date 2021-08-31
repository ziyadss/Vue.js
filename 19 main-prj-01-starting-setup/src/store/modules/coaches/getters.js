export default {
  outOfDate: (state) => state.lastFetch < new Date().getTime() - 1000 * 60,
  coaches: (state) => state.coaches,
};
