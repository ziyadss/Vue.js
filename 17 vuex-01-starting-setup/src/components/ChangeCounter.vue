<template>
  <button @click="inc({ value: 2 })">Add 2</button>
  <button @click="up">Add 1</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    /* addTwo() {
      this.$store.dispatch('increment');
      this.$store.dispatch('increment');
    } */
    //...mapActions(['increment', 'increase'])
    ...mapActions('counter', {
      up: 'increment',
      inc: 'increase',
    }),
  },
};
</script>

<style></style>
