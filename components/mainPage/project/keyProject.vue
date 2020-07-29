<template>
	<div>
		<!--<a-breadcrumb>
		    <a-breadcrumb-item>
		    	<router-link :to="{name:'home'}">首页</router-link>
		    </a-breadcrumb-item>
		    <a-breadcrumb-item>项目信息库</a-breadcrumb-item>
		    <a-breadcrumb-item>国家重点专项</a-breadcrumb-item>
		</a-breadcrumb>-->
		<h1 class="title">查询条件</h1>
		<a-card :bordered="false">
			<a-form class="ant-advanced-search-form" id="searchForm"  @submit="submitForm">
				<div :class="cardClass">
					<a-row :gutter="24" >
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="项目名称" :label-col="{ span: 9 }" :wrapper-col="{ span: 15}">
							    <a-input  placeholder="请输入项目名称" v-model="formModel.name"/>
						    </a-form-item>					
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="承担单位名称" :label-col="{ span: 9 }" :wrapper-col="{ span: 15}">
							    <a-input  placeholder="请输入承担单位名称" v-model="formModel.unit"/>
						    </a-form-item>					
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="项目负责人" :label-col="{ span: 9 }" :wrapper-col="{ span: 15}">
							    <a-input  placeholder="请输入项目负责人" v-model="formModel.chargePerson"/>
						    </a-form-item>					
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="所属专项" :label-col="{ span: 9 }" :wrapper-col="{ span: 15}">
								<a-input placeholder="请输入所属专项" v-model="formModel.specialPro"/>
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="立项时间" :label-col="{ span: 9 }">
								<a-col :span="7"><a-input placeholder="0000" suffix="年" v-model="formModel.startDate"/></a-col>
							    <a-col :span="1" align="center">-</a-col>
							    <a-col :span="7"><a-input placeholder="2020" suffix="年" v-model="formModel.endDate"/></a-col>
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="经费" :label-col="{ span: 9 }">
								<a-col :span="7"><a-input placeholder="0" suffix="元" v-model="formModel.startFunds"/></a-col>
							    <a-col :span="1" align="center">-</a-col>
							    <a-col :span="7"><a-input placeholder="0" suffix="元" v-model="formModel.endFunds"/></a-col>
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
					<a-button type="link" @click="searchState">
				     	{{searchStateText}}<a-icon :type="icon"/>
				    </a-button>
				</div>
			</a-form>
		</a-card>
		
		<h1 class="title">
			国家重点项目列表
			&nbsp;&nbsp;
			<span>
			共查询到
			<span class="text-red">{{tableTotal}}</span>
			条记录
			</span>
		</h1>
		<a-table :loading="tableLoading"  :columns="columns" :data-source="tableData" :pagination="pageObj" @change="tableChage">
			<!--<router-link 
				slot="name" 
				slot-scope="text,val" 
				:to="{name:urlName,query:{'id':val.id}}"
			>
          		{{ text }}
          	</router-link>-->
          	<a target="_blank" slot="name" slot-scope="text,val" @click="viewUrl(val.name)">{{ text }} </a>
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
export default{
	data(){
		return{
			searchStateText:"更多",
			icon:"down",
			tableData:[],
			tableTotal:0,
      		columns,
			pageObj:{"pageSize":10,"total": 10,"current":1},
			tableLoading:true,
			cardClass:"card-hide",
			formModel:{
				"name":"",
				"unit":"",
				"chargePerson":"",
				"specialPro":"",
				"startDate":"",
				"endDate":"",
				"startFunds":"",
				"endFunds":"",
				"page":1
			},
			urlName:'registerView'//上市企业
		}
	},
	components:{
	}, 
	methods:{
		viewUrl(name){
			//console.log(name)
			var obj = {"name":name};
			this.backstage.viewUrl(this,obj,"国家重点项目","keyProject")
		},
		searchReset(){
			this.formModel = {
				"name":"",
				"unit":"",
				"chargePerson":"",
				"specialPro":"",
				"startDate":"",
				"endDate":"",
				"startFunds":"",
				"endFunds":"",
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
			let url = "findItemByConditionAndPage";
			let _this = this;
			this.backstage.tableList(obj,url,_this);
		}
	},
	mounted(){
		this.tableList()
	}
}
</script>

<style>
</style>