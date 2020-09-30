const app = Vue.createApp({
    data() {
        return {
            output: ''
        }
    },
    methods: {
        showAlert() {
            alert('this is an alert !');
        },
        outputDisplay() {
            this.output = event.target.value;
        }
    }
});

app.mount('#assignment');