import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Tags from '../views/Tags'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ma11ystodon/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ma11ystodon/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/ma11ystodon/tags/:id',
    name: 'Tags',
    component: Tags
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router