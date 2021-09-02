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
import { watch, computed, ref, toRefs } from 'vue';

export default {
  components: { ProjectItem },
  props: ['user'],
  setup(props) {
    const enteredSearchTerm = ref('');
    const activeSearchTerm = ref('');
    function updateSearch(val) {
      enteredSearchTerm.value = val;
    }
    watch(enteredSearchTerm, (val) =>
      setTimeout(() => {
        if (val === enteredSearchTerm.value) activeSearchTerm.value = val;
      }, 300)
    );
    const availableProjects = computed(() =>
      activeSearchTerm.value
        ? props.user.projects.filter((prj) =>
            prj.title.includes(activeSearchTerm.value)
          )
        : props.user.projects
    );

    const user = toRefs(props).user;
    watch(user, () => (enteredSearchTerm.value = ''));
    const hasProjects = computed(
      () => props.user.projects && availableProjects.value.length > 0
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
