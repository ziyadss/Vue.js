<template>
  <h3>{{ count }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    /* counter() {
      return this.$store.state.count;
    } */
    //...mapGetters(['ogCount'])
    ...mapGetters('counter', {
      count: 'ogCount',
    }),
  },
};
</script>

<style></style>
