<template>
  <div>
    <BaseDialog :show="error" title="An error occurred" @close="handleError">
      <p>
        Something went wrong while fetching your requests. Please try again or
        contact support if the error persists.
      </p>
    </BaseDialog>

    <section v-if="isCoach">
      <BaseCard>
        <header><h2>Requests Received</h2></header>

        <div class="control">
          <BaseButton text="Refresh" mode="outline" @click="loadRequests" />
        </div>

        <div v-if="isLoading">
          <BaseSpinner />
        </div>

        <ul v-else-if="hasRequests">
          <RequestItem
            v-for="request in requests"
            :key="request.id"
            v-bind="request"
          />
        </ul>

        <h3 v-else>You haven't received any requests yet.</h3>
      </BaseCard>
    </section>

    <section v-else>
      <BaseCard>
        <p>You have to register as a couch to get requests.</p>
        <div class="control right">
          <BaseButton text="Register" to="/register" />
        </div>
      </BaseCard>
    </section>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

const RequestItem = defineAsyncComponent(() =>
  import('@/components/requests/RequestItem')
);
export default {
  components: { RequestItem },
  data() {
    return { isLoading: true, error: false };
  },
  computed: {
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
    requests() {
      return this.$store.getters['requests/requests'];
    },
    isCoach() {
      return this.$store.getters.isCoach;
    },
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;

      try {
        await this.$store.dispatch('requests/fetchRequests');
      } catch (error) {
        this.error = true;
      }

      this.isLoading = false;
    },
    handleError() {
      this.error = false;
    },
  },
  created() {
    this.loadRequests();
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}

.control {
  display: flex;
  justify-content: center;
}

.right {
  justify-content: flex-end;
}
</style>
