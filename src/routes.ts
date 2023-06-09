import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './App.vue'
import Tooltip from './Examples/Tooltip/index.vue'
import Table from './Examples/Table/Index.vue'

/* eslint-disable */

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: Home },
  { path: '/tooltip', name: 'Tooltip', component: Tooltip },
  { path: '/table', name: 'Table', component: Table }

]


const router = createRouter({
  history: createWebHistory(''),
  routes,
})

export default router
