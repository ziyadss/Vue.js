export default {
  authenticate(state, payload) {
    state.loggedIn = payload.auth;
  },
};
