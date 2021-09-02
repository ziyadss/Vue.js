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
import { ref, computed, watch } from 'vue';
export default {
  components: { UserItem },

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
    const availableUsers = computed(() =>
      activeSearchTerm.value
        ? props.users.filter((usr) =>
            usr.fullName.includes(activeSearchTerm.value)
          )
        : props.users ?? []
    );

    const sorting = ref(null);
    function sort(mode) {
      sorting.value = mode;
    }
    const displayedUsers = computed(() =>
      !sorting.value
        ? availableUsers.value
        : availableUsers.value
            .slice()
            .sort((u1, u2) =>
              (sorting.value === 'asc' && u1.fullName <= u2.fullName) ||
              (sorting.value === 'desc' && u1.fullName > u2.fullName)
                ? -1
                : 1
            )
    );

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
