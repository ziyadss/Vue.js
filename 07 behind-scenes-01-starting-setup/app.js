const app = Vue.createApp({
  data() {
    return {
      message: 'Vue is great!',
    };
  },
  methods: {
    setText() {
      this.message = this.$refs.userInput.value;
    },
  },
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  updated() {
    console.log('updated()');
  },
  beforeUnmount() {
    console.log('beforeUnmount()');
  },
  unmounted() {
    console.log('unmounted()');
  },
});
app.mount('#app');

const app2 = Vue.createApp({
  template: `<p>{{favoriteMeal}}</p>`,
  data() {
    return {
      favoriteMeal: 'Pizza',
    };
  },
});
app2.mount('#app2');

/* let data = {
  msg: 'Hello!',
  lMsg: 'Hello! World!'
}
console.log(data.lMsg)


const hn = {
  set(target, k, v) {
    if (k === 'msg') {
      target.lMsg = v + ' World!'
      target.msg = v
    }
  }
}

const pr = new Proxy(data, hn)
pr.msg = 'Hello!!!!'
console.log(data.lMsg) */
