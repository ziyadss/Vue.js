export default {
  registerCoach(context, payload) {
    payload.id = context.rootGetters.userID;
    context.dispatch('becomeCoach', null, { root: true });
    context.commit('registerCoach', payload);
  },
};
