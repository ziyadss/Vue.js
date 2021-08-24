<template>
  <BaseContainer v-if="auth" title="Vuex">
    <TheCounter />
    <FavoriteValue />
    <button @click="increment">Add 10</button>
    <ChangeCounter />
  </BaseContainer>

  <BaseContainer title="Authentication">
    <UserAuth />
  </BaseContainer>
</template>

<script>
import { mapGetters } from 'vuex';
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import TheCounter from './components/TheCounter.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth
  },
  methods: {
    increment() {
      //this.$store.dispatch('increase', { value: 10 });
      this.$store.dispatch({
        type: 'counter/increase',
        value: 10
      });
    }
  },
  computed: {
    ...mapGetters({
      auth: 'loggedIn'
    })
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
