<template>
	<div id="arrowback">
		<a class="mui-action mui-icon mui-icon-back mui-pull-left"></a>
	</div>
</template>
<script>
//import { mapMutations } from 'vuex'
export default {
	name:'icon_arrowback',
	data(){
		return {}
	},
	methods:{
		toback:(event)=>{
			alert(1)
//			window.location.history.back(-1);
		}
	}
}
</script>