import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './components/MainPage.vue'
import SigninPage from './components/SigninPage.vue'
import SignupPage from './components/SignupPage.vue'


const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/signin',
        component: SigninPage,
    },
    {
        path: '/signup',
        component: SignupPage,
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