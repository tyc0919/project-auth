import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './components/MainPage.vue'
import SigninPage from './components/SigninPage.vue'
import SignupPage from './components/SignupPage.vue'

const routes = [
    {
        path: '/',
        component: MainPage,
        name:'main',
    },
    {
        path: '/signin',
        component: SigninPage,
        name: 'signin'
    },
    {
        path: '/signup',
        component: SignupPage,
        name: 'signup'
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/',
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router