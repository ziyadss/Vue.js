<template>
  <BaseCard>
    <li>
      <header>
        <h3>{{ name }}</h3>
        <BaseButton @click="removeResource(id)" mode="flat" label="Delete" />
      </header>

      <p>{{ description }}</p>

      <nav>
        <a :href="url">View Resource</a>
      </nav>
    </li>
  </BaseCard>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: false },
    url: { type: String, required: false },
  },
  inject: {
    removeResource: { type: Function, required: true },
  },
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
