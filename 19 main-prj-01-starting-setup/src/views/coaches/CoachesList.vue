<template>
  <section>
    <CoachFilter @changed-filters="setFilters" />
  </section>
  <section>
    <BaseCard>
      <div class="controls">
        <BaseButton text="Refresh" mode="outline" />
        <BaseButton v-if="!isCoach" text="Register as Coach" to="/register" />
      </div>

      <ul v-if="hasCoaches">
        <CoachItem
          v-for="coach in filteredCoaches"
          :key="coach.id"
          v-bind="coach"
        />
      </ul>
      <h3 v-else>No coaches found.</h3>
    </BaseCard>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
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
    };
  },
  computed: {
    filteredCoaches() {
      return this.coaches.filter((coach) => {
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
    ...mapGetters('coaches', ['coaches', 'hasCoaches']),
  },
  methods: {
    setFilters(filters) {
      this.filters = filters;
    },
  },
};
</script>

<style>
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
