<template>
	<div>
		<!--<a-breadcrumb>
		    <a-breadcrumb-item>
		    	<router-link :to="{name:'home'}">首页</router-link>
		    </a-breadcrumb-item>
		    <a-breadcrumb-item>人才载体信息库</a-breadcrumb-item>
		    <a-breadcrumb-item>重点实验室</a-breadcrumb-item>
		</a-breadcrumb>-->
		<a-tabs default-active-key="国家实验室">
		    <a-tab-pane v-for="item in tabList" :key="item.name" :tab="item.name">
				<tableTemplate 
					:tableUrl="item.url" 
					:name="item.name"
					:cityType="item.city"
				></tableTemplate>
		    </a-tab-pane>
	    </a-tabs>
	</div>
</template>

<script>
import tableTemplate from "./tableTemplate.vue"
export default{
	data(){ 
		return{
			tabList:[
				{"name":"国家实验室","city":"firstSupportingDeptRegion","url":"findNationalKeyLab"},
				{"name":"科研实验室","city":"city","url":"findEnpKeyLab"},
				{"name":"企业实验室","city":"city","url":"findscieKeyLab"},
			]
		}
	},
	components:{
		tableTemplate
	}, 
	methods:{
		
	},
	mounted(){
		
	}
}
</script>

<style>
</style>