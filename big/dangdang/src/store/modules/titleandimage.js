import * as types from '../mutations-type.js'

const state = {
	show:'top'
}

const mutations = {
	[types.IMAGE_TITLE_TOP](state){
		state.show = 'top'
	},
	[types.IMAGE_TITLE_RIGHT](state){
		state.show = 'right'
	},
	[types.IMAGE_TITLE_BOTTOM](state){
		state.show = 'bottom'
	},
	[types.IMAGE_TITLE_LEFT](state){
		state.show = 'left'
	}
}

export default {
	state,
	mutations
}
