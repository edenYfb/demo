<template>
	<div id="aside_search_header" class="mui-bar mui-bar-nav">
		<!--<a class="mui-action mui-icon mui-icon-back mui-pull-left" v-on:tab='back'></a>-->
		<arrowback></arrowback>
		<input id="aside_search_input" type="text" placeholder='请输入' class="mui-pull-left"/>
	</div>
</template>
<script>
import arrowback from './Icon_arrowback.vue'
export default {
	name:'aside_search_header',
	data(){
		return {}
	},
	components:{
		arrowback
	},
	methods:{
//		back:(event)=>{
//			mui( '#app' ).offCanvas( 'close' );
//			aside_search_input.value = '';
//		}
	}
}
</script>
<style type="text/css">
#aside_search_header>input{
	width:80%;
	height:32px;
	line-height: 32px;
	margin:5px 0 0 20px;
	border-radius:16px;
}
</style>