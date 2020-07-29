<template>
	<div>
		<!--<a-breadcrumb>
		    <a-breadcrumb-item>
		    	<router-link :to="{name:'home'}">首页</router-link>
		    </a-breadcrumb-item>
		    <a-breadcrumb-item>人才载体信息库</a-breadcrumb-item>
		    <a-breadcrumb-item>国家级孵化器培育单位</a-breadcrumb-item>
		</a-breadcrumb>-->
		<h1 class="title">查询条件</h1>
		<a-card :bordered="false">
			<a-form class="ant-advanced-search-form" id="searchForm"  @submit="submitForm">
				<div :class="cardClass" class="search-box" >
					<a-row :gutter="24" >
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="孵化器名称" :label-col="{ span: 9 }" :wrapper-col="{ span: 15}">
							    <a-input  placeholder="请输入名称" v-model="formModel.type"/>
						    </a-form-item>					
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="申报单位" :label-col="{ span: 9 }" :wrapper-col="{ span: 15}">
							    <a-input  placeholder="请输入单位名称" v-model="formModel.name"/>
						    </a-form-item>					
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="地区" :label-col="{ span: 9 }"  :wrapper-col="{ span: 15}">
								<a-select 
									:loading="areaLoad"
									v-model="formModel.region"
								>
									<a-select-option 
										v-for="(areaItem,key) in areaList"
										:value="areaItem.addr" 
									>
							          	{{areaItem.addr}}
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
			国家级孵化器培育单位
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
	    title: '孵化器名称',
	    dataIndex: 'incubatorName',
	    key: 'incubatorName',
	    align:'center'
    },{
	    title: '申报单位',
	    dataIndex: 'appliactUnit',
	    key: 'appliactUnit',
	    width:400,
	    align:'center'
	    //scopedSlots: { customRender: 'name' },
    },{
	    title: '地区',
	    dataIndex: 'region',
	    key: 'region',
	    align:'center'
	    //scopedSlots: { customRender: 'name' }
  	}
];
export default{
	data(){
		return{
			cityList:[{"addr":"不限","code":0}],//城市
			areaList:[{"addr":"不限"}],
			cityLoad:true,
			areaLoad:false,
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
				"unit":"",
				"region":"不限",
				"page":1
			},
			tableId:[1],
			yearList:this.backstage.yearD(),
			tableData:[]
		}
	},
	components:{
	}, 
	methods:{
		searchReset(){
			this.formModel = {
				"name":"",
				"unit":"",
				"region":"不限",
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
			let url = "findNationalIncubatorByConditionAndPage";
			let _this = this;
			this.backstage.tableList(obj,url,_this);
		},
		area(){
			this.common.postHttp(this.backstage.cityUrl.area,this,{"code":440000})
			.then(response => {
				this.areaLoad = false;
				this.areaList = this.areaList.concat(response);
			},err => {
				err = this.common.errorAjax(err);
				if(err){
				this.$message.error(err);
			}
			})
		}
	},
	mounted(){
		this.tableList();
		this.area();
		
		var searchBox = document.getElementsByClassName("search-box")[0];
		var row = searchBox.getElementsByClassName("ant-row")[0];
		this.searchBottomBtn = this.backstage.search.open(row);
	}
}
</script>

<style>
</style>