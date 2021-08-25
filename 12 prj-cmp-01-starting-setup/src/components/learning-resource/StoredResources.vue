<template>
  <ul>
    <LearningResource
      v-for="resource in resources"
      :key="resource.id"
      v-bind="resource"
    />
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';
export default {
  components: {
    LearningResource,
  },
  inject: {
    resources: { type: Array, required: true },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
