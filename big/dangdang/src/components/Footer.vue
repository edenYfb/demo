<template>
	<nav id="footer" class="mui-bar mui-bar-tab">
	  	<router-link to='home' v-ahref:home class="mui-tab-item mui-active">
			<span class="mui-icon mui-icon-home"></span>
			<span class="mui-tab-label">首页</span>
		</router-link>
		<router-link to='classify' v-ahref:classify class="mui-tab-item">
			<span class="mui-icon mui-icon-list"></span>
			<span class="mui-tab-label">分类</span>
		</router-link>
		<router-link to='discover' v-ahref:discover class="mui-tab-item">
			<span class="mui-icon mui-icon-navigate"></span>
			<span class="mui-tab-label">发现</span>
		</router-link>
		<router-link to='buy' v-ahref:buy class="mui-tab-item">
			<span class="mui-icon mui-icon-map"></span>
			<span class="mui-tab-label">购物车</span>
		</router-link>
		<router-link to='self' v-ahref:self class="mui-tab-item">
			<span class="mui-icon mui-icon-person"></span>
			<span class="mui-tab-label">我的</span>
		</router-link>
	</nav>
</template>
<style type="text/css" scoped>
#footer{
	position:absolute;
	bottom:-50px;
	z-index:3;
}	
</style>