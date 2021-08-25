const app = Vue.createApp({
  data() {
    return {
      goals: [],
      userInput: '',
    };
  },
  methods: {
    addGoal() {
      if (!this.userInput) return;
      this.goals.push(this.userInput);
      this.userInput = '';
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount('#user-goals');
