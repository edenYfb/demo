import * as types from '../mutations-type.js'

const state = {
	show:true
}

const mutations = {
	[types.NAV_SHOW](state){
		state.show = true
	},
	[types.NAV_HIDE](state){
		state.show = false
	},
}

export default {
	state,
	mutations
}
