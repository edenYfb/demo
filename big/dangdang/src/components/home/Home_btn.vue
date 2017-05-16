<template>
	<ul id="btn_classify" class="btnimages">
		<li v-for='btn in btndatas'>
			<a v-bind:href="btn.href">
				<img v-bind:src="btn.img"/>
			</a>
		</li>
	</ul>
</template>
<script type="text/javascript">
export default{
	props:['btndatas']
}
</script>
<style scoped>
	.btnimages{
		display: block;
		margin:0;
		overflow: hidden;
	}
	.btnimages li{
		float:left;
		width:20%;
		margin:0;
	}
	.btnimages img{
		width:100%;
	}
</style>