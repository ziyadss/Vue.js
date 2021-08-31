<template>
  <div>
    <BaseDialog :show="error" title="An error occurred" @close="handleError">
      <p>
        Failed to register. Please try again or contact support if the error
        persists.
      </p>
    </BaseDialog>

    <section>
      <BaseCard>
        <h2>Register as a coach now!</h2>
        <CoachForm @submit-data="saveData" />
      </BaseCard>
    </section>
  </div>
</template>

<script>
import CoachForm from '@/components/coaches/CoachForm';

export default {
  components: { CoachForm },
  data() {
    return {
      error: false,
    };
  },
  methods: {
    async saveData(data) {
      try {
        await this.$store.dispatch('coaches/registerCoach', data);
        this.$router.replace('/coaches');
      } catch (e) {
        this.error = true;
      }
    },
    handleError() {
      this.error = false;
    },
  },
};
</script>

<style scoped></style>
