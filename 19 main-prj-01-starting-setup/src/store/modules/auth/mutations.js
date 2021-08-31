export default {
  becomeCoach(state) {
    state.isCoach = true;
  },
  setUser(state, user) {
    state.idToken = user.idToken;
    state.email = user.email;
    state.refreshToken = user.refreshToken;
    state.expiresIn = user.expiresIn;
    state.localId = user.localId;
  },
};
