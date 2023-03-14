import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Home',
      component:  () => import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
      props: true
    },
    {
      path: '/services',
      name: 'Services',
      component:  () => import(/* webpackChunkName: "Services" */ "../views/Services.vue"),
      props: true
    },
    {
      path: '/warranty',
      name: 'Warranty',
      component:  () => import(/* webpackChunkName: "Warranty" */ "../views/Warranty.vue"),
      props: true
    },
    {
      path: '/reviews',
      name: 'Reviews',
      component:  () => import(/* webpackChunkName: "Reviews" */ "../views/Reviews.vue"),
      props: true
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router