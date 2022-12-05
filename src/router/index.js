import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'
import Tags from '../views/Tags'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/tags/:id',
    name: 'tags',
    component: Tags
  }
]
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})
export default router