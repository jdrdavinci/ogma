import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './Home.vue'
import Students from './Students.vue'

import Custom from './Custom.vue'

Vue.use(VueRouter)

Vue.component('my-custom', Custom)

const router = new VueRouter({
  //mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/student', component: Students }
  ]
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})