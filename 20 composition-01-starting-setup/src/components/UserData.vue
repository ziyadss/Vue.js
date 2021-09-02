<template>
  <div>
    <h2>{{ fullName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';
export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const fullName = computed(
      () => `${props.firstName || ''} ${props.lastName || ''}`
    );

    console.log(context);
    // context.emit('init', 0);

    const age = inject('age');

    onBeforeMount(() => console.log('onBeforeMount()'));
    onMounted(() => console.log('onMounted()'));
    onBeforeUpdate(() => console.log('onBeforeUpdate()'));
    onUpdated(() => console.log('onUpdated()'));
    onBeforeUnmount(() => console.log('onBeforeUnmount()'));
    onUnmounted(() => console.log('onUnmounted()'));

    return { fullName, age };
  },
};
</script>

<style></style>
