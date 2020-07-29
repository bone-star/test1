<template>
	<div>
		<!--<a-breadcrumb>
		    <a-breadcrumb-item>
		    	<router-link :to="{name:'home'}">首页</router-link>
		    </a-breadcrumb-item>
		    <a-breadcrumb-item>人才信息库</a-breadcrumb-item>
		    <a-breadcrumb-item>上市企业经营管理人才</a-breadcrumb-item>
		</a-breadcrumb>-->
		<a-tabs type="card" class="m-top">
		    <a-tab-pane key="上市" tab="上市企业经营管理人才">
		      <listBusiness/>
		    </a-tab-pane>
		    <a-tab-pane key="非上市" tab="非上市企业经营管理人才">
		      <enterprise/>
		    </a-tab-pane>
		</a-tabs>
	</div>
</template>

<script>
//页面引入
import listBusiness from './listBusiness.vue';
import enterprise from './enterprise.vue';
export default{
	data(){
		return{
			collapsed:true
		}
	},
	components:{
		listBusiness,
		enterprise
	},
	methods:{
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