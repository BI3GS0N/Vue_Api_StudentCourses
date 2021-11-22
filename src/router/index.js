import {
    createRouter,
    createWebHistory
} from 'vue-router'

import Login from '../views/Login'
import Courses from '../views/Courses'

const routes = [{
        path: '/',
        name: 'Login',
        component: Login,
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