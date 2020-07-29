<template>
	<div>
		<!--<a-breadcrumb>
		    <a-breadcrumb-item>
		    	<router-link :to="{name:'home'}">首页</router-link>
		    </a-breadcrumb-item>
		    <a-breadcrumb-item>成果信息库</a-breadcrumb-item>
		    <a-breadcrumb-item>广东省科技项目成果</a-breadcrumb-item>
		</a-breadcrumb>-->
		<h1 class="title">查询条件</h1>
		<a-card :bordered="false">
			<a-form class="ant-advanced-search-form" id="searchForm"  @submit="submitForm">
				<div :class="cardClass" class="search-box" >
					<a-row :gutter="24" >
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="成果名称" :label-col="{ span: 8 }" :wrapper-col="{ span: 16}">
							    <a-input  placeholder="请输入名称" v-model="formModel.resultName"/>
						    </a-form-item>					
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="完成单位" :label-col="{ span: 9 }" :wrapper-col="{ span: 15}">
							    <a-input  placeholder="请输入单位名称" v-model="formModel.completeUnit"/>
						    </a-form-item>					
						</a-col>
						
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="学科分类" :label-col="{ span: 9 }"  :wrapper-col="{ span: 15}">
								<a-select 
									v-model="formModel.scientificClassification"
								>
									<a-select-option 
										v-for="(item,key) in formList.scientificClassification"
										:value="item" 
									>
							          	{{item}}
							        </a-select-option>
								</a-select>
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="研究人员" :label-col="{ span: 8 }" :wrapper-col="{ span: 16}">
							    <a-input  placeholder="请输入人员名称" v-model="formModel.researcher"/>
						    </a-form-item>					
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="成果应用行业" :label-col="{ span: 9 }"  :wrapper-col="{ span: 15}">
								<a-select 
									v-model="formModel.resultAppIndustry"
								>
									<a-select-option 
										v-for="(resultAppItem,key) in formList.resultAppIndustry"
										:value="resultAppItem"
									>
							          	{{resultAppItem}}
							        </a-select-option>
								</a-select>
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="高科技领域" :label-col="{ span: 9 }"  :wrapper-col="{ span: 15}">
								<a-select 
									v-model="formModel.highTechField"
								>
									<a-select-option 
										v-for="(item,key) in formList.highTechField"
										:value="item"
									>
							          	{{item}}
							        </a-select-option>
								</a-select>
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="年度" :label-col="{ span: 9 }"  :wrapper-col="{ span: 15}">
								<a-select 
									v-model="formModel.resultEvaluationDate"
								>
									<a-select-option 
										v-for="(yearItem,key) in yearList"
										:value="yearItem"
									>
							          	{{yearItem}}
							        </a-select-option>
								</a-select>
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="登记号" :label-col="{ span: 8 }" :wrapper-col="{ span: 16}">
							    <a-input  placeholder="请输入登记号" v-model="formModel.registerCode"/>
						    </a-form-item>					
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="鉴定单位" :label-col="{ span: 8 }" :wrapper-col="{ span: 16}">
							    <a-input  placeholder="请输入鉴定单位" v-model="formModel.resultEvaluationUnit"/>
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
			广东省科技项目成果
			&nbsp;&nbsp;
			<span>
			共查询到
			<span class="text-red">{{tableTotal}}</span>
			条记录
			</span>
		</h1>
		<a-table 
			:loading="tableLoading" 
			:columns="columns" 
			:data-source="tableData" 
			:pagination="pageObj" 
			@change="tableChage"
		>
			<!-- <a slot="name" slot-scope="text">{{ text }}</a>-->
			<!--<router-link 
				slot="url" 
				slot-scope="text,val" 
				:to="{name:urlName,query:{'id':val.id}}"
			>
          		{{ text }}
          	</router-link>-->
          	<a slot="name" target="_blank" slot-scope="text,val" @click="viewUrl(val.name)">{{ text }} </a>
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
	    title: '成果名称',
	    dataIndex: 'title',
	    key: 'title',
	    align:'center',
	    width:200
	    /*scopedSlots: {
	    	customRender: 'name'
	    }*/
    },{
	    title: '完成单位',
	    dataIndex: 'completeUnit',
	    key: 'completeUnit',
	    width:200,
	    align:'center',
	    scopedSlots: { customRender: 'name' }
    },{
	    title: '研究人员',
	    dataIndex: 'researcher',
	    key: 'researcher',
	    width:200,
	    align:'center'
	    //scopedSlots: { customRender: 'name' }
  	},{
	    title: '成果应用行业',
	    dataIndex: 'resultAppIndustry',
	    key: 'resultAppIndustry',
	    width:150,
	    align:'center' 
  	},{
	    title: '学科分类', 
	    dataIndex: 'scientificClassification',
	    key: 'scientificClassification',
	    width:150,
	    align:'center' 
  	},{
	    title: '高科技领域',
	    dataIndex: 'highTechField',
	    key: 'highTechField',
	    align:'center',
	     width:100
  	},{
	    title: '年度',
	    dataIndex: 'resultEvaluationDate',
	    key: 'resultEvaluationDate',
	    width:100,
	    align:'center' 
  	},{
	    title: '登记号',
	    dataIndex: 'registerCode',
	    key: 'registerCode',
	    align:'center' 
  	}
];
export default{
	data(){
		return{
			loading:true,
			searchStateText:"更多",
			icon:"down",
			searchBottomBtn:false,
			tableTotal:0,
      		columns,
			pageObj:{"pageSize":10,"total": 10,"current":1},
			tableLoading:true,
			cardClass:"card-hide",
			formModel:{
				"resultName":"",
				"completeUnit":"",
				"scientificClassification":"请选择",
				"researcher":"",
				"resultAppIndustry":"请选择",
				"highTechField":"请选择",
				"resultEvaluationDate":"请选择",
				"registerCode":"",
				"resultEvaluationUnit":"",
				"page":1
			},
			tableData:[],
			formList:{
				"scientificClassification":[],
				"resultAppIndustry":[],
				"highTechField":[]
			},
			yearList:this.backstage.yearD(),
			urlName:"market"
		}
	},
	components:{
	}, 
	methods:{
		viewUrl(name){
			//console.log(name)
			var obj = {"name":name};
			this.backstage.viewUrl(this,obj,"广东省科技","resultProject")
		},
		searchReset(){
			this.formModel = {
				"resultName":"",
				"completeUnit":"",
				"scientificClassification":"请选择",
				"researcher":"",
				"resultAppIndustry":"请选择",
				"highTechField":"请选择",
				"resultEvaluationDate":"请选择",
				"registerCode":"",
				"resultEvaluationUnit":"",
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
			let url = "findGdSciItemResultByConditionAndPage";
			let _this = this;
			this.backstage.tableList(obj,url,_this);
		},
		getData(){
			this.common.postHttp(this.backstage.ajaxUrl+"/getGdSciItemResultOfCondition" ,this,"")
			.then(response => {
				Object.keys(response).forEach((v,i)=>{
					//console.log(v)
					//response[v].unshift("请选择");
				})
				//console.log(response)
				this.formList =  response;
				
			},err=>{
				err = this.common.errorAjax(err);
				if(err){
				this.$message.error(err);
			}
			})
		}
	},
	mounted(){
		this.getData();
		this.tableList();
		var searchBox = document.getElementsByClassName("search-box")[0];
		var row = searchBox.getElementsByClassName("ant-row")[0];
		this.searchBottomBtn = this.backstage.search.open(row);
	}
}
</script>

<style>
</style>