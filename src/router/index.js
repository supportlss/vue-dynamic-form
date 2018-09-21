import Vue from 'vue'
import Router from 'vue-router'
import FormDemo from '@/views/FormDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FormDemo',
      component: FormDemo
    }
  ]
})
