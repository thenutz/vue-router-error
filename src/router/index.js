import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/protected',
    name: 'protected',
    component: () => import(/* webpackChunkName: "about" */ '../views/Protected.vue'),
    async beforeEnter (to, from, next) {
      console.log('before fired')
      try {
        const authStatus = await store.dispatch('pingAuth', 'checkAuth')
        if (authStatus) next()
        else next('/login')
      } catch (error) {
        console.log(error)
        next('/')
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
