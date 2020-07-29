<template>
	<div>
		<!--<a-breadcrumb>
		    <a-breadcrumb-item>
		    	<router-link :to="{name:'home'}">首页</router-link>
		    </a-breadcrumb-item>
		    <a-breadcrumb-item>人才信息库</a-breadcrumb-item>
		    <a-breadcrumb-item>
		    	<router-link :to="{name:url}">{{goBack}}</router-link>
		    </a-breadcrumb-item>
		    <a-breadcrumb-item v-if="goBack?true:false">{{goBack}}详情页</a-breadcrumb-item>
		</a-breadcrumb>-->
		<h1 class="title">{{goBack}}详情</h1>
		<a-card :title="exp.basicInfo.name+'个人简介'" class="m-bottom">
			<a-row type="flex" v-for="row in infoList.length%3==0 ?  parseInt(infoList.length/3) : parseInt(infoList.length/3)+1">
			 	<a-col :span="8" v-for="(info,i) in infoList.slice((row-1)*3,row*3)" class="table-view">
			 		<a-col :span="8" class="table-name">{{info.name}}</a-col>
			 		<a-col :span="16" class="table-data">
			 			<span v-if="!info.data">&nbsp;</span>
			 			{{info.data}}
			 		</a-col>
			 	</a-col>
			</a-row>
		</a-card>
		<a-card :title="exp.basicInfo.name+'个人履历'" class="p-left p-right">
			{{exp.basicInfo.introduce}}
			<a-divider />
			<h3 class="text-grey">
				{{exp.basicInfo.name}}主要任职经历记录共<span class="text-blue">{{exp.jobCount}}</span>个
			</h3>
			<a-timeline>
			    <a-timeline-item v-for="eduExpItem in exp.exp">
			    	<a-row>
			    		<a-col :span="3">
			    			{{eduExpItem.timeStart == null? "无" : eduExpItem.timeStart}}
			    			&nbsp; - &nbsp;
			    			{{eduExpItem.timeEnd == null? "无" : eduExpItem.timeEnd}}
			    		</a-col>
			    		<a-col :span="10">
			    			在
			    			<span class="text-orange">{{eduExpItem.organization == null? "-" : eduExpItem.organization}}</span>
			    			任
			    			<span class="text-blue">{{eduExpItem.job == null? "-" : eduExpItem.job}}</span>
			    		</a-col>
			    	</a-row>
			    </a-timeline-item>
    		</a-timeline>
		</a-card>
	</div>
</template>

<script>
//页面引入
export default{
	data(){
		return{
			param:"",
			goBack:"",
			url:"",
			infoList:[
				{"name":"姓名","dataName":"name","data":""},
				//{"name":"出生日期","dataName":"","data":""},
				//{"name":"国籍","dataName":"","data":""},
				{"name":"学历","dataName":"education","data":""},
				{"name":"在职状态","dataName":"","data":"在职"},
				{"name":"公司代码","dataName":"code","data":""},
				{"name":"在职公司","dataName":"jobName","data":""},
				{"name":"职务","dataName":"job","data":""},
				{"name":"任职日期","dataName":"jobTime","data":""},
				//{"name":"任期终止日","dataName":"","data":""},
				{"name":"主要任职经历","dataName":"","data":""},
			],
			exp:{
				"exp": [ //任职经历
			        {
			            "id": null,
			            "mgrId": "11597", //高管id
			            "timeStart": null, //任职开始时间
			            "timeEnd": null,   //任职结束时间
			            "organization": "信息安全事业部", //所在单位
			            "job": "主任" 
			        }
			    ],
			    "jobCount": 8,  //职务个数
			    "basicInfo": {}
			}
		}
	},
	components:{
	},
	methods:{
		getDate(){
			var param={"id":this.param};
			this.common.postHttp(this.backstage.ajaxUrl + "/findMgrInfoById" ,this,param)
 			.then(response => {
 				//console.log(response);
 				var _this = this;
 				var code;
 				this.infoList.forEach(function(v,i){
 					if(v.dataName){
						v.data = response.basicInfo[v.dataName];
					}
 					if(v.dataName == "code"){
 						code = response.basicInfo[v.dataName];
 					}
 					
					//console.log(this.infoList);
				});
				
				//console.log(code)
				//根据股票代码查询公司
				_this.common.postHttp(_this.backstage.ajaxUrl + "/findListedCompanyInfo" ,_this,{"code":code})
				.then(res=>{
					this.infoList[4].data = res.list[0].fullName;
				})
				_this.infoList[_this.infoList.length-1].data = "在" + response.basicInfo.jobInListedCount + "家上市公司共担任过" + response.basicInfo.jobCount+"个职位";
				
				this.exp = response;
				//console.log(code);
 			},err => {
 				err = this.common.errorAjax(err);
				if(err){
				this.$message.error(err);
			}
 			})
		}
	},
	created(){
	      //获取传入的参数
	      this.param = this.$route.query.id;
	      this.goBack = this.$route.query.goBack;
	      this.url = this.$route.query.url;
	     //console.log(this.param)
	      //如果使用query方式传入的参数使用this.$route.query 接收
	      //如果使用params方式传入的参数使用this.$router.params接收
	},
	mounted(){
		this.getDate()
	}
	
}
</script>

<style>
</style>