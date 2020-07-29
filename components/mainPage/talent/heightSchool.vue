<template>
	<div>
		<!--<a-breadcrumb>
		    <a-breadcrumb-item>
		    	<router-link :to="{name:'home'}">首页</router-link>
		    </a-breadcrumb-item>
		    <a-breadcrumb-item>人才载体信息库</a-breadcrumb-item>
		    <a-breadcrumb-item>高等院校与研究所</a-breadcrumb-item>
		</a-breadcrumb>-->
		<h1 class="title">查询条件</h1>
		<a-card :bordered="false">
			<a-form class="ant-advanced-search-form" id="searchForm"  @submit="submitForm">
				<div :class="cardClass" class="search-box" >
					<a-row :gutter="24" >
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="类型" :label-col="{ span: 8 }" :wrapper-col="{ span: 16}">
							    <a-select 
									v-model="formModel.type"
								>
									<a-select-option 
										:value="item" 
										v-for="item in typeList" 
										:key="item"
									>
							            {{item}}
							        </a-select-option>
								</a-select>
						    </a-form-item>					
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="单位名称" :label-col="{ span: 9 }" :wrapper-col="{ span: 15}">
							    <a-input  placeholder="请输入单位名称" v-model="formModel.name"/>
						    </a-form-item>					
						</a-col>
						
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="省份" :label-col="{ span: 9 }"  :wrapper-col="{ span: 15}">
								<a-select 
									:loading="cityLoad" 
									v-model="formModel.province"
									@change="cityChange"
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
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="地市" :label-col="{ span: 9 }"  :wrapper-col="{ span: 15}">
								<a-select 
									:loading="areaLoad"
									v-model="formModel.city"
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
			高等院校与研究所
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
				slot="name" 
				slot-scope="text,val" 
				:to="{name:'marketView',query:{'id':val.id}}"
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
	    title: '单位名称',
	    dataIndex: 'name',
	    key: 'name',
	    align:'center',
	    scopedSlots: {
	    	customRender: 'name'
	    }
    },{
	    title: '地址',
	    dataIndex: 'addr',
	    key: 'addr',
	    width:250,
	    align:'center'
	    //scopedSlots: { customRender: 'name' },
    },{
	    title: '所在省份',
	    dataIndex: 'province',
	    key: 'province',
	    align:'center'
	    //scopedSlots: { customRender: 'name' }
  	},{
	    title: '所在地市',
	    dataIndex: 'city',
	    key: 'city',
	    align:'center' 
  	},{
	    title: '类型',
	    dataIndex: 'type',
	    key: 'type',
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
			searchStateText:"更多",
			icon:"down",
			searchBottomBtn:false,
			tableTotal:0,
      		columns,
			pageObj:{"pageSize":10,"total": 10,"current":1},
			tableLoading:true,
			cardClass:"card-hide",
			formModel:{
				"type":"请选择",
				"name":"",
				"province":"广东省",
				"city":"不限",
				"page":1
			},
			tableId:[1],
			yearList:this.backstage.yearD(),
			tableData:[],
			typeList:["请选择","学校","研究所"]
		}
	},
	components:{
	}, 
	methods:{
		viewUrl(name){
			//console.log(name)
			var obj = {"name":name};
			this.backstage.viewUrl(this,obj,"高等院校与研究所","heightSchool")
		},
		searchReset(){
			this.formModel = {
				"type":"请选择",
				"name":"",
				"province":"不限",
				"city":"不限",
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
			let url = "findUnitPlaceByConditionAndPage";
			let _this = this;
			//console.log(obj)
			this.backstage.tableList(obj,url,_this);
		},
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
		cityChange(name,opt){//name必须有
			if(opt.key){//非不限选项
				this.areaLoad = true;
				var params = {"code":opt.key};
				this.common.postHttp(this.backstage.cityUrl.area,this,params)
				.then(response => {
					//console.log(response)
					this.areaLoad = false;
					this.areaList = response;
					if(response.length > 1){//非直辖市时，全省搜索
						this.areaList.unshift({"addr":"不限"});
					}
					this.formModel.city = this.areaList[0].addr;
				},err => {
					err = this.common.errorAjax(err);
					if(err){
				this.$message.error(err);
			}
				})
			}else{
				this.areaList = [{"addr":"不限"}];
				this.formModel.city = this.areaList[0].addr;
			}
		}
	},
	mounted(){
		this.tableList();
		this.city();
		
		var searchBox = document.getElementsByClassName("search-box")[0];
		var row = searchBox.getElementsByClassName("ant-row")[0];
		this.searchBottomBtn = this.backstage.search.open(row);
	}
}
</script>

<style>
</style>