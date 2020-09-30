const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        add(num) {
            this.counter = this.counter + num
        }
    },
    watch: {
        result() {
            console.log('ksgjjgo')
            const that = this;
            setTimeout(function() {
                that.counter = 0;
            }, 5000)
        }
    },
    computed: {
        result(){
            if (this.counter < 37) {
                return 'not there yet';
            } else if (this.counter === 37) {
                return this.counter;
            } else {
                return ' too much !';
            }
        }
    }
}).mount('#assignment')