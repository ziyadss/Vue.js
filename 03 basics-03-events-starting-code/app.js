const app = Vue.createApp({
  data() {
    return {
      counter: 12,
      fName: '',
      lName: '',
      finalName: ''
    };
  },
  methods: {
    inc(v = 1) { this.counter += v },
    dec(v = 1) { this.counter -= v },
    submitForm() {
      alert("Submitted!");
    },
    confirmName() {
      if (!this.fName || !this.lName)
        this.finalName = ''
      else this.finalName = `${this.fName} ${this.lName}`;
    },
    resetInput() {
      this.fName = this.lName = '';
      this.confirmName();
    }
  },
  computed: {
    fullName() {
      console.log("Yep...")
      return this.finalName ? this.finalName + ' OK' : ''
    }
  },
  watch: {
    counter(val) {
      if (val > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0
        }, 2000)
      }
    }
  }
});

app.mount('#events');
