export default {
  userID: (state) => state.userID,
  token: (state) => state.userToken,
  loggedIn: (state) => !!state.userToken,
  isCoach(_state, getters) {
    const id = getters.userID;
    return getters['coaches/coaches'].some((coach) => coach.id === id);
  },
};
