<template>
	<div class="lanmu_title" id="lanmu_title">
		<span class="title mui-pull-left">{{title.title_left}}</span>
		<span class="mui-pull-left" v-if=''>
			<slot></slot>
		</span>
		<span class="mui-pull-right">
			<a href="">
				<span>{{title.title_right}}</span>
				<span class="mui-icon mui-icon-forward" v-show='title.iconshow'></span>
			</a>
		</span>
	</div>
</template>

<script>
export default{
	name:'lanmu_title',
	props:['title']
}
</script>

<style scoped>
.lanmu_title{
	padding:5px 0 10px 5px;
	overflow: hidden;
	margin-top:10px;
	background-color:#fff
}
.lanmu_title>.title{
	font-weight:800;
	margin-right:10px;
}
</style>