<template>
	<div>
		<!--<a-breadcrumb>
		    <a-breadcrumb-item>
		    	<router-link :to="{name:'home'}">首页</router-link>
		    </a-breadcrumb-item>
		    <a-breadcrumb-item>项目信息库</a-breadcrumb-item>
		    <a-breadcrumb-item>广东重点实验室项目</a-breadcrumb-item>
		</a-breadcrumb>-->
		<h1 class="title">查询条件</h1>
		<a-card :bordered="false">
			<a-form class="ant-advanced-search-form" id="searchForm"  @submit="submitForm">
				<div :class="cardClass" class="search-box" >
					<a-row :gutter="24" >
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="项目名称" :label-col="{ span: 9 }" :wrapper-col="{ span: 15}">
							    <a-input  placeholder="请输入项目名称" v-model="formModel.itemName"/>
						    </a-form-item>					
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="申报单位" :label-col="{ span: 9 }" :wrapper-col="{ span: 15}">
							    <a-input  placeholder="请输入申报单位" v-model="formModel.applicationUnit"/>
						    </a-form-item>					
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="拟拨付金额" :label-col="{ span: 9 }">
								<a-col :span="7"><a-input placeholder="0" suffix="万元" v-model="formModel.startFunds"/></a-col>
							    <a-col :span="1" align="center">-</a-col>
							    <a-col :span="7"><a-input placeholder="0" suffix="万元" v-model="formModel.endFunds"/></a-col>
							</a-form-item>			
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="拟立项金额" :label-col="{ span: 9 }">
								<a-col :span="7"><a-input placeholder="0" suffix="万元" v-model="formModel.lStartFunds"/></a-col>
							    <a-col :span="1" align="center">-</a-col>
							    <a-col :span="7"><a-input placeholder="0" suffix="万元" v-model="formModel.lendFunds "/></a-col>
							</a-form-item>			
						</a-col>
						
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="年份" :label-col="{ span: 9 }"  :wrapper-col="{ span: 15}">
								<a-select v-model="formModel.proDate">
								    <a-select-option v-for="year in yearList" :value="year">
								        {{year}}
								    </a-select-option>
							   </a-select>
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="负责人" :label-col="{ span: 9 }"  :wrapper-col="{ span: 15}">
								<a-input placeholder="请输入负责人" v-model="formModel.chargePerson"/>
							</a-form-item>
						</a-col>
					</a-row>
				</div>
				<div class="card-footer flex-center">
			      	<a-button type="primary"  html-type="submit">
						查询
					</a-button>
					<a-button @click="searchReset">
						重置
					</a-button>
					<a-button type="link" @click="searchState" v-if="searchBottomBtn">
				     	{{searchStateText}}<a-icon :type="icon"/>
				    </a-button>
				</div>
			</a-form>
		</a-card>
		
		<h1 class="title">
			广东重点实验室项目
			&nbsp;&nbsp;
			<span>
			共查询到
			<span class="text-red">{{tableTotal}}</span>
			条记录
			</span>
		</h1>
		<a-spin tip="Loading..." :spinning="tableLoading">
			<a-table :columns="columns" :data-source="tableData" :pagination="pageObj" @change="tableChage">
				<a target="_blank" slot="name" slot-scope="text,val" @click="viewUrl(val.name)">{{ text }} </a>
			</a-table>
		</a-spin>
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
	    title: '项目名称',
	    dataIndex: 'itemName',
	    key: 'itemName',
	    width:250,
	    align:'center'
	    //scopedSlots: { customRender: 'name' },
    },{
	    title: '申报单位',
	    dataIndex: 'applicationUnit',
	    key: 'applicationUnit',
	    align:'center',
	    scopedSlots: { customRender: 'name' }
  	},{
	    title: '负责人',
	    dataIndex: 'chargePerson',
	    key: 'chargePerson',
	    align:'center' 
  	},{
	    title: '立项年份',
	    dataIndex: 'proDate',
	    key: 'proDate',
	    align:'center' 
  	},{
	    title: '拟立项金额(万元)',
	    dataIndex: 'proposedAmount',
	    key: 'proposedAmount',
	    align:'center' 
  	},{
	    title: '拟拨付金额(万元)',
	    dataIndex: 'proposedAppropriationAmount',
	    key: 'proposedAppropriationAmount',
	    align:'center' 
  	}
];
export default{
	data(){
		return{
			searchStateText:"更多",
			icon:"down",
			searchBottomBtn:false,
			tableData:[],
			tableTotal:0,
      		columns,
			pageObj:{"pageSize":10,"total": 10,"current":1},
			tableLoading:true,
			cardClass:"card-hide",
			formModel:{
				"itemName":"",
				"applicationUnit ":"",
				"startFunds":"",
				"endFunds":"",
				"lStartFunds":"",
				"lendFunds":"",
				"proDate":"请选择",
				"chargePerson":"",
				"page":1
			},
			yearList:this.backstage.yearD()
		}
	},
	components:{
	}, 
	methods:{
		viewUrl(name){
			//console.log(name)
			var obj = {"name":name};
			this.backstage.viewUrl(this,obj,"广东重点实验室","keyTestProject")
		},
		searchReset(){
			this.formModel = {
				"itemName":"",
				"applicationUnit ":"",
				"startFunds":"",
				"endFunds":"",
				"lStartFunds":"",
				"lendFunds":"",
				"proDate":"请选择",
				"chargePerson":"",
				"page":1
			};
			this.formModel.page = this.pageObj.current = 1;//表格回到第一页
			this.tableLoading = true;
			this.tableList();
		},
		searchState(){
			if(this.searchStateText == "收起"){
				this.searchStateText = "更多";
				this.icon = "down";
				this.cardClass = "card-hide";
			}else{
				this.searchStateText = "收起";
				this.icon = "up";
				this.cardClass = "card-show";
			}
		},
		submitForm(e){
			e.preventDefault();//禁止提交刷新
			this.tableLoading = true;
			this.formModel.page = this.pageObj.current = 1;//表格回到第一页
			this.tableList();
		},
		tableChage(pagination){//分页切换
			this.tableLoading = true;//表格加载中
			this.pageObj.current = pagination.current;//当前页
			this.formModel.page = pagination.current;
			this.tableList();
		},
		tableList(){
			let obj = this.formModel;
			let url = "findKeyLabProByConditionAndPage";
			let _this = this;
			this.backstage.tableList(obj,url,_this);
		},
	},
	mounted(){
		this.tableList();
		var searchBox = document.getElementsByClassName("search-box")[0];
		var row = searchBox.getElementsByClassName("ant-row")[0];
		this.searchBottomBtn = this.backstage.search.open(row);
	}
}
</script>

<style>
</style>