const app = Vue.createApp({
  data() {
    return {
      courseGoal1: 'Finish the course and learn Vue!',
      courseGoal2: 'Master Vue and build amazing apps!',
      //courseGoal2: '<h2>Master Vue and build amazing apps!</h2>',
      vueLink: 'https://vuejs.org',
    };
  },
  methods: {
    changeGoal() {
      const randNum = Math.random();
      return randNum < 0.5 ? this.courseGoal1 : this.courseGoal2;
    },
  },
});

app.mount('#user-goal');
