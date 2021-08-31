<template>
  <div>
    <BaseDialog fixed :show="isLoading" title="Authenticating">
      <BaseSpinner
    /></BaseDialog>

    <BaseDialog :show="!!error" title="An error occurred" @close="handleError">
      <p v-if="emailExists">
        An account with this email already exists.<br />
        If you forgot your password, reset it
        <router-link to="/forgot">here</router-link>.
      </p>
      <p v-else-if="manyAttempts">Too many attempts. Please try again later.</p>
      <p v-else-if="invalidPassword">
        The password you entered is incorrect. Please try again.
      </p>
      <p v-else-if="invalidEmail">
        The email you entered is not associated with an account.<br />
        Would you like to
        <router-link to="/signup">sign up</router-link> instead?
      </p>
      <p v-else>
        An error occurred. Please try again or contact support if the error
        persists.
      </p>
    </BaseDialog>

    <BaseCard>
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

        <div class="form-control" :class="{ errors: !password.valid }">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            v-model="password.value"
            @blur="clearValidity('password')"
            required
          />
          <p v-if="!password.valid">
            Password must be at least 8 characters long.
          </p>
        </div>
        <div class="controls">
          <BaseButton :text="activeButtonText" />
          <BaseButton
            type="button"
            :text="inactiveButtonText"
            mode="flat"
            @click="switchMode"
          />
        </div>
      </form>
    </BaseCard>
  </div>
</template>

<script>
export default {
  props: { mode: { type: String, default: 'login' } },
  data() {
    return {
      email: { value: '', valid: true },
      password: { value: '', valid: true },
      re: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      error: null,
      isLoading: false,
    };
  },
  computed: {
    invalidEmail() {
      return this.error === 'EMAIL_NOT_FOUND';
    },
    invalidPassword() {
      return this.error === 'INVALID_PASSWORD';
    },
    emailExists() {
      return this.error === 'EMAIL_EXISTS';
    },
    manyAttempts() {
      return this.error === 'TOO_MANY_ATTEMPTS_TRY_LATER';
    },
    validForm() {
      return this.email.valid && this.password.valid;
    },
    activeButtonText() {
      if (this.mode === 'login') return 'Log in';
      else return 'Sign up';
    },
    inactiveButtonText() {
      if (this.mode === 'login') return "Don't have an account? Register here.";
      else return 'Already have an account? Log in here.';
    },
  },
  methods: {
    clearValidity(el) {
      this[el].valid = true;
    },
    validateForm() {
      this.email.valid = this.re.test(this.email.value);
      this.password.valid = this.password.value.length > 7;
    },
    async submitForm() {
      this.validateForm();

      if (!this.validForm) return;

      const form = { email: this.email.value, password: this.password.value };
      this.isLoading = true;

      try {
        await this.$store.dispatch(this.mode, form);
        this.$router.replace('/');
      } catch (e) {
        this.error = e.message;
      }

      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
    switchMode() {
      const mode = this.mode === 'login' ? 'signup' : 'login';
      this.$router.push(mode);
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
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

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
