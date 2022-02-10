import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './App.vue'
import Tooltip from './Examples/Tooltip/index.vue'

/* eslint-disable */

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: Home },
  { path: '/tooltip', name: 'Tooltip', component: Tooltip }

]


const router = createRouter({
  history: createWebHistory(''),
  routes,
})

export default router
