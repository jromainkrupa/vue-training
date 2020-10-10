<template>
<button @click="confirmInput">Confirm</button>
<button @click="saveChanges">save changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false,
    }
  },
  methods: {
    confirmInput() {
      //do somehting
      this.$router.push('/teams')
      // many methods thanks to the router this.$router.forward()
    },
    saveChanges() {
      this.changesSaved = true
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('before route enter inside component')
    console.log(to, from)
    next()
  },
  beforeRouteLeave(to, from, next) { // useful for unsave form for accidentaly leaving a page !
    console.log('users list cmp before route leave')
    console.log(to, from)
    if (this.changesSaved === true) {
      next()
    } else {
      const userwantsToLeave = confirm('are you sure ? you got unsaved changes');
      next(userwantsToLeave)
    }

  },
  unmounted() {
    console.log('unmounted') 
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>