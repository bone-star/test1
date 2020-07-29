<template>
	<div>
		<!--<a-breadcrumb>
		    <a-breadcrumb-item>
		    	<router-link :to="{name:'home'}">首页</router-link>
		    </a-breadcrumb-item>
		    <a-breadcrumb-item>人才载体信息库</a-breadcrumb-item>
		    <a-breadcrumb-item>
		    	<router-link :to="{name:'register'}">上市企业</router-link>
		    </a-breadcrumb-item>
		    <a-breadcrumb-item>上市企业详情</a-breadcrumb-item>
		</a-breadcrumb>-->
		<h1 class="title">上市企业详情</h1>
		<a-card :bordered="false" :title="chAbbreviation+'基本资料'" class="m-bottom">
			 <table class="table-view">
			 	<tr v-for="row in infoList.length%3==0 ? parseInt(infoList.length/3) : parseInt(infoList.length/3)+1" >
			 		<td v-for="(info,i) in infoList.slice((row-1)*3,row*3)">
			 			<span class="table-name">{{info.name}}:</span>
			 			<span class="table-data">{{info.data}}</span>
			 		</td>
			 	</tr>
			 </table>
		</a-card>
		<a-card :bordered="false" title="经营范围" class="m-bottom">
			<p>{{rangeList.small[0].data}}</p>
		    <p>
		    	企业特点：
		    	<a-tag color="blue" v-if="rangeList.other[0]">
			        {{rangeList.other[0]}}
			    </a-tag>
			    <a-tag color="cyan" v-if="rangeList.other[1]">
			    	{{rangeList.other[1]}}
			    </a-tag>
		    </p> 
		    <!--<a-row type="flex" v-for="row in rangeList.table.length%3==0 ?  parseInt(rangeList.table.length/3) : parseInt(rangeList.table.length/3)+1">
			 	<a-col :span="8" v-for="(info,i) in rangeList.table.slice((row-1)*3,row*3)" class="table-view">
			 		<a-col :span="9" class="table-name">{{info.name}}</a-col>
			 		<a-col :span="15" class="table-data">
			 			<span v-if="!info.data">&nbsp;</span>
			 			{{info.data}}
			 		</a-col>
			 	</a-col>
			</a-row>-->
			<table class="table-view">
			 	<tr v-for="row in rangeList.table.length%3==0 ? parseInt(rangeList.table.length/3) : parseInt(rangeList.table.length/3)+1" >
			 		<td v-for="(info,i) in rangeList.table.slice((row-1)*3,row*3)">
			 			<span class="table-name">{{info.name}}:</span>
			 			<span class="table-data">{{info.data}}</span>
			 		</td>
			 	</tr>
			 </table>
		</a-card>
		<a-tabs type="card">
		    <a-tab-pane key="1" tab="员工信息-按学历">
		    	<a-spin tip="Loading..." :spinning="tableLoading1">
					<a-table 
						class="border-none" 
						:columns="columns1" 
						:data-source="tableData0"
					>
					</a-table>
				</a-spin>
		    </a-tab-pane>
		    <a-tab-pane key="2" tab="员工信息-按工种">
		      	<a-spin tip="Loading..." :spinning="tableLoading1">
					<a-table 
						class="border-none" 
						:columns="columns1" 
						:data-source="tableData1"
					>
					</a-table>
				</a-spin>
		    </a-tab-pane>
		    <a-tab-pane key="3" tab="高管人员">
		      	<a-spin tip="Loading..." :spinning="tableLoading">
					<a-table 
						class="border-none" 
						:columns="columns" 
						:data-source="tableData"
						:pagination="pageObj"
						@change="tableChage"
					>
						<router-link  target="_blank" slot="name" slot-scope="text,val" :to="{name:'listTalentsView',query:{'id':val.id,'goBack':'上市企业','url':'business'}}">
			          		{{text}}
			          	</router-link>
						<!--<a slot="name" slot-scope="text,val">{{text}}</a>-->
					</a-table>
				</a-spin>
		    </a-tab-pane>
		</a-tabs>
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
	    title: '姓名',
	    dataIndex: 'name',
	    key: 'name',
	    align:'center',
	    scopedSlots: { customRender: 'name' },
    },{
	    title: '性别',
	    dataIndex: 'sex',
	    key: 'sex',
	    align:'center',
	    //scopedSlots: { customRender: 'name' },
    },{
	    title: '年龄',
	    dataIndex: 'age',
	    key: 'age',
	    align:'center',
	   // scopedSlots: { customRender: 'name' },
    },{
	    title: '学历',
	    dataIndex: 'education',
	    key: 'education',
	    align:'center',
	   // scopedSlots: { customRender: 'name' },
    },{
	    title: '职务',
	    dataIndex: 'job',
	    key: 'job',
	    align:'center',
	   // scopedSlots: { customRender: 'name' },
    },{
	    title: '任职日期',
	    dataIndex: 'jobTime',
	    key: 'jobTime',
	    align:'center',
	   // scopedSlots: { customRender: 'name' },
    },{
	    title: '简历信息',
	    dataIndex: 'introduce',
	    key: 'introduce',
	    align:'center',
	    width:550
	   // scopedSlots: { customRender: 'name' },
    }
];
const columns1 = [
	{
		title: '序号',
	    dataIndex: 'key',
	    key: 'i',
	    width:80,
	    align:"center" 
	    //scopedSlots: { customRender: 'name' },
    },{
	    title: '统计类型',
	    dataIndex: 'name',
	    key: 'name',
	    align:'center',
	   // scopedSlots: { customRender: 'name' },
    },{
	    title: '员工人数',
	    dataIndex: 'empNum',
	    key: 'empNum',
	    align:'center',
	   // scopedSlots: { customRender: 'name' },
    },{
	    title: '员工占比',
	    dataIndex: 'empRatio',
	    key: 'empRatio',
	    align:'center',
	   // scopedSlots: { customRender: 'name' },
    },{
	    title: '更新时间',
	    dataIndex: 'updateTime',
	    key: 'updateTime',
	    align:'center',
	   // scopedSlots: { customRender: 'name' },
    }
];
export default{
	data(){
		return{
			params:"",
			chAbbreviation:"",//公司简称
			infoList:[
				{"name":"公司全称","dataName":"fullName","data":"白云机场股份有限公司"},
				{"name":"股票代码","dataName":"code"},
				{"name":"组织形式","dataName":"orgForm"},
				{"name":"中文简称","dataName":"chAbbreviation"},
				{"name":"公司电话","dataName":"companyTel"},
				{"name":"办公地址","dataName":"officeAddress"},
				{"name":"英文名","dataName":"enName"},
				{"name":"注册资本(万元)","dataName":"registerFunds"},
				{"name":"董事长","dataName":"chairman"},
				{"name":"法定代表人","dataName":"legalRepresentative"},
				{"name":"董事秘书","dataName":"directorSecretary"},
				{"name":"董秘电话","dataName":"secretaryTel"},
				{"name":"总经理","dataName":"generalManager"},
				{"name":"所属行业","dataName":"industry"},
				{"name":"上市时间","dataName":"listedDate"}
			],
			rangeList:{
				"small":[
					{"name":"经营范围","dataName":"businessScope","data":"经营范围"},
					{"name":"主营业务","dataName":"mainBusiness","data":""},
				],
				"table":[
					{"name":"是否拥有重点实验室","dataName":"hasKeyLab","data":""},
					{"name":"是否拥有国家级孵化器","dataName":"isNationalIncubator","data":""},
					{"name":"是否拥有院士工作站","dataName":"isAcademicianWorkstation","data":""},
					{"name":"是否拥有高新技术企业","dataName":"isHighTech","data":""},
					{"name":"拥有专利数","dataName":"hasPatentNum","data":""}
				],
				"other":["博士","技术"]
			},
			tableLoading:true,
			tableLoading1:true,
			columns,
			columns1,
			tableData0:[],
			tableData1:[],
			tableData:[],
			pageObj:{"pageSize":5,"total": 10,"current":1},
			code:""
		}
	},
	components:{
	}, 
	methods:{
		tableChage(pagination){//分页切换
			//console.log(pagination.current)
			this.tableLoading = true;//表格加载中 
			this.pageObj.current = pagination.current;//当前页
			this.tableList(this.code,true);
		},
		infoTable(){
			let params = {"id":this.params};
			this.common.postHttp(this.backstage.ajaxUrl + "/findListedCompanyInfoById",this,params)
			.then(response => {
				//console.log(response.businessScope)
				var _this = this;
				this.infoList.forEach(function(v,i){
					v.data = response[v.dataName];
					if(v.dataName == "listedDate"){
						v.data = response[v.dataName].toString().split("T")[0];
					}
				});
				this.rangeList.table.forEach(function(v,i){
					v.data = response[v.dataName];
				});
				this.rangeList.small.forEach(function(v,i){
					v.data = response[v.dataName];
				});
				this.code = response["code"]
				this.tableList(this.code);
				this.chAbbreviation = response["chAbbreviation"];//公司简称
				
				this.common.postHttp(this.backstage.ajaxUrl + "/findEmpOrgByCodeTypeHigher",this,{"code":response["code"]})
				.then(res=> {
					this.rangeList.other = [];
					res.forEach((v,i)=>{
						if(v.etype == "按学历"){
							this.rangeList.other.push(v.name.substring(0,2)+"占比高");
						}else if(v.etype == "按工种"){
							this.rangeList.other.push(v.name+"占比高");
						}
					})
					 
				},e => {
					err = this.common.errorAjax(e);
					console.log(e);
				});
				
			},err => {
				err = this.common.errorAjax(err);
				if(err){
				this.$message.error(err);
			}
			});
			
		},
		tableList(code,type){
			if(!type){
				const p = {"code":code};
				this.common.postHttp(this.backstage.ajaxUrl + "/findEmpOrgByGzAndCode" ,this,p)
				.then(response => {
					//console.log(response)
					this.tableLoading1 = false;
					let pageSize = response.pageSize;
					let total = response.total;
					this.pageObj.pageSize = pageSize;
					this.pageObj.total = total;
					
					this.tableData0 = this.tableData1 = [];
					var _this = this;
					var index0 = 0,index1 = 0;
					response.list.forEach(function(v,i){
						if(v.empRatio){
							v.empRatio += "%"
						}
						if(v.updateTime){
							var val = v.updateTime.toString().split(".");
							v.updateTime = val[0].replace("T"," ");
						}
						if(v.etype.indexOf("学历") > -1){
							_this.tableData0 = _this.tableData0.concat(v);
							_this.tableData0[index0].key = response.pageNum * pageSize - (pageSize-1) + index0;
							index0++
						}else if(v.etype.indexOf("工种") > -1){
							_this.tableData1 = _this.tableData1.concat(v);
							_this.tableData1[index1].key = response.pageNum * pageSize - (pageSize-1) + index1;
							index1++
							
							//console.log(_this.tableData1)
						}
						//v.key = response.pageNum * pageSize - (pageSize-1) + i;
					})
				},err => {
					err = this.common.errorAjax(err);
					if(err){
				this.$message.error(err);
			}
				})
			}
			//高管人员获取
			const obj = {"code":this.code,"page":this.pageObj.current};
			//console.log(obj)
			const url = "findListedCompanyMgrByCode";
			const _this = this;
			this.backstage.tableList(obj,url,_this);
		}
	},
	mounted(){
		this.infoTable();
		//console.log(this.code)
		
	},
	created(){
	      //获取传入的参数
	      var param = this.$route.query.id;//传入的id值
	      this.params = param
	      console.log(param)
	      //如果使用query方式传入的参数使用this.$route.query 接收
	      //如果使用params方式传入的参数使用this.$router.params接收
	},
}
</script>

<style>
</style>