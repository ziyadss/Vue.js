<template>
  <div>
    <section>
      <BaseCard>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </BaseCard>
    </section>

    <section>
      <BaseCard>
        <header v-if="!formOpen">
          <h2>Interested? Reach out now!</h2>
          <div class="button-container">
            <BaseButton :to="contactLink" text="Contact" />
          </div>
        </header>

        <router-view />

        <div v-if="formOpen" class="button-container">
          <BaseButton @click="cancelContact" text="Cancel" />
        </div>
      </BaseCard>
    </section>

    <section>
      <BaseCard>
        <BaseBadge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        />
        <p>{{ description }}</p>
      </BaseCard>
    </section>
  </div>
</template>

<script>
export default {
  props: { id: { required: true } },
  data() {
    return { coach: null };
  },
  methods: {
    cancelContact() {
      this.$router.back();
    },
  },
  computed: {
    formOpen() {
      return this.$route.name === 'Contact';
    },
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
      (coach) => coach.id === this.id
    );
  },
};
</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: flex-end;
}
</style>
