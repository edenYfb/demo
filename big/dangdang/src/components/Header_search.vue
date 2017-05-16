<template>
	<div id="header_search" class="search mui-pull-left">
		<a class="mui-action mui-icon mui-icon-search search_icon0 mui-pull-left"></a>
		<div type="text" class="search_input" v-tap='toSearch'></div>
		<router-link class="mui-action mui-icon mui-icon-loop search_icon1 mui-pull-right" to='self'></router-link>
	</div>
</template>
<script>
export default{
	name:'header_search',
	data(){
		return{
			searchCheck:true
		}
	},
	computed:{
		
	},
	methods:{
		toSearch:(event)=>{
//			mui( '#app' ).offCanvas( 'show' );
			mui('.mui-off-canvas-wrap').offCanvas('show');
			aside_search_input.focus()
		},
		heheda:()=>{
			alert(31)
		}
	}
}
</script>
<style scopeed>
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