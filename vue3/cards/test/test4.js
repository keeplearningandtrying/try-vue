import { createApp } from 'https://unpkg.com/vue@3.2.45/dist/vue.esm-browser.js?module'

import MyItem from './test4-1.js'
import coursedisplay from './CourseCard1.js'

const app = createApp(MyItem)
app.component('coursedisplay', coursedisplay)
app.mount('#app')
