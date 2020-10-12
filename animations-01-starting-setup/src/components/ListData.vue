<template>
    <transition-group tag="ul" name="list-data">
        <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }} </li>
    </transition-group>
    <div>
        <input type="text" ref="userNameInput">
        <button @click="addUser">Add User</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: ['Max', 'Manue', 'Julie', 'Angela', 'Mickael'],
        }
    },
    methods: {
        removeUser(user) {
            this.users = this.users.filter(usr => usr !== user);
        },
        addUser() {
            const enteredUsername = this.$refs.userNameInput.value
            this.users.unshift(enteredUsername)
        }
    }
}
</script>
<style scoped>
ul {
    list-style: none;
    margin: 1rem 0;
    padding: 0;
}

li {
    border: 1px solid #cccccc;
    padding: 1rem;
    text-align: center;
}
.list-data-enter-from {
    opacity: 0;
    transform: translateX(-30px);
}
.list-data-enter-active {
    transition: all 1s ease-out
}
.list-data-enter-to {
    opacity: 1;
    transform: translateX(0);
}
.list-data-leave-from {
    opacity: 1;
    transform: translateX(0px);
}
.list-data-leave-active {
    transition: all 1s ease-in;
    position: absolute;
}
.list-data-leave-to {
    opacity: 1;
    transform: translateX(30px);
}
.list-data-move {
    transition: transform 0.8s ease;
}
</style>