<template>
	<div>
		<!--<a-breadcrumb>
		    <a-breadcrumb-item>
		    	<router-link :to="{name:'home'}">首页</router-link>
		    </a-breadcrumb-item>
		    <a-breadcrumb-item>人才信息库</a-breadcrumb-item>
		    <a-breadcrumb-item>党政人才</a-breadcrumb-item>
		</a-breadcrumb>-->
		<a-tabs type="card" class="m-top">
		    <a-tab-pane key="1" tab="党政人才高端人才">
		      <highTalents></highTalents>
		    </a-tab-pane>
		    <a-tab-pane key="2" tab="党政人才上市高管">
		      <listTalents></listTalents>
		    </a-tab-pane>
		</a-tabs>
	</div>
</template>

<script>
//页面引入
import highTalents from './highTalents.vue';
import listTalents from './listTalents.vue';
export default{
	data(){
		return{
			collapsed: true
		}
	},
	components:{
		highTalents,
		listTalents
	},
	methods:{
 		callback(key) {
 			
	    }
	},
	mounted(){
		
	}
	
}
</script>

<style scoped="scoped">
	.m-top{
		margin-top: 0.5rem;
	}
</style>