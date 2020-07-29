<template>
	<div>
		<!--<a-breadcrumb>
		    <a-breadcrumb-item>
		    	<router-link :to="{name:'home'}">首页</router-link>
		    </a-breadcrumb-item>
		    <a-breadcrumb-item>人才载体信息库</a-breadcrumb-item>
		    <a-breadcrumb-item>
		    	<router-link :to="{name:'register'}">工商注册企业</router-link>
		    </a-breadcrumb-item>
		    <a-breadcrumb-item>工商注册企业详情</a-breadcrumb-item>
		</a-breadcrumb>-->
		<h1 class="title">工商注册企业详情</h1>
		<a-card :bordered="false" :title="chAbbreviation" class="m-bottom">
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
		   <!-- <p>
		    	企业特点：
		    	<a-tag color="blue">
			        {{rangeList.other[0]}}
			    </a-tag>
			    <a-tag color="cyan">
			    	{{rangeList.other[1]}}
			    </a-tag>
		    </p> -->
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
	</div>
</template>

<script>
export default{
	data(){
		return{
			params:"",
			chAbbreviation:"",//公司简称
			infoList:[
				{"name":"企业名称","dataName":"name","data":"白云机场股份有限公司"},
				{"name":"注册资本(万元)","dataName":"registerFunds"},
				{"name":"实缴资本","dataName":"paidInCapital"},
				{"name":"法定代表人","dataName":"legalRepresentative"},
				{"name":"经营状态","dataName":"state"},
				{"name":"曾用名","dataName":"oldName"},
				{"name":"所属行业","dataName":"industry"},
				{"name":"统一社会信用代码","dataName":"creditCode"},
				{"name":"纳税人识别号","dataName":"taxpayerIdentificationNumber"},
				{"name":"工商注册号","dataName":"businessRegistrationNumber"},
				{"name":"成立时间","dataName":"establishmentDate"},
				{"name":"企业类型","dataName":"enterpriseType"},
				{"name":"营业期限","dataName":"operatingPeriod"},
				{"name":"行政区划","dataName":"administrativeDivision"}
			],
			rangeList:{
				"small":[
					{"name":"经营范围","dataName":"businessScope","data":"经营范围"}
				],
				"table":[ 
					{"name":"审核时间","dataName":"reviewDate","data":""},
					{"name":"更新时间","dataName":"updateTime","data":""},
					{"name":"注册地址","dataName":"registerAddress","data":""},
					{"name":"是否拥有重点实验室","dataName":"hasKeyLab","data":""},
					{"name":"是否拥有重点实验室","dataName":"hasKeyLab","data":""},
					{"name":"是否拥有国家级孵化器","dataName":"isNationalIncubator","data":""},
					{"name":"是否拥有院士工作站","dataName":"isAcademicianWorkstation","data":""},
					{"name":"是否拥有高新技术企业","dataName":"isHighTech","data":""},
					{"name":"拥有专利数","dataName":"hasPatentNum","data":""}
				],
				"other":["博士","技术"]
			},
			pageObj:{"pageSize":5,"total": 10,"current":1},
			code:""
		}
	},
	components:{
	}, 
	methods:{
		infoTable(){
			let params = {"id":this.params};
			this.common.postHttp(this.backstage.ajaxUrl + "/findBusinessInfoById",this,params)
			.then(response => {
				response = response[0];
				console.log(response)
				var _this = this;
				this.infoList.forEach(function(v,i){
					v.data = response[v.dataName];
				});
				this.rangeList.table.forEach(function(v,i){
					var data = response[v.dataName];
					if(v.dataName.indexOf("Time") > -1){
						data = response[v.dataName].split("T");
						data = data[0];
					}
					v.data = data;
				});
				this.rangeList.small.forEach(function(v,i){
					v.data = response[v.dataName];
				});
				this.code = response["code"]
				//this.tableList(this.code);
				this.chAbbreviation = response["name"];//公司简称
				
				this.common.postHttp(this.backstage.ajaxUrl + "/findEmpOrgByCodeTypeHigher",this,{"code":response["code"]})
				.then(res=> {
					console.log(res)
					if(res.length > 0){
						this.rangeList.other = [];
						res.forEach((v,i)=>{
							if(v.etype == "按学历"){
								this.rangeList.other.push(v.name.substring(0,2)+"占比高");
							}else if(v.etype == "按工种"){
								this.rangeList.other.push(v.name);
							}
						})
					}
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
	      //如果使用query方式传入的参数使用this.$route.query 接收
	      //如果使用params方式传入的参数使用this.$router.params接收
	},
}
</script>

<style>
</style>