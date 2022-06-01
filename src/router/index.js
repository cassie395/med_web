import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InfoView from '../views/InfoView.vue'
import ListView from '../views/ListView.vue'
import AcontView from '../views/AcontView'
import LockView from '../views/LockView'
import CheckAllView from '../views/CheckAllView'
import CheckMView from '../views/CheckMView'
import TableView from '../views/TableView'
import ResultView from '../views/ResultView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/info',
    name: 'info',
    component: InfoView
  },
  {
    path: '/list',
    name: 'list',
    component: ListView
  },
  {
    path: '/account',
    name: 'account',
    component: AcontView
  },
  {
    path: '/lock',
    name: 'lock',
    component: LockView
  },
  {
    path: '/check-all',
    name: 'check-all',
    component: CheckAllView
  },
  {
    path: '/check-month',
    name: 'check-month',
    component: CheckMView
  },
  {
    path: '/table',
    name: 'table',
    component: TableView
  },
  {
    path: '/result',
    name: 'result',
    component: ResultView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
