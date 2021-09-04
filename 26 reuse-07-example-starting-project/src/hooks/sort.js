import { ref, computed } from 'vue';

export default function useSort(availableItems, key) {
  const sorting = ref(null);
  function sort(mode) {
    sorting.value = mode;
  }
  const displayedItems = computed(() =>
    !sorting.value
      ? availableItems.value
      : availableItems.value
          .slice()
          .sort((i1, i2) =>
            (sorting.value === 'asc' && i1[key] <= i2[key]) ||
            (sorting.value === 'desc' && i1[key] > i2[key])
              ? -1
              : 1
          )
  );

  return { sorting, sort, displayedItems };
}
