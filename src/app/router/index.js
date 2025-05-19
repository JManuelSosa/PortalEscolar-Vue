import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/modules/shared/layout'

const routes = [
    ...AppLayout
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router