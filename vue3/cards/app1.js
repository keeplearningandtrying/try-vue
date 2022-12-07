import { createApp } from 'https://unpkg.com/vue@3.2.45/dist/vue.esm-browser.js?module'

// import CourseDisplay from './CourseCard1.js'
import coursedisplay from './CourseCard1.js'

const app = createApp({
    components: {
        // CourseDisplay
        coursedisplay
    },
    data() {
        return {
            allCourses: 1,
            paid: true
        }
    }
}).mount("#app")


