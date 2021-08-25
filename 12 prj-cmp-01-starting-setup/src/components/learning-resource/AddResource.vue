<template>
  <BaseDialog v-if="invalidInput" title="Invalid Input" @close="confirmError">
    <template #content>
      <p>An input field is missing.</p>
      <p>Please fill in all fields.</p>
    </template>

    <template #actions>
      <BaseButton @click="confirmError" label="Okay" />
    </template>
  </BaseDialog>

  <BaseCard>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="name">Name</label>
        <input id="name" name="name" v-model="resource.name" type="text" />
      </div>

      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          v-model="resource.description"
          type="text"
        />
      </div>

      <div class="form-control">
        <label for="url">URL</label>
        <input id="url" name="url" v-model="resource.url" type="url" />
      </div>

      <div>
        <BaseButton type="submit" label="Add Resource" />
      </div>
    </form>
  </BaseCard>
</template>

<script>
export default {
  data() {
    return {
      resource: { name: '', description: '', url: '' },
      invalidInput: false,
    };
  },
  inject: {
    addResource: { type: Function, required: true },
  },
  methods: {
    submitForm() {
      this.resource.name = this.resource.name.trim();
      this.resource.description = this.resource.description.trim();
      this.resource.url = this.resource.url.trim();

      if (this.resource.name && this.resource.description && this.resource.url)
        this.addResource(this.resource);
      else this.invalidInput = true;
    },
    confirmError() {
      this.invalidInput = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
