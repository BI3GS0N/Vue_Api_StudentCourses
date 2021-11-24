import {
    createRouter,
    createWebHistory
} from 'vue-router'

import Login from '../views/Login'
import Courses from '../views/Courses'
import Home from '@/views/Home'

const routes = [{
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/courses',
        name: 'Courses',
        component: Courses

    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router