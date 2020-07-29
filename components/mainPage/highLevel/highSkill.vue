<template>
	<div>
		<!--<a-breadcrumb>
		    <a-breadcrumb-item>
		    	<router-link :to="{name:'home'}">首页</router-link>
		    </a-breadcrumb-item>
		    <a-breadcrumb-item>人才信息库</a-breadcrumb-item>
		    <a-breadcrumb-item>高技能人才</a-breadcrumb-item>
		</a-breadcrumb>-->
		<h1 class="title">查询条件</h1>
		<a-card :bordered="false">
			<a-form class="ant-advanced-search-form" id="searchForm"  @submit="submitForm">
				<a-row :gutter="24" :class="cardClass" class="search-box" >
					<a-col :span="6" >
						<a-form-item label="姓名" :label-col="{ span: 7 }" :wrapper-col="{ span: 17 }">
						    <a-input  placeholder="请输入姓名" v-model="formModel.name"/>
					    </a-form-item>					
					</a-col>
					<a-col :span="6">
						<a-form-item 
							label="最高学历" 
							:label-col="{ span: 7 }" 
							:wrapper-col="{ span: 17 }"
						>
						    <a-select  v-model="formModel.edu">
						        <a-select-option v-for="educationItem in educationList" :value="educationItem" >
						          	{{educationItem}}
						        </a-select-option>
						    </a-select>
					    </a-form-item>					
					</a-col>
					<a-col :span="6">
						<a-form-item 
							label="专业类型" 
							:label-col="{ span: 7 }" 
							:wrapper-col="{ span: 17 }"
						>
						    <a-select  v-model="formModel.technicalType">
						        <a-select-option v-for="items in formList.technicalType" :key="items">
						          	{{items}}
						        </a-select-option>
						    </a-select>
					    </a-form-item>					
					</a-col>
					<a-col :span="6">
						<a-form-item 
							label="专业等级" 
							:label-col="{ span: 7 }" 
							:wrapper-col="{ span: 17 }"
						>
						    <a-select  v-model="formModel.technicalLevel">
						        <a-select-option v-for="items in formList.technicalLevel" :key="items">
						          	{{items}}
						        </a-select-option>
						    </a-select>
					    </a-form-item>					
					</a-col>
					<a-col :span="6">
						<a-form-item label="毕业院校" :label-col="{ span: 7 }" :wrapper-col="{ span: 17 }">
						    <a-input placeholder="请输入毕业院校" v-model="formModel.graduateUniversity"/>
					    </a-form-item>					
					</a-col>
					<a-col :span="6">
						<a-form-item label="毕业省份" :label-col="{ span: 7 }" :wrapper-col="{ span: 17 }">
						    <a-select 
								:loading="cityLoad" 
								v-model="formModel.graduateProvince"
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
					<a-col :span="6" >
						<a-form-item label="研究领域" :label-col="{ span: 7 }" :wrapper-col="{ span: 17 }">
						    <a-input  placeholder="请输入研究领域" v-model="formModel.field"/>
					    </a-form-item>					
					</a-col>
					<a-col :span="6">
						<a-form-item label="籍贯" :label-col="{ span: 7 }">
						    <a-col :span="8">
						    	<a-select 
									:loading="cityLoad" 
									v-model="formModel.birthProvince"
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
						    </a-col>
						    <a-col :span="1" align="center">-</a-col>
						    <a-col :span="8">
						    	<a-select 
									:loading="areaLoad"
									v-model="formModel.birthCity"
								>
									<a-select-option 
										v-for="(areaItem,key) in areaList"
										:value="areaItem.addr" 
									>
							          	{{areaItem.addr}}
							        </a-select-option>
								</a-select>
						    </a-col>
					    </a-form-item>					
					</a-col>
					<a-col :span="6">
						<a-form-item label="年龄范围" :label-col="{ span: 7 }">
						    <a-col :span="8"><a-input v-model="formModel.startAge"/></a-col>
						    <a-col :span="1" align="center">-</a-col>
						    <a-col :span="8"><a-input v-model="formModel.endAge"/></a-col>
					    </a-form-item>					
					</a-col>
				</a-row>
				<div class="card-footer flex-center">
			      	<a-button type="primary"  html-type="submit">
						查询
					</a-button>
					<a-button @click="searchReset">
						重置
					</a-button>
					<a-button type="link" @click="searchState">
				     	{{searchStateText}}<a-icon :type="icon"/>
				    </a-button>
				</div>
			</a-form>
		</a-card>
		<!--
		<h1 class="title">
			高技能人才
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
			<router-link 
				target="_blank"
				slot="name" 
				slot-scope="text,val" 
				:to="{name:'highTalentsView',query:{'id':val.id,'goBack':'高技能人才','url':url}}"
			>
          		{{text}}
          	</router-link>
		</a-table>-->
		
		<wTable
			:columns="columns"
			tableUrl="getTechTalentByConditionAndPage"
			:model="formModel"
			title="高技能人才"
			ref="mychild"
			:toHref="toHref"
		></wTable>
	</div>
</template>

<script>
import wTable from '@/components/tableTemplate.vue';
const columns = [
	{
		title: '序号',
	    dataIndex: 'key',
	    key: 'i',
	    width:70,
	    align:"center" 
	    //scopedSlots: { customRender: 'name' },
    },{
	    title: '姓名',
	    dataIndex: 'name',
	    key: 'name',
	    align:'center',
	    scopedSlots: { customRender: 'name' }
    },{
	    title: '性别',
	    dataIndex: 'sex',
	    key: 'sex',
	    align:'center'
	    //scopedSlots: { customRender: 'name' },
    },{
	    title: '国籍',
	    dataIndex: 'nationality',
	    key: 'nationality',
	    align:'center'
	    //scopedSlots: { customRender: 'name' }
  	},{
	    title: '年龄',
	    dataIndex: 'age',
	    key: 'age',
	    align:'center' 
  	},{
	    title: '出生省份',
	    dataIndex: 'birthProvince',
	    key: 'birthProvince',
	    align:'center' 
  	},{
	    title: '出生城市',
	    dataIndex: 'birthCity',
	    key: 'birthCity',
	    width:150,
	    align:'center' 
  	},{
	    title: '专业类型',
	    dataIndex: 'technicalType',
	    key: 'technicalType',
	    align:'center',
	    width:150
  	},{
	    title: '专业类型等级',
	    dataIndex: 'technicalLevel',
	    key: 'technicalLevel',
	    align:'center' 
  	},{
	    title: '毕业院校',
	    dataIndex: 'graduatedUniversity',
	    key: 'graduatedUniversity',
	    align:'center',
	    width:150
  	},{
	    title: '最高学历',
	    dataIndex: 'highestDegree',
	    key: 'highestDegree',
	    align:'center' 
  	},{
	    title: '现工作单位',
	    dataIndex: 'nowUnit',
	    key: 'nowUnit',
	    align:'center',
	    width:150
  	}
];
export default{
	data(){
		return{
			url:"",
			toHref:{name:'highTalentsView',query:{'goBack':'高技能人才','url':this.url}},
			cityList:[{"addr":"不限","code":0}],//城市
			areaList:[{"addr":"不限"}],
			cityLoad:true,
			areaLoad:false,
			searchStateText:"更多",
			icon:"down",
			searchBottomBtn:false,
      		columns,
			cardClass:"card-hide",
			formModel:{
				"name":"",
				"startAge":"",
				"endAge":"",
				"edu":"请选择",
				"birthProvince":"不限",
				"birthCity":"不限",
				"politicalOutlook":"",
				"technicalLevel":"请选择",
				"graduateUniversity":"",
				"graduateProvince":"不限",
				"field":"",
				"technicalType":"请选择",
				"page":1
			},
			educationList:["请选择","博士研究生","硕士研究生","本科","专科"],//最高学历
			formList:{
				"technicalType":[
					"请选择",
					"工程技术系列",
					"经济专业系列",
					"会计人员系列",
					"统计人员系列",
					"高等教育系列",
					"中等教育系列",
					"技校讲教系列",
					"技校实习指导系列",
					"中学教师系列",
					"小学教师系列",
					"科研人员系列",
					"实验人员系列",
					"农业农艺系列",
					"农业兽医系列",
					"农业畜牧系列",
					"出版编审系列",
					"出版编辑系列",
					"出版校对系列",
					"翻译人员系列",
					"新闻记者系列",
					"新闻编辑系列",
					"图文档案系列",
					"播音人员系列",
					"卫生医疗系列",
					"卫生药剂系列",
					"卫生护理系列",
					"卫生其他系列",
					"工艺美术系列",
					"艺术演员系列",
					"艺术演奏系列",
					"艺术编剧系列",
					"艺术导演系列",
					"艺术指挥系列",
					"艺术作曲系列",
					"艺术美术系列",
					"舞美设计系列",
					"舞台设计系列",
					"体育教练系列",
					"海关专业系列",
					"律师人员系列",
					"公证人员系列",
					"船舶驾驶系列",
					"船舶轮机系列",
					"船舶电机系列",
					"船舶报务系列",
					"民航驾驶系列",
					"民航领航系列",
					"民航通信系列",
					"民航机械系列",
					"政工人员系列",
					"终生荣誉系列",
					"自定义系列"
				],
				"technicalLevel":["请选择","正高级","高级","中级","初级","员级","助理级"]
			}
		}
	},
	components:{
		wTable
	}, 
	methods:{
		searchReset(){//重置
			this.backstage.searchReset(this);
		},
		submitForm(e){//提交
			this.backstage.submitForm(e,this);
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
					this.formModel.birthCity = this.areaList[0].addr;
				},err => {
					err = this.common.errorAjax(err);
					if(err){
				this.$message.error(err);
			}
				})
			}else{
				this.areaList = [{"addr":"不限"}];
				this.formModel.birthCity = this.areaList[0].addr;
			}
		}
	},
	mounted(){
		this.city();
		var searchBox = document.getElementsByClassName("search-box")[0];
		var row = searchBox.getElementsByClassName("ant-row")[0];
		this.searchBottomBtn = this.backstage.search.open(row);
	},
	created() {
 		this.url = this.$route.name;
	}
}
</script>

<style>
</style>