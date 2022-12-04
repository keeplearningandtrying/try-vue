import { createApp } from 'https://unpkg.com/vue@3.2.45/dist/vue.esm-browser.js?module'
import { marked } from 'https://cdn.jsdelivr.net/npm/marked/+esm?module'
import { debounce } from 'https://cdn.jsdelivr.net/npm/lodash-es/+esm?module'

createApp({
  data: () => ({
    input: '# hello'
  }),
  computed: {
    output() {
      return marked(this.input)
    }
  },
  methods: {
    update: debounce(function (e) {
      this.input = e.target.value
    }, 100)
  }
}).mount('#app')