<template>
	<div>
		<!--<a-breadcrumb>
		    <a-breadcrumb-item>
		    	<router-link :to="{name:'home'}">首页</router-link>
		    </a-breadcrumb-item>
		    <a-breadcrumb-item>成果信息库</a-breadcrumb-item>
		    <a-breadcrumb-item>科学技术奖</a-breadcrumb-item>
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
							<a-form-item label="完成单位" :label-col="{ span: 9 }" :wrapper-col="{ span: 15}">
							    <a-input  placeholder="请输入单位名称" v-model="formModel.completeUnit"/>
						    </a-form-item>					
						</a-col>
						
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="奖励等级" :label-col="{ span: 9 }"  :wrapper-col="{ span: 15}">
								<a-select 
									v-model="formModel.awardRank"
								>
									<a-select-option 
										v-for="(item,key) in formList.awardRank"
										:value="item" 
									>
							          	{{item}}
							        </a-select-option>
								</a-select>
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="推荐单位" :label-col="{ span: 8 }" :wrapper-col="{ span: 16}">
							    <a-input  placeholder="请输入单位名称" v-model="formModel.recommendedUnit"/>
						    </a-form-item>					
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="完成人" :label-col="{ span: 8 }" :wrapper-col="{ span: 16}">
							    <a-input  placeholder="请输入姓名" v-model="formModel.completePerson"/>
						    </a-form-item>					
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="获奖年度" :label-col="{ span: 9 }"  :wrapper-col="{ span: 15}">
								<a-select 
									v-model="formModel.awardYear"
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
			科学技术奖
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
	    width:300
	    /*scopedSlots: {
	    	customRender: 'name'
	    }*/
    },{
	    title: '完成单位',
	    dataIndex: 'completeUnit',
	    key: 'completeUnit',
	    width:300,
	    align:'center'
    },{
	    title: '奖励等级',
	    dataIndex: 'awardRank',
	    key: 'awardRank',
	    align:'center'
	    //scopedSlots: { customRender: 'name' }
  	},{
	    title: '获奖年度',
	    dataIndex: 'awardYear',
	    key: 'awardYear',
	    align:'center' 
  	},{
	    title: '完成人', 
	    dataIndex: 'completePerson',
	    key: 'completePerson',
	    width:300,
	    align:'center' 
  	},{
	    title: '推荐单位',
	    dataIndex: 'recommendedUnit',
	    key: 'recommendedUnit',
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
				"completeUnit":"",
				"awardRank":"请选择",
				"recommendedUnit":"",
				"completePerson":"",
				"investmentAmount":"",
				"awardYear":"请选择",
				"page":1
			},
			tableData:[],
			formList:{
				"awardRank":["请选择","一等奖","二等奖","三等价"]
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
			this.backstage.viewUrl(this,obj,"科学技术奖","sciencePrix")
		},
		searchReset(){
			this.formModel = {
				"itemName":"",
				"completeUnit":"",
				"awardRank":"请选择",
				"recommendedUnit":"",
				"completePerson":"",
				"investmentAmount":"",
				"awardYear":"请选择",
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
			let url = "findScieTechAwardByConditionAndPage";
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