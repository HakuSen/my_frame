import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Help from '@/components/help'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    }
  ]
})
