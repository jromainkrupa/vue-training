import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import notFound from './components/nav/notFound.vue'
import TeamsFooter from './components/teams/TeamsFooter.vue'
import UsersFooter from './components/users/UsersFooter.vue'


const router =  createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' }, // redirect
        // { path: '/teams', component: TeamsList, alias: '/' },
        { 
            name: 'teams',
            path: '/teams',
            components: { default: TeamsList, footer: TeamsFooter },
            children: [
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true }, //teams
            ]
        },
        { path: '/users', components: { default: UsersList, footer: UsersFooter }},
        { path:  '/:notFound(.*)', component: notFound } // catch eveyrthing after the /
    ],
    linkActiveClass: 'active', // use to avoid 'link-active-class' css selector and use a.active instead
});// router creation

const app = createApp(App)

app.use(router); // use the router

app.mount('#app');
