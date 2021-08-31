export default {
  setUser(state, user) {
    for (const key in user) state[key] = user[key];
  },
};
