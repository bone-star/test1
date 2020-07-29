<template>
	<div>
		<!--<a-breadcrumb>
		    <a-breadcrumb-item>
		    	<router-link :to="{name:'home'}">首页</router-link>
		    </a-breadcrumb-item>
		    <a-breadcrumb-item>人才载体信息库</a-breadcrumb-item>
		    <a-breadcrumb-item>工程技术研究中心</a-breadcrumb-item>
		</a-breadcrumb>-->
		<h1 class="title">查询条件</h1>
		<a-card :bordered="false">
			<a-form class="ant-advanced-search-form" id="searchForm"  @submit="submitForm">
				<div :class="cardClass" class="search-box" >
					<a-row :gutter="24" >
						<a-col :md="{span:8}" :lg="{span:8}" >
							<a-form-item label="中心名称" :label-col="{ span: 7 }" :wrapper-col="{ span: 17}">
							    <a-input  placeholder="请输入中心名称" v-model="formModel.researchCenterName"/>
						    </a-form-item>					
						</a-col>
						<a-col :md="{span:8}" :lg="{span:8}">
							<a-form-item label="依托单位" :label-col="{ span: 7 }"  :wrapper-col="{ span: 17}">
								 <a-input  placeholder="请输入依托单位" v-model="formModel.supportingUnit"/>
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
			工程技术研究中心
			&nbsp;&nbsp;
			<span>
			共查询到
			<span class="text-red">{{tableTotal}}</span>
			条记录
			</span>
		</h1>
		<a-spin tip="Loading..." :spinning="tableLoading">
			<a-table :columns="columns" :data-source="tableData" :pagination="pageObj" @change="tableChage">
				  <a slot="name" target="_blank" slot-scope="text,val" @click="viewUrl(val.name)">{{ text }} </a>
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
	    title: '中心名称',
	    dataIndex: 'researchCenterName',
	    key: 'researchCenterName',
	    align:'center'
	    //scopedSlots: { customRender: 'name' },
    },{
	    title: '依托单位名称',
	    dataIndex: 'supportingUnit',
	    key: 'supportingUnit',
	    align:'center',
	    scopedSlots: { customRender: 'name' },
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
				"researchCenterName":"",
				"supportingUnit":"",
				"page":1
			}
		}
	},
	components:{
	}, 
	methods:{
		viewUrl(name){
			//console.log(name)
			var obj = {"name":name};
			this.backstage.viewUrl(this,obj,"工程技术研究中心","researchCenter")
		},
		searchReset(){
			this.formModel = {
				"researchCenterName":"",
				"supportingUnit":"",
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
			let url = "findEgTechRchCenterByConditionAndPage";
			let _this = this;
			this.backstage.tableList(obj,url,_this);
		}
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