<template>
  <BaseCard>
    <h2>Find Your Coach</h2>

    <span class="filter-option">
      <input type="checkbox" id="frontend" value="frontend" v-model="areas" />
      <label for="frontend">Frontend</label>
    </span>

    <span class="filter-option">
      <input type="checkbox" id="backend" value="backend" v-model="areas" />
      <label for="backend">Backend</label>
    </span>

    <span class="filter-option">
      <input type="checkbox" id="career" value="career" v-model="areas" />
      <label for="career">Career</label>
    </span>
  </BaseCard>
</template>

<script>
export default {
  emits: ['update:filters'],
  props: { filters: { type: Object, required: true } },
  data() {
    return { areas: [] };
  },
  watch: {
    areas(newValue) {
      this.$emit('update:filters', { ...this.filters, areas: newValue });
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
