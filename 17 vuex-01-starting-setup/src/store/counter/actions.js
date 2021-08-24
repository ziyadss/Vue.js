export default {
  increment(context) {
    setTimeout(() => context.commit('increment'), 2000);
  },
  increase(context, payload) {
    payload.type = 'increase';
    context.commit(payload);
  }
};
