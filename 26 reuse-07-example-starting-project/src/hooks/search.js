import { ref, computed, watch } from 'vue';

export default function useSearch(items, key) {
  const enteredSearchTerm = ref('');
  const activeSearchTerm = ref('');

  function updateSearch(val) {
    enteredSearchTerm.value = val;
  }
  watch(enteredSearchTerm, (val) =>
    setTimeout(() => {
      if (val === enteredSearchTerm.value) activeSearchTerm.value = val;
    }, 300)
  );
  const availableItems = computed(() =>
    activeSearchTerm.value
      ? items.value.filter((itm) => itm[key].includes(activeSearchTerm.value))
      : items.value ?? []
  );

  return { enteredSearchTerm, updateSearch, availableItems };
}
