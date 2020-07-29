<template>
	<div>
		<!--<a-breadcrumb>
		    <a-breadcrumb-item>
		    	<router-link :to="{name:'home'}">首页</router-link>
		    </a-breadcrumb-item>
		    <a-breadcrumb-item>成果信息库</a-breadcrumb-item>
		    <a-breadcrumb-item>广东省专利成果</a-breadcrumb-item>
		</a-breadcrumb>-->
		<h1 class="title">查询条件</h1>
		<a-card :bordered="false">
			<a-form class="ant-advanced-search-form" id="searchForm"  @submit="submitForm">
				<div :class="cardClass" class="search-box" >
					<a-row :gutter="24" >
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="专利名称" :label-col="{ span: 9}" :wrapper-col="{ span: 15}">
							    <a-input  placeholder="请输入名称" v-model="formModel.name"/>
						    </a-form-item>					
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="申请号" :label-col="{ span: 9 }" :wrapper-col="{ span: 15}">
							    <a-input  placeholder="请输入申请号" v-model="formModel.applyNumber"/>
						    </a-form-item>					
						</a-col>
						
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="状态" :label-col="{ span: 9 }"  :wrapper-col="{ span: 15}">
								<a-select 
									v-model="formModel.state"
								>
									<a-select-option 
										v-for="(item,key) in formList.state"
										:value="item" 
									>
							          	{{item}}
							        </a-select-option>
								</a-select>
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="申请人" :label-col="{ span: 9}" :wrapper-col="{ span: 15}">
							    <a-input  placeholder="请输入申请人" v-model="formModel.applyPerson"/>
						    </a-form-item>					
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="专利类型" :label-col="{ span: 9 }"  :wrapper-col="{ span: 15}">
								<a-select 
									v-model="formModel.patentType"
								>
									<a-select-option 
										v-for="(resultAppItem,key) in formList.patentType"
										:value="resultAppItem"
									>
							          	{{resultAppItem}}
							        </a-select-option>
								</a-select>
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="分类号" :label-col="{ span: 9 }"  :wrapper-col="{ span: 15}">
								<a-input  placeholder="请输入分类号" v-model="formModel.classificationNumber"/>
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="申请日期" :label-col="{ span: 9 }"  :wrapper-col="{ span: 15}">
								<a-date-picker
							 		placeholder="申请日期" 
							 		@change="time"
							 		v-model="formModel.applyDate"
							 	/>
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="发明人" :label-col="{ span: 9}" :wrapper-col="{ span: 15}">
							    <a-input  placeholder="请输入发明人" v-model="formModel.designer"/>
						    </a-form-item>					
						</a-col>
						<a-col :span="8" :lg="{span:6}">
							<a-form-item label="省份" :label-col="{ span: 9}" :wrapper-col="{ span: 15}">
						    	<a-select 
									:loading="cityLoad" 
									v-model="formModel.province"
								>
									<a-select-option 
										:value="cityItem.addr" 
										v-for="cityItem in cityList" 
										:key="cityItem.code"
									>
							            {{cityItem.addr}}
							        </a-select-option>
								</a-select>
							</a-form-item>
					    </a-col>
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="关键词" :label-col="{ span: 9}" :wrapper-col="{ span: 15}">
							    <a-input  placeholder="请输入关键词" v-model="formModel.searchKeywords"/>
						    </a-form-item>					
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="摘要" :label-col="{ span: 9}" :wrapper-col="{ span: 15}">
							    <a-input  placeholder="请输入摘要" v-model="formModel.abstractContent"/>
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
			广东省专利成果
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
			<router-link 
				target="_blank"
				slot="name" 
				slot-scope="text,val" 
				:to="{name:'view',query:{'id':val.id}}"
			>
          		{{ text }}
          	</router-link>
          	<!--<a slot="name" slot-scope="text,val" @click="viewUrl(val.name)">{{text}}</a>-->
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
	    title: '专利名称',
	    dataIndex: 'name',
	    key: 'name',
	    align:'center',
	    width:200,
	    scopedSlots: { customRender: 'name' }
    },{
	    title: '专利类型',
	    dataIndex: 'patentType',
	    key: 'patentType',
	    width:100,
	    align:'center',
	   // scopedSlots: { customRender: 'name' }
    },{
	    title: '状态',
	    dataIndex: 'state',
	    key: 'state',
	    align:'center'
	    //scopedSlots: { customRender: 'name' }
  	},{
  		title: '省份',
	    dataIndex: 'province',
	    key: 'province',
	    align:'center'
  	},{
	    title: '申请日期',
	    dataIndex: 'applyDate',
	    key: 'applyDate',
	    align:'center' 
  	},{
	    title: '申请人', 
	    dataIndex: 'applyPerson',
	    key: 'applyPerson',
	    align:'center' 
  	},{
	    title: '发明人',
	    dataIndex: 'designer',
	    key: 'designer',
	    align:'center',
	    width:150
  	},{
	    title: '关键词',
	    dataIndex: 'searchKeywords',
	    key: 'searchKeywords',
	    width:250,
	    align:'center' 
  	}
];
export default{
	data(){
		return{
			cityList:[{"addr":"不限","code":0}],//城市
			areaList:[{"addr":"不限"}],
			cityLoad:true,
			areaLoad:false,
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
				"name":"",
				"applyNumber":"",
				"state":"请选择",
				"applyPerson":"",
				"patentType":"请选择",
				"applyDate":"",
				"classificationNumber":"",
				"designer":"",
				"province":"请选择",
				"searchKeywords":"",
				"abstractContent":"",
				"page":1
			},
			tableData:[],
			formList:{
				"state":["请选择","有效","无效"],
				"patentType":["请选择","发明专利","发明授权","使用新型","外观专利"],
				},
			yearList:this.backstage.yearD(),
			urlName:"market"
		}
	},
	components:{
	}, 
	methods:{
		city(){
			this.common.postHttp(this.backstage.cityUrl.city,this,"")
			.then(response => {
				this.cityLoad = false;
				this.cityList = this.cityList.concat(response);
			},err => {
				err = this.common.errorAjax(err);
				if(err){
				this.$message.error(err);
			}
			})
		},
		time(a,time){//a占位
			//console.log(this.formModel.applyDate)
			this.formModel.applyDate = time;
		},
		searchReset(){
			this.formModel = {
				"name":"",
				"applyNumber":"",
				"state":"请选择",
				"applyPerson":"",
				"patentType":"请选择",
				"applyDate":"",
				"classificationNumber":"",
				"designer":"",
				"province":"请选择",
				"searchKeywords":"",
				"abstractContent":"",
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
			let url = "findPatentByCondition";
			let _this = this;
			this.backstage.tableList(obj,url,_this);
		}
	},
	mounted(){
		this.city();
		this.tableList();
		var searchBox = document.getElementsByClassName("search-box")[0];
		var row = searchBox.getElementsByClassName("ant-row")[0];
		this.searchBottomBtn = this.backstage.search.open(row);
	}
}
</script>

<style>
</style>