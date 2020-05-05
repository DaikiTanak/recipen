import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue' // added

import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import mybody from '@/components/mybody'
import saved from '@/components/saved'

Vue.use(Router)
Vue.use(BootstrapVue) // added

import 'bootstrap/dist/css/bootstrap.css' // added
import 'bootstrap-vue/dist/bootstrap-vue.css' // added

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: mybody
    },
    {
      path: '/saved',
      name: 'saved_dishes',
      component: saved
    },
  ]
})
