<template>
	<div>
		<a-form class="ant-advanced-search-form" id="searchForm"  @submit="submitForm">
			<a-form-item label="项目名称">
			    <a-input  placeholder="请输入项目名称" v-model="formModel.name"/>
		    </a-form-item>	
	    
			<a-button type="primary"  html-type="submit">
				查询
			</a-button>
			<a-button @click="searchReset">
				重置
			</a-button>
		</a-form>
		<wTable
			:columns="column"
			tableUrl="findItemByConditionAndPage"
			:model="formModel"
			title="国家重点项目列表"
			ref="mychild"
			:viewUrl="viewUrl"
		></wTable>
	</div>
</template>

<script>
const column = [
	{
		title: '序号',
	    dataIndex: 'key',
	    key: 'i',
	    width:80,
	    align:"center" 
	    //scopedSlots: { customRender: 'name' },
    },{
	    title: '项目名称',
	    dataIndex: 'itemName',
	    key: 'itemName',
	    width:250,
	    align:'center'
	    
	    //scopedSlots: { customRender: 'name' },
    },{
	    title: '承担单位',
	    dataIndex: 'bearUnit',
	    key: 'bearUnit',
	    align:'center' ,
	    scopedSlots: { customRender: 'name' }
  	},{
	    title: '项目负责人',
	    dataIndex: 'itemChargePerson',
	    key: 'itemChargePerson',
	    align:'center' 
  	},{
	    title: '经费',
	    dataIndex: 'funds',
	    key: 'funds',
	    align:"center" ,
	    align:'center' 
  	},{
	    title: '项目实施周期',
	    dataIndex: 'proImplCycle',
	    key: 'proImplCycle',
	    align:'center' 
  	},{
	    title: '所属专项',
	    dataIndex: 'specialPro',
	    key: 'specialPro',
	    align:'center' 
  	},{ 	
  		title: '立项时间',
	    dataIndex: 'proTime',
	    key: 'proTime',
	    align:'center' 
  	}
];
import wTable from '@/components/tableTemplate.vue'
export default{
	data(){
		return{
			formModel:{
				"name":"",
				"unit":"",
				"chargePerson":"",
				"specialPro":"",
				"startDate":"",
				"endDate":"",
				"startFunds":"",
				"endFunds":""
			},
			column
		}
	},
	components:{
		wTable
	},

	methods:{
		
		viewUrl(name){
			//console.log(name)
			var obj = {"name":name};
			this.backstage.viewUrl(this,obj,"国家重点项目","keyProject")
		},
		searchReset(){
			var model = this.$refs.mychild.model;//访问已经被赋值的model，不可直接改变
			Object.keys(model).forEach((v,i)=>{
				if(v != "page"){
					model[v] = ""
				}else{
					model[v] = 1
				}
				//console.log(v)
			})
			this.$refs.mychild.tableLoading = true;
			this.$refs.mychild.model.page = this.$refs.mychild.pageObj.current = 1;//表格回到第一页
			this.$refs.mychild.tableList();
		},
		submitForm(e){
			e.preventDefault();//禁止提交刷新
			
			this.$refs.mychild.tableLoading = true;
			//console.log(this.$refs.mychild.pageObj)
			this.$refs.mychild.model.page = this.$refs.mychild.pageObj.current = 1;//表格回到第一页
			this.$refs.mychild.tableList();
		}
	},
	mounted(){
		
	}
}
</script>

<style>
</style>