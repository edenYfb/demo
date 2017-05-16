import * as types from '../mutations-type.js'

const state = {
	asideshow:true
}

const mutations = {
	[types.ASIDE_SHOW](state){
		state.asideshow = true
	},
	[types.ASIDE_HIDE](state){
		state.asideshow = false
	},
}

export default {
	state,
	mutations
}
