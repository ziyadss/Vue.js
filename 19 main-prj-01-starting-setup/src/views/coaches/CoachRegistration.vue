<template>
  <div>
    <BaseDialog :show="error" title="An error occurred" @close="handleError">
      <p>
        Failed to register. Please try again or contact support if the error
        persists.
      </p>
    </BaseDialog>

    <section>
      <BaseCard v-if="!loggedIn">
        <p>You must be logged in to register as a coach.</p>
        <div class="control">
          <BaseButton text="Log in here" to="/login?redirect=/requests" />
        </div>
      </BaseCard>

      <BaseCard v-else-if="isCoach">
        <p>
          You have already registered as a coach.<br />
          Would you like to see your incoming requests?
        </p>
        <div class="control">
          <BaseButton text="ٌRequests" to="/requests" />
        </div>
      </BaseCard>

      <BaseCard v-else>
        <h2>Register as a coach now!</h2>
        <CoachForm @submit-data="saveData" />
      </BaseCard>
    </section>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

const CoachForm = defineAsyncComponent(() =>
  import('@/components/coaches/CoachForm')
);
export default {
  components: { CoachForm },
  data() {
    return {
      error: false,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
    isCoach() {
      return this.$store.getters.isCoach;
    },
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

<style scoped>
.control {
  display: flex;
  justify-content: flex-end;
}
</style>
