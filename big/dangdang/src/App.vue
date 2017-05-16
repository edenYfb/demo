<template>
	<div class="mui-off-canvas-wrap mui-draggable" id='app'>
	  <!-- 主页面容器 -->
	  <div class="mui-inner-wrap">
	    <!-- 菜单容器 -->
		<appAside></appAside>
	    <!-- 主页面标题 -->
	    <appHeader></appHeader>
	    <!-- 主页面内容 -->
	    <div class="mui-content mui-scroll-wrapper" id="main">
		        	<transition name='fade'>
			        	<keep-alive>
			        		<router-view name='main'></router-view>
			        	</keep-alive>
		        	</transition>
	    </div>  
	   	<!-- 主页面底部 -->
	    <appFooter></appFooter>
	  </div><!--end 主页面容器-->
	</div><!--end 侧滑导航容器 #app-->
</template>
<script>
//加载组件
import appHeader from './components/Header.vue';
import appFooter from './components/Footer.vue';
import appAside from './components/Aside.vue';

export default {
  name: 'app',
  beforeCreate:()=>{
   	mui.init();
  },
  mounted:()=>{
  	//轮播设置
  	mui('.mui-slider').slider({interval:2000});
	//禁止手动侧滑
//	document.querySelector('.mui-inner-wrap').addEventListener('drag', function(event) {
//	    event.stopPropagation();
//	});
	//允许滚动
  	mui('#main').scroll();
  },
  components:{
  	appHeader,
  	appFooter,
  	appAside
  }
}
</script>
<style>
body{
	
	background-color:#333 !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-bottom:50px;*/
  position:relative;
  padding-bottom:50px;
  /*margin-top: 60px;*/
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.mui-off-canvas-left, .mui-off-canvas-right{
  width: 100% !important;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
