// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VModal from 'vue-js-modal'
import InstantSearch from 'vue-instantsearch'

Vue.use(VModal, { dynamic: true })
Vue.use(InstantSearch)
Vue.config.productionTip = false

require('./popcorn/popcorn')
require('./popcorn/popcorn.code')
require('./popcorn/popcorn.subtitle')
require('./popcorn/popcorn.image')
require('./popcorn/popcorn.timeline')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    message: 'Hi'
  },
  router,
  template: '<App/>',
  components: { App }
})
