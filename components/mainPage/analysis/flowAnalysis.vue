<template>
	<div id="clear">
		<button @click="clear">清楚</button>
		<wTable ref="child" :columns="columns" :title="123" :model="formModel"></wTable>
	</div>
</template>

<script>
const columns = [
	{
		title: '序号',
	    dataIndex: 'key',
	    key: 'i',
	    width:80,
	    align:"center" 
	    //scopedSlots: { customRender: 'name' },
    },{
	    title: '进驻院士',
	    dataIndex: 'mvAcademician',
	    key: 'mvAcademician',
	    align:'center'
    },{
	    title: '单位名称',
	    dataIndex: 'unit',
	    key: 'unit',
	    align:'center',
	    width:250,
	    scopedSlots: {
	    	customRender: 'name'
	    }
    },{
	    title: '所在地区',
	    dataIndex: 'location',
	    key: 'location',
	    align:'center'
	    //scopedSlots: { customRender: 'name' },
    },{
	    title: '技术领域',
	    dataIndex: 'technicalField',
	    key: 'technicalField',
	    align:'center'
	    //scopedSlots: { customRender: 'name' }
  	},{
	    title: '认定时间',
	    dataIndex: 'identityTime',
	    key: 'identityTime',
	    align:'center' 
  	},{
	    title: '项目开始时间',
	    dataIndex: 'itemStartTime',
	    key: 'itemStartTime',
	    align:'center' 
  	},{
	    title: '项目结束时间',
	    dataIndex: 'itemStartEnd',
	    key: 'itemStartEnd',
	    align:'center' 
  	}
];
import wTable from "../../tableTemplate.vue";
export default{
	data(){
		return{
			columns,
			formModel:{
				"name":"",
				"unit":"深",
				"field":"",
				"region":"不限"
			}
		}
		
	},
	components:{
		wTable
	},
	methods:{
		clear(){
			this.$refs.child.formModel = {
				"name":"",
				"unit":"中",
				"field":"",
				"region":"不限"
			}
			
		}
	},
	mounted(){
		//this.tableList();
	}
}
</script>

<style>
</style>