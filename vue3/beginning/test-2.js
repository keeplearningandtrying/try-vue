import { createApp, ref, computed } from 'https://unpkg.com/vue@3.2.45/dist/vue.esm-browser.js?module'

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