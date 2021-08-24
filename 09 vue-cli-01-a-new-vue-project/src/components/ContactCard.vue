<template>
  <li>
    <h2>{{ name }}{{ isFav ? " ♥" : "" }}</h2>
    <button @click="toggleDetails">
      {{ expanded ? "Hide Details" : "Show Details" }}
    </button>
    <button @click="toggleFav">
      {{ isFav ? "Unfavorite" : "Favorite" }}
    </button>
    <ul v-if="expanded">
      <li v-if="phone"><strong>Phone:</strong> {{ phone }}</li>
      <li v-if="email"><strong>Email:</strong> {{ email }}</li>
    </ul>
    <button @click="deleteContact">Delete Contact</button>
  </li>
</template>

<script>
function checkID(id) {
  if (!id) console.warn("missing ID");
  return id;
}

export default {
  //props: ["name", "phoneNumber", "emailAddress"],
  props: {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: false },
    email: { type: String, required: false },
    isFav: { type: Boolean, required: true },
  },
  //emits: ["toggle-favorite"],
  emits: {
    "toggle-favorite": checkID,
    "delete-contact": checkID,
  },
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    toggleDetails() {
      this.expanded ^= true;
    },
    toggleFav() {
      this.$emit("toggle-favorite", this.id);
    },
    deleteContact() {
      this.$emit("delete-contact", this.id);
    },
  },
};
</script>