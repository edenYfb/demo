<template>
	<div id="header" class="mui-bar mui-bar-transparent" v-show='navshow'>
		<a class="mui-action mui-icon mui-icon-bars mui-pull-left" v-tap='heheda'></a>
		<div id="header_search" class="search mui-pull-left">
			<a class="mui-action mui-icon mui-icon-search search_icon0 mui-pull-left"></a>
			<div type="text" class="search_input" v-tap='toSearch'></div>
			<router-link class="mui-action mui-icon mui-icon-loop search_icon1 mui-pull-right" to='self'></router-link>
		</div>
		<a class="mui-action mui-icon mui-icon-chatboxes mui-pull-right"></a>
	</div>
</template>
<script>
//import Header_search from './Header_search.vue'
import { mapMutations } from 'Vuex'

export default{
	data(){
		return {
			navshow:true
		}
	},
	computed:{
	},
	components:{
//		Header_search
	},
	watch:{
	  	$route(to, from){
	  		if(to.path== '/self'){
	  			this.$store.commit( 'NAV_HIDE' );
	  			this.navshow = this.$store.state.navshow.hide;
	  		}else{
	  			this.$store.commit( 'NAV_SHOW' );
	  			this.navshow = this.$store.state.navshow.show;
	  		}
	  	}
	},
	methods:{
		heheda:()=>{
			console.log(this)
		},
		toSearch:(event)=>{
			mui('.mui-off-canvas-wrap').offCanvas('show');
			aside_search_input.focus()
		}
	}
}
</script>
<style scoped>
#header a{
	color:#fff;
}
	.search{
		position: relative;
		margin-left:5%;
		width:80%;
	}
	.search_input{
		position:absolute;
		left:0;
		top:0;
		z-index:1;
		width:100%;
		height:32;
		float:left;
		margin-top:5px;
		height:32px !important;
		line-height: 32px !important;
		border-radius: 16px !important;
		border:1px solid #ccc;
		background-color:#ccc;
	}
	.search_icon0{
		left:5px;
		color:#000;
	}
	.search_icon1{
		right:5px;
	}
</style>