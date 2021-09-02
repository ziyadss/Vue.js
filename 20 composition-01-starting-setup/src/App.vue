<template>
  <section class="container">
    <UserData :firstName="user.firstName" :lastName="user.lastName" />
    <!-- <h2>{{ fullName }}</h2> -->
    <p>{{ nonObject }}</p>
    <button @click="fixAge">Change</button>
    <div>
      <input type="text" v-model="user.firstName" placeholder="First Name" />
      <input type="text" v-model="user.lastName" placeholder="Last Name" />
    </div>
  </section>
</template>

<script>
import { computed, reactive, ref, watch, provide } from 'vue';
import UserData from './components/UserData';
//isRef, isReactive, toRefs (turns properties reactive as well)
// import { ref as refDef, reactive } from 'vue';
// const ref = (val) => (typeof val === 'object' ? reactive(val) : refDef(val));

export default {
  components: { UserData },
  setup() {
    const nonObject = ref('Not An Object!');

    const user = reactive({ firstName: null, lastName: null, age: 2010 });

    function fixAge() {
      nonObject.value = 'Still Not An Object!';
      user.age = 21;
    }

    const fullName = computed(
      () => `${user.firstName || ''} ${user.lastName || ''}`
    );

    watch(nonObject, (newVal, oldVal) =>
      console.log(`Changed from ${oldVal} to ${newVal}`)
    );

    provide('age', user.age);

    return { user, nonObject, fixAge, fullName };
  },
  // data() {
  //   return {
  //     nonObject: 'Not An Object!',
  //     user: { firstName: null, lastName: null, age: 2010 },
  //   };
  // },
  // methods: {
  //   fixAge() {
  //     this.nonObject = 'Still Not An Object!';
  //     this.user.age = 30;
  //   },
  // },
  // computed: {
  //   fullName() {
  //     return `${this.user.firstName || ''} ${this.user.lastName || ''}`;
  //   },
  // },
  // watch: {
  //   nonObject(newVal, oldVal) {
  //     console.log(`Changed from ${oldVal} to ${newVal}`);
  //   },
  // },
  // provide() {
  //   return { userAge: this.user.age };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
