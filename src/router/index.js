import Vue from 'vue'
import Router from 'vue-router'
import Cipher from '@/components/Cipher'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Cipher
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ],
  linkActiveClass: 'active'
})
