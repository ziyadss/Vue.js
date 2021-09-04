<template>
  <BaseContainer v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>

    <BaseSearch
      v-if="hasProjects"
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    />

    <ul v-if="hasProjects">
      <ProjectItem
        v-for="prj in availableProjects"
        :key="prj.id"
        :title="prj.title"
      />
    </ul>

    <h3 v-else>No projects found.</h3>
  </BaseContainer>
  <BaseContainer v-else>
    <h3>No user selected.</h3>
  </BaseContainer>
</template>

<script>
import ProjectItem from './ProjectItem';
import { watch, computed, toRefs } from 'vue';
import useSearch from '@/hooks/search';

export default {
  components: { ProjectItem },
  props: ['user'],
  setup(props) {
    const { user } = toRefs(props);

    const projects = computed(() => (user.value ? user.value.projects : []));

    const {
      enteredSearchTerm,
      updateSearch,
      availableItems: availableProjects,
    } = useSearch(projects, 'title');

    watch(user, () => updateSearch(''));

    const hasProjects = computed(
      () => user.value.projects && availableProjects.value.length > 0
    );

    return {
      enteredSearchTerm,
      updateSearch,
      hasProjects,
      availableProjects,
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
