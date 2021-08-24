export default {
  login(context) {
    context.commit({ type: 'authenticate', auth: true });
  },
  logout(context) {
    context.commit({ type: 'authenticate', auth: false });
  }
};
