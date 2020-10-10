import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue'

const router =  createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/teams', component: TeamsList },
        { path: '/users', component: UsersList },
    ],
    linkActiveClass: 'active', // use to avoid 'link-active-class' css selector and use a.active instead
});// router creation

const app = createApp(App)

app.use(router); // use the router

app.mount('#app');
