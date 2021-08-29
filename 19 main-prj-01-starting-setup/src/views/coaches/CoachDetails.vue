<template>
  <section>
    <BaseCard>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </BaseCard>
  </section>

  <section>
    <BaseCard>
      <header>
        <h2>Interested? Reach out now!</h2>
        <BaseButton :to="contactLink" text="Contact" />
      </header>
      <router-view />
    </BaseCard>
  </section>

  <section>
    <BaseCard>
      <BaseBadge v-for="area in areas" :key="area" :type="area" :title="area" />
      <p>{{ description }}</p>
    </BaseCard>
  </section>
</template>

<script>
export default {
  props: { id: { required: true } },
  data() {
    return {
      coach: null,
    };
  },
  computed: {
    contactLink() {
      return `${this.$route.path}/contact`;
    },
    fullName() {
      return `${this.coach.firstName} ${this.coach.lastName}`;
    },
    rate() {
      return this.coach.hourlyRate;
    },
    areas() {
      return this.coach.areas;
    },
    description() {
      return this.coach.description;
    },
  },
  created() {
    this.coach = this.$store.getters['coaches/coaches'].find(
      (coach) => coach.id === parseInt(this.id)
    );
  },
};
</script>
