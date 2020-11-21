import Vue from 'vue'
import VueRouter from 'vue-router'
import Captura from '../views/Captura.vue'
import Listado from '../views/Listado.vue'
import Detalle from '../views/Detalle.vue'
import Evaluacion from '../views/Evaluacion.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/listado',
    name: 'Listado',
    component: Listado
  },
  {
    path: '/captura',
    name: 'Captura',
    component: Captura
  },
  {
    path: '/detalle/:id',
    name: 'Detalle',
    component: Detalle
  },
  {
    path: '/evaluacion/:id',
    name: 'Evaluacion',
    component: Evaluacion
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
