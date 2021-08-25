<template>
  <form @submit.prevent="addContact">
    <div>
      <label>Name</label> <input required v-model="contact.name" type="text" />
    </div>
    <div><label>Phone</label> <input v-model="contact.phone" type="tel" /></div>
    <div>
      <label>Email</label> <input v-model="contact.email" type="email" />
    </div>
    <div>
      <label>Favorite</label> <input v-model="contact.isFav" type="checkbox" />
    </div>
    <button>Add Contact</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      contact: { name: '', phone: '', email: '', isFav: false },
    };
  },
  emits: {
    'add-contact': function (contact) {
      if (!contact.name) console.warn('Name missing');
      return contact.name;
    },
  },
  methods: {
    addContact() {
      this.$emit('add-contact', this.contact);
      this.contact = { name: '', phone: '', email: '', isFav: false };
    },
  },
};
</script>
