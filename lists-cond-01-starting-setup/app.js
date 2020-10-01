const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enteredGoalValue: ''
    };
  },
  methods: {
    addGoal(){
      this.goals.push((this.enteredGoalValue))
      this.enteredGoalValue = ''
    },
    removeGoal(i) {
      this.goals.splice(i, 1);
    }
  }
});

app.mount('#user-goals');
