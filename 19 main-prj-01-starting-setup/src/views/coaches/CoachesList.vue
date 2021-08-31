<template>
  <div>
    <BaseDialog :show="error" title="An error occurred" @close="handleError">
      <p>
        Something went wrong while fetching coaches. Please try again or contact
        support if the error persists.
      </p>
    </BaseDialog>

    <section>
      <CoachFilter @changed-filters="setFilters" />
    </section>

    <section>
      <BaseCard>
        <div class="controls">
          <BaseButton text="Refresh" mode="outline" @click="loadCoaches" />
          <BaseButton v-if="!isCoach" text="Register as Coach" to="/register" />
        </div>

        <div v-if="isLoading">
          <BaseSpinner />
        </div>

        <ul v-else-if="hasCoaches">
          <CoachItem
            v-for="coach in filteredCoaches"
            :key="coach.id"
            v-bind="coach"
          />
        </ul>
        <h3 v-else>No coaches found.</h3>
      </BaseCard>
    </section>
  </div>
</template>

<script>
import CoachItem from '@/components/coaches/CoachItem';
import CoachFilter from '@/components/coaches/CoachFilter';

export default {
  components: { CoachItem, CoachFilter },
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
      isLoading: false,
      error: false,
    };
  },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches'].filter((coach) => {
        if (this.filters.frontend && coach.areas.includes('frontend'))
          return true;
        if (this.filters.backend && coach.areas.includes('backend'))
          return true;
        if (this.filters.career && coach.areas.includes('career')) return true;
        return false;
      });
    },
    isCoach() {
      return this.$store.getters.isCoach;
    },
    hasCoaches() {
      return this.filteredCoaches.length > 0;
    },
  },
  methods: {
    setFilters(filters) {
      this.filters = filters;
    },
    async loadCoaches() {
      this.isLoading = true;

      try {
        await this.$store.dispatch('coaches/fetchCoaches');
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
    if (this.$store.getters['coaches/outOfDate']) this.loadCoaches();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
