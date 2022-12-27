export default {
    props: {
        paid: {
            type: Boolean
        }
    },
    data() {
        return {
            course: 'Intro to Vue with Vue 3',
            description: 'This is an introductory course to Vue fundamentals!',
            price: '$19.99',
            available: true,
            imgURL: 'https://dltqhkoxgn1gx.cloudfront.net/img/posts/setting-up-your-first-vue3-project-vue-3-0-release-11.png',
            imgDescription: 'An image with a desktop computer',
            tags: [
                { id: 1, name: 'Vue' },
                { id: 2, name: 'Front-end' },
                { id: 3, name: 'JavaScript' },
            ]
        }
    },
    computed: {
        hasImageDescription() {
            return this.imgDescription.length > 0 ? this.imgDescription : 'This is an automated image description!'
        },
        premium() {
            return this.paid
        }
    }
}