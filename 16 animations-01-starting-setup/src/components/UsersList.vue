<template>
  <transition-group tag="ul" name="user-list">
    <li
      @click="removeUser(user.id)"
      v-for="user in usersReversed"
      :key="user.id"
    >
      {{ user.name }}
    </li>
  </transition-group>
  <div>
    <input type="text" v-model="newUserName" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: 'Max' },
        { id: 2, name: 'Manu' },
        { id: 3, name: 'Julie' },
        { id: 4, name: 'Angela' },
        { id: 5, name: 'Michael' },
      ],
      newUserName: '',
    };
  },
  methods: {
    addUser() {
      this.users.push({
        id: this.users[this.users.length - 1].id + 1,
        name: this.newUserName,
      });
      this.newUserName = '';
    },
    removeUser(id) {
      const idx = this.users.findIndex((user) => user.id === id);
      this.users.splice(idx, 1);
    },
  },
  computed: {
    usersReversed() {
      return this.users.slice().reverse();
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.user-list-enter-active {
  transition: all 0.75s ease;
}

.user-list-leave-active {
  transition: all 0.5s ease;
  position: absolute;
}

.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.user-list-move {
  transition: transform 0.8s ease;
}
</style>
