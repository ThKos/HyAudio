import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import KE1 from '@/components/KE1'
import KE2 from '@/components/KE2'
import KE3 from '@/components/KE3'
import AbVerz from '@/components/AbVerz'
import StWortVerz from '@/components/StWortVerz'
import keView from '@/components/keView'
import favoriteView from '@/components/favoriteView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/KE1',
      name: 'KE1',
      component: KE1
    },
    {
      path: '/KE2',
      name: 'KE2',
      component: KE2
    },
    {
      path: '/KE3',
      name: 'KE3',
      component: KE3
    },
    {
      path: '/AbVerz',
      name: 'AbVerz',
      component: AbVerz
    },
    {
      path: '/StWortVerz',
      name: 'StWortVerz',
      component: StWortVerz
    },
    {
      path: '/keView:id',
      name: 'keView',
      component: keView,
      props: {
        startSecond: {
          default: 0.0,
          type: Number
        }
      }
    },
    {
      path: '/favoriteView',
      name: 'favoriteView',
      component: favoriteView
    }
  ]
})
