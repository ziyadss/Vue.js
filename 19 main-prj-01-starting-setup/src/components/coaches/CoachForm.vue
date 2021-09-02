<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !firstName.valid }">
      <label for="firstname">First Name</label>

      <input
        type="text"
        id="firstname"
        v-model.trim="firstName.value"
        placeholder="First Name"
        @blur="clearValidity('firstName')"
        required
      />

      <p v-if="!firstName.valid">First Name may not be empty.</p>
    </div>

    <div class="form-control" :class="{ invalid: !lastName.valid }">
      <label for="lastname">Last Name</label>

      <input
        type="text"
        id="lastname"
        v-model.trim="lastName.value"
        @blur="clearValidity('lastName')"
        placeholder="Last Name"
        required
      />

      <p v-if="!lastName.valid">Last Name may not be empty.</p>
    </div>

    <div class="form-control" :class="{ invalid: !description.valid }">
      <label for="description">Description</label>

      <textarea
        id="description"
        v-model.trim="description.value"
        @blur="clearValidity('description')"
        placeholder="Description"
        rows="5"
        required
      />

      <p v-if="!description.valid">Description may not be empty.</p>
    </div>

    <div class="form-control" :class="{ invalid: !rate.valid }">
      <label for="rate">Rate</label>

      <input
        type="number"
        id="rate"
        v-model="rate.value"
        placeholder="Rate"
        @blur="clearValidity('rate')"
        required
      />

      <p v-if="!rate.valid">Rate must be greater than 0.</p>
    </div>

    <div class="form-control" :class="{ invalid: !areas.valid }">
      <h3>Areas of Expertise</h3>

      <div class="checkbox-group">
        <div class="checkbox">
          <input
            type="checkbox"
            id="frontend"
            value="frontend"
            v-model="areas.value"
            @change="clearValidity('areas')"
          />
          <label for="frontend">Frontend Development</label>
        </div>

        <div class="checkbox">
          <input
            type="checkbox"
            id="backend"
            value="backend"
            v-model="areas.value"
            @change="clearValidity('areas')"
          />
          <label for="backend">Backend Development</label>
        </div>

        <div class="checkbox">
          <input
            type="checkbox"
            id="career"
            value="career"
            v-model="areas.value"
            @change="clearValidity('areas')"
          />
          <label for="career">Career Advisory</label>
        </div>
      </div>

      <p v-if="!areas.valid">Please select at least one area of expertise.</p>
    </div>

    <p v-if="!validForm">
      Please fix the above errors and submit the form again.
    </p>

    <BaseButton text="Register" />
  </form>
</template>

<script>
export default {
  emits: ['submit-data'],
  data() {
    return {
      firstName: { value: null, valid: true },
      lastName: { value: null, valid: true },
      description: { value: null, valid: true },
      rate: { value: null, valid: true },
      areas: { value: [], valid: true },
    };
  },
  computed: {
    validForm() {
      return (
        this.firstName.valid &&
        this.lastName.valid &&
        this.description.valid &&
        this.rate.valid &&
        this.areas.valid
      );
    },
  },
  methods: {
    clearValidity(el) {
      this[el].valid = true;
    },
    validateForm() {
      this.firstName.valid = this.firstName.value.length > 0;

      this.lastName.valid = this.lastName.value.length > 0;

      this.description.valid = this.description.value.length > 0;

      this.rate.valid = this.rate.value && this.rate.value > 0;

      this.areas.valid = this.areas.value.length > 0;
    },
    submitForm() {
      this.validateForm();

      const coach = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        description: this.description.value,
        hourlyRate: this.rate.value,
        areas: this.areas.value,
      };

      if (this.validForm) this.$emit('submit-data', coach);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
