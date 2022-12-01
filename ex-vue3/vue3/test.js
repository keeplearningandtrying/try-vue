const { createApp, ref, computed } = Vue;

// this doesn't work
// import { createApp, ref, computed } from 'vue'

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