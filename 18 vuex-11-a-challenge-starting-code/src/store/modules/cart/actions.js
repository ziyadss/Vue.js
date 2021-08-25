export default {
  addProduct(context, payload) {
    const products = context.rootGetters['products/products'];
    const product = products.find((p) => p.id === payload);
    context.commit('add', product);
  },

  removeProduct(context, payload) {
    context.commit('remove', payload);
  },
};
