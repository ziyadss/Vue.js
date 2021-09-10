<template>
  <div>
    <BaseDialog :show="error" title="An error occurred" @close="handleError">
      <p>
        Failed to send message. Please try again or contact support if the error
        persists.
      </p>
    </BaseDialog>

    <form @submit.prevent="submitForm">
      <div class="form-control" :class="{ errors: !email.valid }">
        <label for="email">Email address</label>

        <input
          type="email"
          id="email"
          placeholder="example@domain.com"
          v-model.trim="email.value"
          @blur="clearValidity('email')"
          required
        />

        <p v-if="!email.valid">Please enter a valid email address</p>
      </div>

      <div class="form-control" :class="{ errors: !message.valid }">
        <label for="message">Message</label>

        <textarea
          id="message"
          rows="3"
          placeholder="Your message here..."
          v-model.trim="message.value"
          @blur="clearValidity('message')"
          required
        />

        <p v-if="!message.valid">Message may not be empty.</p>
      </div>

      <p v-if="!validForm">
        Please fix the above errors and submit the form again.
      </p>

      <div class="actions">
        <BaseButton text="Send Message" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: { id: { required: true } },
  data() {
    return {
      email: { value: this.$store.getters.email, valid: true },
      message: { value: null, valid: true },
      re: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      error: false,
    };
  },
  computed: {
    validForm() {
      return this.email.valid && this.message.valid;
    },
  },
  methods: {
    clearValidity(el) {
      this[el].valid = true;
    },
    validateForm() {
      this.email.valid = this.re.test(this.email.value);
      this.message.valid = this.message.value.length !== 0;
    },
    submitForm() {
      this.validateForm();

      if (!this.validForm) return;

      const payload = {
        form: { email: this.email.value, message: this.message.value },
        coachID: this.id,
      };

      this.$store
        .dispatch('requests/contactCoach', payload)
        .then(() => this.$router.replace('/coaches'))
        .catch(() => (this.error = true));
    },
    handleError() {
      this.error = false;
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
