<template>
  <UserAlert v-if="alertIsVisible" title="Add a User?" @close="hideAlert">
    <p>Do you want to continue with adding a user?</p>
  </UserAlert>
  <section>
    <h2>Add a User</h2>
    <button @click="showAlert">Add User</button>
  </section>
</template>

<script>
import userAlert from '@/mixins/userAlert';

export default { mixins: [userAlert] };
</script>
