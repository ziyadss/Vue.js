<template>
  <TheHeader />
  <router-view v-if="!isFetching" v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component" />
    </transition>
  </router-view>
</template>

<script>
import { defineAsyncComponent } from 'vue';

const TheHeader = defineAsyncComponent(() =>
  import('@/components/layout/TheHeader')
);
export default {
  components: { TheHeader },
  data() {
    return { isFetching: true };
  },
  created() {
    this.$store.dispatch('fetchUser');
    this.$store
      .dispatch('coaches/fetchCoaches')
      .catch(() => {})
      .finally(() => (this.isFetching = false));
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
  },
  watch: {
    loggedIn(newVal, oldVal) {
      if (!newVal && oldVal) this.$router.push('/login');
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.route-enter-active,
.route-leave-active {
  transition: all 0.25s ease;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
