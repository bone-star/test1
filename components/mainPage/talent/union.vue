<template>
	<div>
		<!--<a-breadcrumb>
		    <a-breadcrumb-item>
		    	<router-link :to="{name:'home'}">首页</router-link>
		    </a-breadcrumb-item>
		    <a-breadcrumb-item>人才载体信息库</a-breadcrumb-item>
		    <a-breadcrumb-item>产业技术创新联盟</a-breadcrumb-item>
		</a-breadcrumb>-->
		<h1 class="title">查询条件</h1>
		<a-card :bordered="false">
			<a-form class="ant-advanced-search-form" id="searchForm"  @submit="submitForm">
				<div :class="cardClass" class="search-box" >
					<a-row :gutter="24" >
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="联盟名称" :label-col="{ span: 9 }" :wrapper-col="{ span: 15}">
							    <a-input  placeholder="请输入联盟名称" v-model="formModel.name"/>
						    </a-form-item>					
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="秘书处所在单位" :label-col="{ span: 9 }" :wrapper-col="{ span: 15}">
							    <a-input  placeholder="请输入所在单位" v-model="formModel.unit"/>
						    </a-form-item>					
						</a-col>
						
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="技术领域" :label-col="{ span: 9 }"  :wrapper-col="{ span: 15}">
								<a-select 
									v-model="formModel.field"
								>
									<a-select-option 
										v-for="item in fieldList"
										:value="item" 
									>
							          	{{item}}
							        </a-select-option>
								</a-select>
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="所在地区" :label-col="{ span: 9 }"  :wrapper-col="{ span: 15}">
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
			产业技术创新联盟
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
				:to="{name:'market',query:{'id':val.id}}"
			>
          		{{ text }}
          	</router-link>-->
          	<a slot="name"  target="_blank" slot-scope="text,val" @click="viewUrl(val.name)">{{ text }} </a>
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
	    title: '联盟名称',
	    dataIndex: 'allianceName',
	    key: 'allianceName',
	    align:'center'
    },{
	    title: '秘书处所在单位',
	    dataIndex: 'secretariatUnit',
	    key: 'secretariatUnit',
	    align:'center',
	    width:250,
	    scopedSlots: {
	    	customRender: 'name'
	    }
    },{
	    title: '所在地区',
	    dataIndex: 'region',
	    key: 'region',
	    align:'center'
	    //scopedSlots: { customRender: 'name' },
    },{
	    title: '技术领域',
	    dataIndex: 'technicalField',
	    key: 'technicalField',
	    align:'center'
	    //scopedSlots: { customRender: 'name' }
  	},{
	    title: '认定时间',
	    dataIndex: 'identityTime',
	    key: 'identityTime',
	    align:'center' 
  	}
];
export default{
	data(){
		return{
			areaList:[{"addr":"不限"}],
			areaLoad:true,
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
				"field":"请选择",
				"region":"不限",
				"page":1
			},
			tableId:[1],
			yearList:this.backstage.yearD(),
			tableData:[],
			fieldList:["请选择","农林畜牧","先进制造","电子信息","新能源与生态节能环保","科技服务","传统产业(服装服饰)","教育服务","医疗健康、食品药品","材料化工"]
		}
	},
	components:{
	}, 
	methods:{
		searchReset(){
			this.formModel = {
				"name":"",
				"unit":"",
				"field":"请选择",
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
			let url = "findtechAllianceByConditionAndPage";
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
		},
		viewUrl(name){
			//console.log(name)
			var obj = {"name":name};
			this.backstage.viewUrl(this,obj,"产业技术创新联盟","union")
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