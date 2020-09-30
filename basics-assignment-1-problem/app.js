const assignment = Vue.createApp({
   data() {
       return {
           name: 'Jean-Romain',
           age: 30,
           url: 'https://source.unsplash.com/random'
       }
   },
   methods: {
       ageInFive() {
           return this.age + 5
       },
       favoriteNumber() {
           return Math.random();
       }
   } 
}).mount('#assignment');