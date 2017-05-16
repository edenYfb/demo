<template>
	<a v-bind:href='bannerdatas.href' class="banner">
		<img v-bind:src='bannerdatas.img'/>
	</a>
</template>

<script>
export default{
	props:['bannerdatas']
}
</script>
<style>
.banner{
	display: block;
	width:100%;
}
.banner>img{
	width:100%;
}
</style>