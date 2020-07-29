<template>
	<div>
		<h1 class="title">
			园区企业列表
		</h1>
		<h1 class="title-card">
			<span class="text-blue">
			{{parkName}}
			产业园区
			</span>
			有企业{{tableTotal}}家，信息如下
		</h1>
		<a-table 
			:loading="tableLoading" 
			:columns="columns" 
			:data-source="tableData" 
			:pagination="pageObj" 
			@change="tableChage"
			class="m-top"
		>
			<!--<router-link 
				slot="name" 
				slot-scope="text,val" 
				@click="viewUrl(val.name)"
				:to="viewHref"
			>
				详情
			</router-link>-->
          	<a slot="name"  target="_blank" slot-scope="text,val" @click="viewUrl(val.name)">详情 </a>
          		
          	
		</a-table>
		
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
	    title: '企业名称',
	    dataIndex: 'name',
	    key: 'name',
	    align:'center',
	    width:250
    },{
	    title: '注册资金',
	    dataIndex: 'registerFunds',
	    key: 'registerFunds',
	    align:'center'
	    //scopedSlots: { customRender: 'name' },
    },{
	    title: '注册时间',
	    dataIndex: 'registerTime',
	    key: 'registerTime',
	    align:'center'
	    //scopedSlots: { customRender: 'name' }
  	},{
	    title: '经营范围',
	    dataIndex: 'businessScope',
	    key: 'businessScope',
	    align:'center' ,
	    width:350
  	},{
  		title: '详情',
	    key: 'type',
	    align:'center',
	    scopedSlots: { customRender: 'name' }
  	}
];
export default{
	data(){
		return{
			tableTotal:0,
      		columns,
			pageObj:{"pageSize":10,"total": 10,"current":1},
			tableLoading:true,
			cardClass:"card-hide",
			formModel:{
				"id":0,
				"page":1
			},
			tableData:[],
			parkName:"0",
			viewHref:""
		}
	},
	components:{
	}, 
	methods:{
		tableChage(pagination){//分页切换
			this.tableLoading = true;//表格加载中
			this.pageObj.current = pagination.current;//当前页
			this.formModel.page = pagination.current;
			this.tableList();
		},
		tableList(){
			let obj = this.formModel;
			let url = "findEnpByParkId";
			let _this = this;
			//console.log(obj)
			this.backstage.tableList(obj,url,_this);
		},
		viewUrl(name){
			//console.log(name)
			var obj = {"name":name};
			this.backstage.viewUrl(this,obj)
		}
	},
	mounted(){
		//this.viewUrl("汕头市海纳教育咨询有限公司");
		this.tableList();
	},
	created(){
	      //获取传入的参数
	      this.formModel.id = this.$route.query.id;
	      this.parkName = this.$route.query.name;
	}
}
</script>

<style>
</style>