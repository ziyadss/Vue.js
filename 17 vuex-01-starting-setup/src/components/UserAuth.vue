<template>
  <button v-if="auth" @click="logout">Logout</button>
  <button v-else @click="login">Login</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      auth: 'loggedIn',
    }),
  },
  methods: {
    ...mapActions(['logout', 'login']),
  },
};
</script>

<style></style>
