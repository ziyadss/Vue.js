export default {
  registerCoach: (state, coach) => state.coaches.push(coach),
  setCoaches(state, coaches) {
    state.coaches = coaches;
    state.lastFetch = new Date().getTime();
  },
};
