<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="typedGoal" />
    <button @click="setGoal">Set Goal</button>

    <teleport to="body">
      <ErrorAlert v-if="invalidInput">
        <h2>Invalid input.</h2>
        <p>Input may not be empty.</p>
        <button @click="confirmError">Okay</button>
      </ErrorAlert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      invalidInput: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.typedGoal.value;
      this.invalidInput = enteredValue === "";
    },
    confirmError() {
      this.invalidInput = false;
    },
  },
};
</script>