<template>
	<div>
		<!--<a-breadcrumb>
		    <a-breadcrumb-item>
		    	<router-link :to="{name:'home'}">首页</router-link>
		    </a-breadcrumb-item>
		    <a-breadcrumb-item>成果信息库</a-breadcrumb-item>
		    <a-breadcrumb-item>高新技术项目成果</a-breadcrumb-item>
		</a-breadcrumb>-->
		<h1 class="title">查询条件</h1>
		<a-card :bordered="false">
			<a-form class="ant-advanced-search-form" id="searchForm"  @submit="submitForm">
				<div :class="cardClass" class="search-box" >
					<a-row :gutter="24" >
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="项目名称" :label-col="{ span: 8 }" :wrapper-col="{ span: 16}">
							    <a-input  placeholder="项目名称" v-model="formModel.itemName"/>
						    </a-form-item>					
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="单位名称" :label-col="{ span: 9 }" :wrapper-col="{ span: 15}">
							    <a-input  placeholder="请输入单位名称" v-model="formModel.name"/>
						    </a-form-item>					
						</a-col>
						
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="所属行业" :label-col="{ span: 9 }"  :wrapper-col="{ span: 15}">
								<a-select 
									:loading="loading"
									v-model="formModel.industry"
								>
									<a-select-option 
										v-for="(item,key) in formList.industry"
										:value="item" 
									>
							          	{{item}}
							        </a-select-option>
								</a-select>
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="所属地区" :label-col="{ span: 9 }"  :wrapper-col="{ span: 15}">
								<a-select 
									:loading="loading"
									v-model="formModel.area"
								>
									<a-select-option 
										v-for="(areaitem,key) in formList.area"
										:value="areaitem" 
									>
							          	{{areaitem}}
							        </a-select-option>
								</a-select>
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="单位性质" :label-col="{ span: 9 }"  :wrapper-col="{ span: 15}">
								<a-select 
									:loading="loading"
									v-model="formModel.etype"
								>
									<a-select-option 
										v-for="(etypeItem,key) in formList.etype"
										:value="etypeItem" 
									>
							          	{{etypeItem}}
							        </a-select-option>
								</a-select>
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="所需资金" :label-col="{ span: 9 }"  :wrapper-col="{ span: 15}">
								<a-select 
									:loading="loading"
									v-model="formModel.investmentAmount"
								>
									<a-select-option 
										v-for="(infoItem,key) in formList.investmentAmount"
										:value="infoItem" 
									>
							          	{{infoItem}}
							        </a-select-option>
								</a-select>
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
			高新技术项目成果
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
          	<a slot="url" target="_blank" slot-scope="text,val" @click="viewUrl(val.name)">{{ text }} </a>
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
	    align:'center',
	    /*scopedSlots: {
	    	customRender: 'name'
	    }*/
    },{
	    title: '单位名称',
	    dataIndex: 'name',
	    key: 'name',
	    width:250,
	    align:'center',
	    scopedSlots: { customRender: 'url' },
    },{
	    title: '所在地区',
	    dataIndex: 'addr',
	    key: 'addr',
	    align:'center'
	    //scopedSlots: { customRender: 'name' }
  	},{
	    title: '所需资金',
	    dataIndex: 'investmentAmount',
	    key: 'investmentAmount',
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
				"itemName":"",
				"name":"",
				"industry":"不限",
				"area":"不限",
				"etype":"不限",
				"investmentAmount":"不限",
				"page":1
			},
			tableData:[],
			formList:{},
			urlName:"market"
		}
	},
	components:{
	}, 
	methods:{
		viewUrl(name){
			//console.log(name)
			var obj = {"name":name};
			this.backstage.viewUrl(this,obj,"高新技术","highResult")
		},
		searchReset(){
			this.formModel = {
				"itemName":"",
				"name":"",
				"industry":"不限",
				"area":"不限",
				"etype":"不限",
				"investmentAmount":"不限",
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
			let url = "findHTechResult";
			let _this = this;
			this.backstage.tableList(obj,url,_this);
		},
		formData(){
			this.common.postHttp(this.backstage.ajaxUrl + "/getTypeParam" ,this,"")
			.then(response => {
				this.loading = false;
				Object.keys(response).forEach((v,i)=>{
					//console.log(v)
					response[v].unshift("不限")
				});
				this.formList = response
			},err=>{
				err = this.common.errorAjax(err);
				if(err){
				this.$message.error(err);
			}
			})
		} 
	},
	mounted(){
		this.tableList();
		this.formData();
		var searchBox = document.getElementsByClassName("search-box")[0];
		var row = searchBox.getElementsByClassName("ant-row")[0];
		this.searchBottomBtn = this.backstage.search.open(row);
	}
}
</script>

<style>
</style>