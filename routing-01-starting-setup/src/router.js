import { createRouter, createWebHistory } from 'vue-router'

import TeamsList from './pages/TeamsList.vue'
import UsersList from './pages/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import notFound from './pages/notFound.vue'
import TeamsFooter from './pages/TeamsFooter.vue'
import UsersFooter from './pages/UsersFooter.vue'

const router =  createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' }, // redirect
        // { path: '/teams', component: TeamsList, alias: '/' },
        { 
            name: 'teams',
            path: '/teams',
            meta: { needAuth: true }, // extra data you can pass 
            components: { default: TeamsList, footer: TeamsFooter },
            children: [
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true }, //teams
            ]
        },
        { 
            path: '/users',
            components: { default: UsersList, footer: UsersFooter },
            beforeEnter(to, from, next) { // this function is called every time we go on users
                console.log('before enter inside route in main js')
                console.log(to, from)
                next();
            }
        },
        { path:  '/:notFound(.*)', component: notFound } // catch eveyrthing after the /
    ],
    linkActiveClass: 'active', // use to avoid 'link-active-class' css selector and use a.active instead
    scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition) // to and from are pages you are going to and coming from ,
        if (savedPosition) {
            return savedPosition; // when you click previous you come back the previous posiotn
        }
        return {
            left: 0, // you are coming back at the top
            top: 0 
        } 
    }
});// router creation

router.beforeEach(function(to, from, next) {
    console.log('global before each')
    console.log(to, from)
    if (to.meta.needAuth) {
        console.log('needs auth')
        // if user is authenticate else f** off
    } else {
        next() // pass tru, false or string (route) or object with name: 'team-mebers', params { teamId: 't2}
    }
}); // every time you navigate from a page to another

router.afterEach(function(to, from){ 
    console.log(to, from) // sending analytics data for example 
    // not useful to authentication or user view control
})

export default router