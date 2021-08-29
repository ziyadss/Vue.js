<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ hourlyRate }}/hour</h4>
    <div>
      <BaseBadge v-for="area in areas" :type="area" :title="area" :key="area" />
    </div>
    <div class="actions">
      <BaseButton :to="contactLink" text="Contact" mode="outline" />
      <BaseButton :to="detailsLink" text="View Details" />
    </div>
  </li>
</template>

<script>
export default {
  props: {
    id: { type: Number, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    hourlyRate: { type: Number, required: true },
    areas: { type: Array, default: () => [] },
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    contactLink() {
      return `${this.detailsLink}/contact`;
    },
    detailsLink() {
      return `${this.$route.path}/${this.id}`;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
