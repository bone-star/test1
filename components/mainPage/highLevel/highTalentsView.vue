<template>
	<div>
		<h1 class="title">
			{{goBack}}详情
		</h1>
		<h1 class="title-card m-bottom">
			<span class="text-blue">
			{{basicsView.name}}
			</span>
			（
			{{basicsView.sex+"&nbsp;"}}
			{{basicsView.age?basicsView.age+"岁":"&nbsp;"}}
			{{basicsView.edu+"&nbsp;"}}
			{{basicsView.talentCategory}}）
		</h1>
		    
	    <a-tabs type="card">
	    <a-tab-pane key="1" tab="主要经历">
	    	
			<a-card class="radius" :bordered="false" title="学习经历">
	    		<a-timeline>
				    <a-timeline-item v-for="eduExpItem in mainView.eduExp">
				    	<a-row>
				    		<a-col :span="3">
				    			时间：{{eduExpItem.startTime+'&nbsp-&nbsp'+eduExpItem.endTime}}
				    		</a-col>
				    		<a-col :span="5">
				    			学习经历：{{eduExpItem.unit}}
				    		</a-col>
				    		<a-col :span="3">
				    			<span class="text-blue">{{eduExpItem.education}}</span>
				    		</a-col>
				    	</a-row>
				    </a-timeline-item>
	    		</a-timeline>
	    	</a-card>
    		<a-card :bordered="false" title="工作经历" class="m-top">
    			<a-row v-for="jobExpItem in mainView.jobExp">
					<a-col :span="4">
						<p>时间：
							{{jobExpItem.startTime == null? "无" : jobExpItem.startTime}}
				    			&nbsp; - &nbsp;
				    		{{jobExpItem.endTime == null? "无" : jobExpItem.endTime}}
						</p>
						<p>职务：<span class="text-grey">{{jobExpItem.unitJob}}</span></p>
					</a-col>
					<a-col :span="20">
						<p>单位：<span class="text-blue">{{jobExpItem.unit == null ? "无" : jobExpItem.unit}}</span></p>
						<p>级别：<span class="text-grey">{{jobExpItem.technicalLevel == null ? "无" : jobExpItem.technicalLevel}}</span></p>
					</a-col>
					<a-divider />
				</a-row>
			</a-card>
	    </a-tab-pane>
	    <a-tab-pane key="2" tab="专利">
	    	<a-card :bordered="false" class="m-top">
	    		<Wtable
	    			:columns="columns"
	    			:model="formModel"
	    			title="获得专利"
	    			tableUrl="findPatentByTalentId"
	    		></Wtable>
	    	</a-card>
	    </a-tab-pane>
	    <a-tab-pane key="3" tab="项目成果">
	     	<a-card :bordered="false" class="m-top">
	    		<Wtable
	    			:columns="columns1"
	    			:model="formModel"
	    			title="项目成果"
	    			tableUrl="findProjectResultByTalentId"
	    		></Wtable>
	    	</a-card>
	    </a-tab-pane>
	     <a-tab-pane key="4" tab="期刊论文">
	     	<a-card :bordered="false" class="m-top">
		     	<Wtable
	    			:columns="columns2"
	    			:model="formModel"
	    			title="期刊论文"
	    			tableUrl="findPaperByTalent"
	    		></Wtable>
    		</a-card>
	    </a-tab-pane>
		</a-tabs>
	</div>
</template>

<script>
import Wtable from "@/components/tableTemplate.vue";
const columns = [
	{
		title: '序号',
	    dataIndex: 'key',
	    key: 'i',
	    width:70,
	    align:"center" 
	    //scopedSlots: { customRender: 'name' },
    },{
	    title: '专利名称',
	    dataIndex: 'patentName',
	    key: 'patentName',
	    align:'center',
	    width:200
    },{
	    title: '专利授权号',
	    dataIndex: 'patentNo',
	    key: 'patentNo',
	    align:'center'
	    //scopedSlots: { customRender: 'name' },
    },{
	    title: '申请号',
	    dataIndex: 'patentCallNo',
	    key: 'patentCallNo',
	    align:'center',
	   // ellipsis:true
	    //scopedSlots: { customRender: 'name' }
  	},{
	    title: '公告时间',
	    dataIndex: 'publishTime',
	    key: 'publishTime',
	    align:'center' 
  	},{
	    title: '申请时间',
	    dataIndex: 'patentCallTime',
	    key: 'patentCallTime',
	    align:'center'
  	},{
	    title: '发明类型',
	    dataIndex: 'type',
	    key: 'type',
	    align:'center' 
  	},{
	    title: '申请人',
	    dataIndex: 'applicant',
	    key: 'applicant',
	    align:'center',
	    width:150
  	},{
	    title: '所有发明人',
	    dataIndex: 'inventor',
	    key: 'inventor',
	    align:'center',
	    width:150
  	},{
	    title: '专利发表单位',
	    dataIndex: 'company',
	    key: 'company',
	    align:'center',
	    width:150
  	}
];
const columns2 = [
	{
		title: '序号',
	    dataIndex: 'key',
	    key: 'i',
	    width:70,
	    align:"center" 
	    //scopedSlots: { customRender: 'name' },
    },{
	    title: '项目名称',
	    dataIndex: 'projectOrPaperName',
	    key: 'projectOrPaperName',
	    align:'center',
	    width:200
    },{
	    title: '论文类型',
	    dataIndex: 'paperType',
	    key: 'paperType',
	    align:'center'
	    //scopedSlots: { customRender: 'name' },
    },{
	    title: '发表时间',
	    dataIndex: 'annTime',
	    key: 'annTime',
	    align:'center',
	    ellipsis:true
	    //scopedSlots: { customRender: 'name' }
  	},{
	    title: '作者',
	    dataIndex: 'baseName',
	    key: 'baseName',
	    align:'center' 
  	},{
	    title: '导师',
	    dataIndex: 'tutor',
	    key: 'tutor',
	    align:'center'
  	},{
	    title: '毕业学校',
	    dataIndex: 'graduate',
	    key: 'graduate',
	    align:'center' 
  	},{
	    title: '发表单位',
	    dataIndex: 'unit',
	    key: 'unit',
	    align:'center' 
  	},{
	    title: '研究领域',
	    dataIndex: 'researchFieldBase',
	    key: 'researchFieldBase',
	    align:'center' 
  	}
];
const columns1 = [
	{
		title: '序号',
	    dataIndex: 'key',
	    key: 'i',
	    width:70,
	    align:"center" 
	    //scopedSlots: { customRender: 'name' },
    },{
	    title: '项目名称',
	    dataIndex: 'projectOrPaperName',
	    key: 'projectOrPaperName',
	    align:'center',
	     width:200
    }/*,{
	    title: '获奖名称',
	    dataIndex: 'patentNo',
	    key: 'patentNo',
	    align:'center'
	    //scopedSlots: { customRender: 'name' },
    },{
	    title: '奖项等级',
	    dataIndex: 'patentCallNo',
	    key: 'patentCallNo',
	    align:'center',
	    ellipsis:true
	    //scopedSlots: { customRender: 'name' }
  	}*/,{
	    title: '提名单位或专家',
	    dataIndex: 'tutor',
	    key: 'tutor',
	    align:'center' 
  	},{
	    title: '主要贡献人',
	    dataIndex: 'student',
	    key: 'student',
	    align:'center'
  	},{
	    title: '单位所在省份',
	    dataIndex: 'province',
	    key: 'province',
	    align:'center' 
  	}
];
//页面引入
export default{
	data(){
		return{
			tableLoading:true,
			tableTotal:0,
      		columns,
      		columns1,
      		columns2,
			pageObj:{"pageSize":10,"total": 10,"current":1},
			tableData:[],
			formModel:{
				"id":""
			},
			param:0,
			goBack:"",
			url:"",
			dataLoad:true,
			basicsView:{
				"talentCategory":"博士及导师、主任医师",
				"sex":"男",
				"edu":"-",
				"name":"俞阿勇",
				"age":""
			},
			mainView:{
				//教育经历
				"eduExp":[],
				"jobExp":[]
			}
		}
	},
	components:{
		Wtable
	},
	methods:{
		getData(type){
			//console.log(typeof(this.param))
 			var param = {"id":this.param};
 			var url;
 			if(type == "basics"){
 				url = "/getTalentBaseInfo";
 			}else if(type == "main"){
 				url = "/getTalentEduAndJobExp";
 			}
 			this.common.postHttp(this.backstage.ajaxUrl + url ,this,param)
 			.then(response => {
 				if(type == "basics"){
	 				this.basicsView = response;
	 			}else if(type == "main"){
	 				this.mainView = response;
	 			}
 			},err => {
 				err = this.common.errorAjax(err);
				if(err){
				this.$message.error(err);
			}
 			})
		},
		tableList(){
			let obj = this.formModel;
			let url = "findPatentByTalentId";
			let _this = this;
			this.backstage.tableList(obj,url,_this);
		},
		tableChage(pagination){//分页切换
			this.tableLoading = true;//表格加载中
			this.pageObj.current = pagination.current;//当前页
			this.formModel.page = pagination.current;
			this.tableList();
		}
	},
	created(){
	      //获取传入的参数
	      this.formModel.id = this.param = this.$route.query.id;
	      
	      this.goBack = this.$route.query.goBack;
	      this.url = this.$route.query.url;
	     //console.log(this.param)
	      //如果使用query方式传入的参数使用this.$route.query 接收
	      //如果使用params方式传入的参数使用this.$router.params接收
	},
	mounted(){
		this.getData("basics");
		this.getData("main");
		this.tableList();
	},
	
}
</script>

<style>
</style>