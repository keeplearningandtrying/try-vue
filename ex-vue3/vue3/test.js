const { createApp, ref, computed } = Vue;
const app = createApp({
  setup() {
    const someValue = ref(10);
    const someComputed = computed(() => someValue.value * 10);
    return {
      someValue,
      someComputed
    }
  }
});
app.mount("#app");