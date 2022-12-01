// import TodoItem from './TodoItem.js';

const TodoItem = {
  props: { todo: Object },
  template: `
  <li>{{ todo.text }}</li>
  `
}
const { createApp } = Vue;

const app = createApp({
  components: {
    TodoItem
  },
  data() {
    return {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  }
}).mount('#app')