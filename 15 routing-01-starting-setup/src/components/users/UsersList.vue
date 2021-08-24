<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <UserItem
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    />
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  data() {
    return {
      changesSaved: false
    };
  },
  components: {
    UserItem
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      //work
      this.$router.push('/teams');
    },
    saveChanges() {
      this.changesSaved = true;
    }
  },
  beforeRouteEnter(_to, _from, next) {
    //console.log('UsersList beforeRouteEnter', to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('UsersList beforeRouteLeave', to, from);
    const leave =
      this.changesSaved || confirm('Are you sure? You have unsaved changes.');
    next(leave);
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
