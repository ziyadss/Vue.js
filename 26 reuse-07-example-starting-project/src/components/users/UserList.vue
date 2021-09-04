<template>
  <BaseContainer>
    <h2>Active Users</h2>

    <BaseSearch @search="updateSearch" :search-term="enteredSearchTerm" />

    <div>
      <button @click="sort('asc')" :class="{ selected: sorting === 'asc' }">
        Sort Ascending
      </button>
      <button @click="sort('desc')" :class="{ selected: sorting === 'desc' }">
        Sort Descending
      </button>
    </div>

    <ul>
      <UserItem
        v-for="user in displayedUsers"
        :key="user.id"
        :user-name="user.fullName"
        :id="user.id"
        @list-projects="$emit('list-projects', $event)"
      />
    </ul>
  </BaseContainer>
</template>

<script>
import UserItem from './UserItem';
import { toRefs } from 'vue';
import useSearch from '@/hooks/search';
import useSort from '@/hooks/sort';
export default {
  components: { UserItem },

  setup(props) {
    const { users } = toRefs(props);

    const {
      enteredSearchTerm,
      updateSearch,
      availableItems: availableUsers,
    } = useSearch(users, 'fullName');

    const {
      sorting,
      sort,
      displayedItems: displayedUsers,
    } = useSort(availableUsers, 'fullName');
    return { enteredSearchTerm, updateSearch, sort, sorting, displayedUsers };
  },
  props: ['users'],
  emits: ['list-projects'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
