import { createApp } from 'https://unpkg.com/vue@3.2.45/dist/vue.esm-browser.js?module'

import MyItem from './test3-1.js'

// const app = createApp(MyItem).mount('#app')
const app = createApp(
    {

    }
)

app.component('myitem', MyItem)
app.mount('#app')
