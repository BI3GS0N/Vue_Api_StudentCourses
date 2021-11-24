import {
    createRouter,
    createWebHistory
} from 'vue-router'

import Home from '@/views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import Courses from '../views/Courses'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
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