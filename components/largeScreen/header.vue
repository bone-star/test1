<template>
	<div class="header">
		<span>{{headerTitle}}</span>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				 
			}
		},
		components:{  
		}, 
		props:["headerTitle"],
		methods:{
		}
	}
</script>
<style scoped="scoped">
.header span{
	font-family: "华康新综艺W7(P)";
    color: #00faff;
    font-weight: 100;
    font-size: 2rem;
}
</style>