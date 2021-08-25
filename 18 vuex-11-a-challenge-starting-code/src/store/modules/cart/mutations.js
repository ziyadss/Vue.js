export default {
  add(state, payload) {
    const productData = payload;
    const productInCartIndex = state.items.findIndex(
      (ci) => ci.productId === productData.id
    );

    if (productInCartIndex >= 0) {
      state.items[productInCartIndex].qty++;
    } else {
      const newItem = {
        productId: productData.id,
        title: productData.title,
        image: productData.image,
        price: productData.price,
        qty: 1,
      };
      state.items.push(newItem);
    }
    state.qty++;
    state.total += productData.price;
  },
  remove(state, payload) {
    const prodId = payload;
    const productInCartIndex = state.items.findIndex(
      (cartItem) => cartItem.productId === prodId
    );
    const prodData = state.items[productInCartIndex];
    state.items.splice(productInCartIndex, 1);
    state.qty -= prodData.qty;
    state.total -= prodData.price * prodData.qty;
  },
};
