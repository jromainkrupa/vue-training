const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            text: '',
            listPresence: true
        }
    },
    computed: {
        buttonCaption() {
            return this.listPresence ? 'hide list' : 'show'
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.text)
        },
        toggleList() {
            this.listPresence = !this.listPresence;
        }
    }
}).mount('#assignment')