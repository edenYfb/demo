import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/home/Home.vue'
import Classify from '../components/classify/Classify.vue'
import Discover from '../components/Discover.vue'
import Buy from '../components/Buy.vue'
import Self from '../components/Self.vue'
import Aside_search from '../components/Aside_search.vue'

Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
	{path: '/home', components: {main: Home, aside: Aside_search} },
	{path: '/classify', components: {main: Classify, aside: Aside_search} },
	{path: '/discover', components: {main: Discover, aside: Aside_search} },
	{path: '/buy', components: {main: Home, aside: Aside_search} },
	{path: '/self', components: {main: Self, aside: Aside_search} },
	{path: '/', redirect: '/home' },
  ]
})
