import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

Vue.use(Router)

const router = new Router()
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ './views/dashboard/Dashboard.vue')
            },
            {
                path: '/custom/notify',
                name: 'customNotify',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ './views/custom/Notify.vue')
            }
        ]
    },
    {
        path: '*',
        name: '404',
        component: Home,
    }
]

router.addRoutes(routes)

export default router
