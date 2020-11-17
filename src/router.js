import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import ('./views/About.vue')
        },
        {
            path: '/listado',
            name: 'listado',
            component: () => import('./views/Listado.vue')
        },
        {
            path: '/captura',
            name: 'captura',
            component: () => import('./views/Captura.vue')
        },
        {
            path: '/detalle/:id',
            name: 'detalle',
            component: () => import('./views/Detalle.vue')
        }
    ]
})