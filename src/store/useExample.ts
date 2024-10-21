import { defineStore, storeToRefs } from 'pinia';

export const useExample = defineStore('useExample', () => {
  const info = ref({
    prop1: 1,
    prop2: 2,
  });

  return {
    info,
  };
});

export const useExampleRefs = () => storeToRefs(useExample());
