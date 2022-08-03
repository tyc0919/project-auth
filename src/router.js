import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './components/MainPage.vue'
import SigninPage from './components/SigninPage.vue'
import SignupPage from './components/SignupPage.vue'
import ForgotPwdPage from './components/ForgotPwdPage.vue'
import ResetPwdPage from './components/ResetPwdPage.vue'

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
        path: '/forgotpwd',
        component: ForgotPwdPage,
    },
    {
        path: '/resetpwd',
        component: ResetPwdPage,
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