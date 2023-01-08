import { createApp } from 'https://unpkg.com/vue@3.2.45/dist/vue.esm-browser.js?module'
// import "./test.css"

createApp({
  data() {
    return {
      title: 'My To Do App',
      newTask: '',
      logoURL: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80',
      logoCaption: 'A photo by Kelly Sikkema on Unsplash showing post-it notes',
      tasks: [
        { id: 1, name: 'Learn Vue JS', finished: false },
        { id: 2, name: 'Build a Vue application', finished: false },
        { id: 3, name: 'Write an article about Vue JS', finished: false }
      ]
    }
  },
  methods: {
    addTask() {
      if (this.newTask.length < 1) return
      this.tasks.push({
        id: this.tasks.length + 1,
        name: this.newTask,
        finished: false
      });
      this.newTask = ''
    },
    removeTask(taskID) {
      this.tasks = this.tasks.filter(task => {
          return task.id !== taskID
      });
    },
    finishTask(task) {
      task.finished = !task.finished
    }
  },
  computed: {
    allTasks() {
        return this.tasks.length
    },
    latest() {
        return [...this.tasks].reverse()
    }
  },
  template: `
  <img :src="logoURL" :alt="logoCaption" width="200" height="200" />
  <br>
  <a href="https://www.sitepoint.com/vue-3-beginner-guide/">See the tutorial</a>
  <h1>{{ title }}</h1>

  <h2>Add a new task</h2>
  <span>You have {{ allTasks }} {{ allTasks > 1 ? 'tasks' : 'task' }} at the moment</span>

  <div>
    <input type="text"
        v-model="newTask"
        @keyup.enter="addTask"
        placeholder="Add a new task"
    >

    <button
      @click="addTask"
      :disabled="newTask.length < 1"
    >
      Add task
    </button>
  </div>

  <div v-if="newTask.length > 0">
    <h3>New task preview</h3>
    <p>{{ newTask }}</p>
  </div>

  <ul>
    <li 
      v-for="(task, index) in latest" 
      :key="task.id"
      @click="finishTask(task)"
      :class="{ strikeout: task.finished }"
    >
      {{ index + 1 }}. {{ task.name }}

      <div v-if="task.finished">
          <button @click="removeTask(task.id)">Delete task</button>
      </div>
    </li>
  </ul>
  <style>
.strikeout {
  text-decoration: line-through;
}
</style>
  `
}).mount('#app')
