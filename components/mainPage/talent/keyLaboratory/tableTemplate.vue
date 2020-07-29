<template>
	<div>
		<h1 class="title">查询条件</h1>
		<a-card :bordered="false">
			<a-form class="ant-advanced-search-form" id="searchForm"  @submit="submitForm">
				<div :class="cardClass" class="search-box" >
					<a-row :gutter="24" >
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="实验室名称" :label-col="{ span: 8 }" :wrapper-col="{ span: 16}">
							    <a-input  placeholder="请输入名称" v-model="formModel.name"/>
						    </a-form-item>					
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="依托单位" :label-col="{ span: 9 }" :wrapper-col="{ span: 15}">
							    <a-input  placeholder="请输入单位名称" v-model="formModel.unit"/>
						    </a-form-item>					
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="地区" :label-col="{ span: 9 }"  :wrapper-col="{ span: 15}">
								<a-select 
									:loading="cityLoad" 
									v-model="formModel.city"
									v-if="cityType!='city'"
								>
									<a-select-option 
										:value="cityItem.addr" 
										v-for="cityItem in cityList" 
										:key="cityItem.code"
									>
							            {{cityItem.addr}}
							        </a-select-option>
								</a-select>
								<a-select 
									:loading="areaLoad" 
									v-model="formModel.city"
									v-else="cityType=='city'"
								>
									<a-select-option 
										:value="areaItem.addr" 
										v-for="areaItem in areaList" 
										:key="areaItem.code"
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
			{{name}}
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
				:to="{name:'market',query:{'id':val.id}}"
			>
          		{{ text }}
          </router-link>
		</a-table>
	</div>
</template>

<script>
export default{
	data(){
		return{
			cityList:[{"addr":"不限"}],
			cityLoad:false,
			areaList:[{"addr":"不限"}],
			areaLoad:false,
			areaModel:"不限",
			searchStateText:"更多",
			icon:"down",
			searchBottomBtn:false,
			tableTotal:0,
      		columns:[
				{
					title: '序号',
				    dataIndex: 'key',
				    key: 'i',
				    width:80,
				    align:"center" 
				    //scopedSlots: { customRender: 'name' },
			    },{
				    title: '实验室名称',
				    dataIndex: 'laboratoryName',
				    key: 'laboratoryName',
				    align:'center'
			    },{
				    title: '依托单位',
				    dataIndex: 'supportingDept',
				    key: 'supportingDept',
				    align:'center'
				    //scopedSlots: { customRender: 'name' },
			    },{
				    title: '所在地市',
				    dataIndex: this.cityType,
				    key: 'city',
				    align:'center' 
			  	}
			],
			pageObj:{"pageSize":10,"total": 10,"current":1},
			tableLoading:true,
			cardClass:"card-hide",
			formModel:{
				"name":"",
				"unit":"",
				"city":"不限",
				"page":1
			},
			yearList:this.backstage.yearD(),
			tableData:[]
		}
	},
	components:{
	},
	props:["tableUrl","name","cityType"],
	methods:{
		searchReset(){
			this.formModel = {
				"name":"",
				"unit":"",
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
			obj.city = obj.city.replace(/省/,"");
			//console.log(obj)
			let url = this.tableUrl;
			let _this = this;
			this.backstage.tableList(obj,url,_this);
		},
		city(){
			var _this = this;
			var opt = {"code":440000};
			if(this.cityType != "city"){
				this.backstage.city(_this)	
			}else if(this.cityType == "city"){
				this.backstage.area(_this,opt)
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