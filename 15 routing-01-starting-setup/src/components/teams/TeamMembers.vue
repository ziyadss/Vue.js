<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <UserItem
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      />
    </ul>
    <RouterLink to="/teams/t2">Team 2</RouterLink>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['teams', 'users'],
  props: ['teamID'],
  components: {
    UserItem,
  },
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  methods: {
    loadTeam() {
      const team = this.teams.find((team) => team.id === this.teamID);
      this.teamName = team.name;

      const memberIDs = team.members;
      this.members = this.users.filter((user) => memberIDs.includes(user.id));
    },
  },
  created() {
    this.loadTeam(this.teamID);
    if (this.$route.query.sort === 'asc')
      this.members.sort((a, b) => a.fullName.localeCompare(b.fullName));
  },
  beforeRouteUpdate(to, from, next) {
    console.log('TeamMembers beforeRouteUpdate');
    next();
  },
  watch: {
    teamID(newID) {
      this.loadTeam(newID);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
