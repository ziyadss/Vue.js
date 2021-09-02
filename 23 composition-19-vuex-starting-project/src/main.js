import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return { counter: 0 };
  },
  mutations: {
    increment: (state) => state.counter++,
  },
  actions: {
    increment: (context) => context.commit('increment'),
  },
  getters: {
    counter: (state) => state.counter,
  },
});

createApp(App).use(store).mount('#app');
