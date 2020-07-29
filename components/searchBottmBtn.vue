<template>
	<div>
		<a-button type="primary"  html-type="submit">
			查询
		</a-button>
		<a-button @click="reset">
			重置
		</a-button>
		<a-button type="link" @click="state">
	     	{{searchStateText}}<a-icon :type="icon"/>
	    </a-button>
	</div>
</template>

<script>
export default{
	data(){
		return{
			//searchCardState:false,
			searchStateText:"更多",
			icon:"down",
			state:this.searchCardState
		}
	},
	props:["searchCardState"],
	methods:{
		state(){
			this.$emit("state");
		},
		reset(){
			this.$emit("reset");
		}
	},
	mounted(){
	}
}
</script>

<style>
</style>