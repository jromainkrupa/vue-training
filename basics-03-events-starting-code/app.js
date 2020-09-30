const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    outputFullName() {
      if (this.name === '') {
        return '';
      } else {
        return this.name + ' ' + 'KRUPA';
      }
    },
    add(num) {
      this.counter = this.counter + num;
    },
    remove(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      this.name = event.target.value
    },
    submitForm() {
      alert('submitted!')
    },
    resetInput() {
      this.name = '';
      this.counter = 0;
    }
  },
  computed: {
    fullName() {
      console.log('hello')
      if (this.name === '') {
        return '';
      } else {
        return this.name + ' ' + 'KRUPA';
      }
    }
  }
});

app.mount('#events');
