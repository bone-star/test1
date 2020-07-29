<template>
	<div>
		<!--<a-breadcrumb>
		    <a-breadcrumb-item>
		    	<router-link :to="{name:'home'}">首页</router-link>
		    </a-breadcrumb-item>
		    <a-breadcrumb-item>成果信息库</a-breadcrumb-item>
		    <a-breadcrumb-item>
		    	<router-link to="{name:patentResult}">广东省专利成果</router-link>
		    </a-breadcrumb-item>
		    <a-breadcrumb-item>专利详情</a-breadcrumb-item>
		</a-breadcrumb>-->
		<h1 class="title">专利详情</h1>
		<h1 class="title-card m-bottom">
			{{otherList.name}}
		</h1>
		<a-card class="m-bottom">
			<table class="table-view">
			 	<tr v-for="row in infoList.length%3==0 ? parseInt(infoList.length/3) : parseInt(infoList.length/3)+1" >
			 		<td v-for="(info,i) in infoList.slice((row-1)*3,row*3)">
			 			<span class="table-name">{{info.name}}:</span>
			 			<span class="table-data">{{info.data}}</span>
			 		</td>
			 	</tr>
			 </table>
		</a-card>
		<a-card>
			<div>
				<span class="float-left">搜索关键词：</span>
				<span class="float-left text-blue">{{otherList.searchKeywords}}&nbsp;&nbsp;</span>
			</div>
			<a-divider />
			<b>【摘要】：</b>
			<p>
				{{otherList.abstractContent}}
			</p>
		</a-card>
	</div>
</template>

<script>
	export default{
	data(){
		return{
			params:"",
			infoList:[
				{"name":"申请号","dataName":"applyNumber","data":"白云机场股份有限公司"},
				{"name":"申请日期","dataName":"applyDate"},
				{"name":"状态","dataName":"state"},
				{"name":"公告号","dataName":"noticeNumber"},
				{"name":"公告日期","dataName":"noticeDate"},
				{"name":"主分类号","dataName":"mainClassifierNumber"},
				{"name":"申请人","dataName":"applyPerson"},
				{"name":"发明/设计人","dataName":"designer"},
				{"name":"分类号","dataName":"classificationNumber"},
				{"name":"主分类号","dataName":"mainClassifierNumber"},
			],
			otherList:{
				"searchKeywords":"装置",
				"abstractContent":"描述",
				"name":""
			},
			code:""
		}
	},
	components:{
	}, 
	methods:{
		infoTable(){
			let params = {"id":this.params};
			this.common.postHttp(this.backstage.ajaxUrl + "/findPatentById",this,params)
			.then(response => {
				//console.log(response)
				response = response[0];
				var _this = this;
				this.infoList.forEach(function(v,i){
					v.data = response[v.dataName];
					if(v.dataName.indexOf("Date") > -1){
						v.data = response[v.dataName].toString().split("T")[0]
					}
				});
				Object.keys(this.otherList).forEach((v,i)=>{
					_this.otherList[v] = response[v];
				})
			},err => {
				err = this.common.errorAjax(err);
				if(err){
				this.$message.error(err);
			}
			});
			
		},
		
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