import Vue from 'vue'

import App from './App.vue'
import store from './store'
import router from'./router'
import { sync } from 'vuex-router-sync'

//指令
import * as directives from './directive'
Object.keys(directives).forEach(key=> Vue.directive( key, directives[key]))

sync(store, router)


new Vue({
  el:'#app',
  router,
  store,
  render:h=>h(App)
})

