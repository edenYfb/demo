<template>

  	<div class="mui-scroll">
        <ul class="mui-table-view mui-table-view-chevron" id='main_ul'>
			<keep-alive>
				<lunbo v-bind:lunbodatas='lunbodatas'></lunbo>
			</keep-alive>
			<btnimages v-bind:btndatas='btndatas'></btnimages>
			<banner v-bind:bannerdatas='bannerdatas[0]'></banner>
			<lanmu v-bind:lanmudatas='lanmu_datas.miaosha'>
				<daojishi v-bind:time='8' slot='title'></daojishi>
			</lanmu>
			<lanmu v-bind:lanmudatas='lanmu_datas.zhutiguan'></lanmu>
			<banner v-bind:bannerdatas='bannerdatas[1]'></banner>
			<lanmu v-bind:lanmudatas='lanmu_datas.shangou'></lanmu>
		</ul>
  	</div>

</template>
<script type="text/javascript">
//功能组件
import lunbo from '../common/Lunbo.vue'
import banner from '../common/Banner.vue'
import daojishi from '../common/Small_daojishi.vue'
//样式组件
import btnimages from './Home_btn.vue'
import lanmu from './lanmu/Home_lanmu.vue'

//数据获取
import datas from '../../datas.js'

export default{
	data(){
		return datas
	},
	components:{
		lunbo,
		btnimages,
		banner,
		lanmu,
		daojishi
	},
	methods:{
	},
	mounted:()=>{
//		mui('#main').scroll();
	}
}
</script>
