export default {
  items: (state) => state.items,
  total: (state) => state.total.toFixed(2),
  quantity: (state) => state.qty,
};
