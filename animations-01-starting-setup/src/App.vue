<template>
  <router-view>
    <transition name="route">
      
    </transition>
  </router-view>
</template>  

<script>
// import ListData from './components/ListData.vue'
export default {
  components: {
    // ListData
    },
  data() {
    return { 
      UsersAreVisible: false,
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
      enterInterval: null,
      leaveInterval: null
    };
  },
  methods: {
    enterCancelled(el) {
      console.log(el)
      clearInterval(this.enterInterval)
    },
    leaveCancelled(el) {
      console.log(el)
      clearInterval(this.enterInterval)
    },
    beforeEnter(el) {
      console.log('before enter')
      console.log(el)
      el.style.opacity = 0
      },
    enter(el, done) {
      console.log('enter')
      console.log(el)
      let round = 1
      this.enterInterval  = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++
        if (round > 100) {
          clearInterval(this.enterInterval)
          done() // it says that our function is done
        }
      }, 20)
    },
    afterEnter(el) {
      console.log('after enter')
      console.log(el)
    },
    beforeLeave(el) {
      console.log('before leave')
      console.log(el)
    },
    leave(el, done) {
      console.log('leave')
      console.log(el)
      let round = 100
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01
        round-- 
        if (round < 0) {
          clearInterval(this.leaveInterval)
          done()
        }
      }, 20)
    },
    afterLeave(el) {
      console.log('after leave')
      console.log(el)
    },
    showUser() {
      this.UsersAreVisible = true;
    },
    hideUser() {
      this.UsersAreVisible = false;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = !this.animatedBlock
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out;  */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(-150px); */
  animation: slide-scale 0.3s ease-out forwards ;
}
.fade-button-enter-from 
.fade-button-leave-from {
  opacity: 0;
}
.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-button-leave-from {
  transition: opacity 0.3s ease-in;
}
.fade-button-enter-to 
.fade-button-leave-to{
  opacity: 1;
}
.route-enter-from {}
.route-enter-active {
  animation: slide-scale 0.4s ease-out;
}
.route-enter-to {}
.route-leave-from {}
.route-leave-active {
  animation: slide-scale 0.4s ease-in;
}
.route-leave-to {}

@keyframes slide-scale { 
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale (1);
  }
}
</style>