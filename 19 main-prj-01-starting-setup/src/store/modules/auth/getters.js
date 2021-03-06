export default {
  userID: (state) => state.userID,
  token: (state) => state.userToken,
  loggedIn: (state) => !!state.userToken,
  email: (state) => state.userEmail,
  isCoach: (_state, getters) =>
    getters['coaches/coaches'].some((coach) => coach.id === getters.userID),
};
