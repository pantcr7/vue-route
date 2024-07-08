import { createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: ()=> import('./views/Home.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: ()=> import('./views/About.vue')
        },
        {
            path: '/jobs',
            name: 'careers',
            component: ()=> import('./views/Careers.vue')
        },
        {
            path: '/editor/:id',
            name: 'editor',
            component: ()=> import('./views/Careers.vue')
        },

    ]
})

export default router