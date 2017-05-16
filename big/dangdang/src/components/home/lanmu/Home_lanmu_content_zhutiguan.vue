<template>
	<div class="lanmucontent_zhutiguan">
		<div v-for='data in content' class="item">
			<a href="data.href">
				<div>
					<p class="title">{{data.title0}}</p>
					<p class='tips'>{{data.title1}}</p>
				</div>
				<img v-bind:src="data.img"/>
			</a>
		</div>
	</div>
</template>

<script>
export default{
	props:['content']
}
</script>

<style scoped>
.item{
	display:inline-block;
	width:50%;
	height:80px;
	padding:5px 5px 5px 0px;
	float:left;
	background-color:#fff;
}
.item>a{
	display: block;
	width:100%;
	height:100%;
}
.item div{
	display: inline-block;
	width:60%;
	float:left;
	padding: 2% 2% 0 5%;
}
.item div>p{
	text-align: left;
	margin:0;
}
.item .title{
	font-size:15px;
	font-weight:800;
	color:#000;
}
.item .tips{
	font-size:12px;
	font-weight:600;
	color:#555;
}
.item img{
	max-width:40%;
	max-height:100%;
	float: left;
}


</style>