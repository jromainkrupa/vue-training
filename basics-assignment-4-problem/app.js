const app = Vue.createApp({
    data() {
        return {
            userOne: false,
            userTwo: false,
            button: false,
        }
    },
    methods: {
        checkUser() {
            console.log(event.target.value)
            if (event.target.value === 'user1') {
                this.userOne = !this.userOne;

            } else if (event.target.value === 'user2') {
                this.userTwo = !this.userTwo;
            } else {
                alert('your are not user1 or user 2 !')
            }
        },
        addUserClass() {
            if (this.userOne === true) {
                return { user1: this.userOne}
            } else if (this.userTwo === true) {
                return { user2: this.userTwo}
            }
        },
        buttonToggler() {
            this.button = !this.button
        },
        addButtonClass() {
            if (this.button === true) {
                return { hidden: this.button}
            } else {
                return { active: this.button}
            }
        },
        checkColor() {
            if (event.target.value) {
                return event.target.value;
            }
        },
        addColor() {
            return { backgroundColor: this.checkColor() }
        }
    },
    computed: {},
}).mount('#assignment')