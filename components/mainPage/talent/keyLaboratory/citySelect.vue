<template>
	<div>
		<a-select  :loading="cityLoad" v-model="cityModel" @change="cityChange">
			<a-select-option 
				v-for="(cityItem,key) in cityList"
				:value="cityItem.addr" 
				:key="cityItem.code"
			>
	          	{{cityItem.addr}}
	        </a-select-option>
		</a-select>
	</div>
</template>

<script>
export default{
	data(){
		return{
			cityList:[{"addr":"不限"}],
			cityLoad:true
		}
	},
	components:{
	},
	props:["cityModel"],
	methods:{
		city(){
			
		},
		cityChange(name,opt){//name必须有
			//console.log(opt.key)
			//var _this = this;
			//this.backstage.cityChange(opt.key,_this)
			this.$emit("cityChange");
		}

	},
	mounted(){
		this.city();
	}
}
</script>

<style>
</style>