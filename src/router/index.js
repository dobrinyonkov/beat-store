import Vue from 'vue'
import Router from 'vue-router'

import BeatDetails from '@/components/BeatDetails'
import BeatContainer from '@/components/BeatContainer'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, 
    {
      path: '/store',
      name: 'BeatContainer',
      component: BeatContainer
    }, 
    {
      path: '/beat/2',
      name: 'BeatDetails',
      component: BeatDetails
    }
  ]
})
