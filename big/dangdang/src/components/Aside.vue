<template>
	<div id="aside" class="mui-off-canvas-right">
      <div class="mui-scroll-wrapper">
        <div class="mui-scroll">
          <!-- 菜单具体展示内容 -->
          <router-view name='aside'></router-view>
        </div>
      </div>
    </div>
</template>
<script type="text/javascript">
import aside_search from './Aside_search.vue'
export default{
	components:{
		aside_search
	}
}
</script>