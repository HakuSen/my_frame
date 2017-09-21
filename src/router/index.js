import Vue from 'vue'
import Router from 'vue-router'
import Help from '@/components/help'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/help',
      name: 'help',
      component: Help
    }
  ]
})
