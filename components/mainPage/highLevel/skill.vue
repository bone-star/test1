<template>
	<div>
		<!--<a-breadcrumb>
		    <a-breadcrumb-item>
		    	<router-link :to="{name:'home'}">首页</router-link>
		    </a-breadcrumb-item>
		    <a-breadcrumb-item>人才信息库</a-breadcrumb-item>
		    <a-breadcrumb-item>专业技术人才</a-breadcrumb-item>
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
							label="人才等级" 
							:label-col="{ span: 7 }" 
							:wrapper-col="{ span: 17 }"
						>
						    <a-select  v-model="formModel.talentLevel">
						        <a-select-option v-for="items in talentLevelList" :key="items">
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
					<a-col :span="6">
						<a-form-item label="年龄范围" :label-col="{ span: 7 }">
						    <a-col :span="8"><a-input v-model="formModel.startAge"/></a-col>
						    <a-col :span="1" align="center">-</a-col>
						    <a-col :span="8"><a-input v-model="formModel.endAge"/></a-col>
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
		
		<!--<h1 class="title">
			专业技术人才
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
				:to="{name:'highTalentsView',query:{'id':val.id,'goBack':'专业技术人才','url':url}}"
			>
          		{{text}}
          	</router-link>
		</a-table>-->
		
		<wTable
			:columns="columns"
			tableUrl="getMajorTalentByConditionAndPage"
			:model="formModel"
			title="专业技术人才"
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
	    width:80,
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
	    align:'center' 
  	},{
	    title: '人才等级',
	    dataIndex: 'talentLevel',
	    key: 'talentLevel',
	    align:'center' 
  	},{
	    title: '毕业院校',
	    dataIndex: 'graduatedUniversity',
	    key: 'graduatedUniversity',
	    align:'center' 
  	},{
	    title: '最高学历',
	    dataIndex: 'highestDegree',
	    key: 'highestDegree',
	    align:'center' 
  	},{
	    title: '研究领域',
	    dataIndex: 'researchField',
	    key: 'researchField',
	    align:'center' ,
	    width:200
  	}
];
export default{
	data(){
		return{
			cityList:[{"addr":"不限","code":0}],//城市
			areaList:[{"addr":"不限"}],
			url:"",
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
				"birthProvince":"不限",
				"birthCity":"不限",
				"politicalOutlook":"",
				"talentLevel":"请选择",
				"edu":"请选择",
				"graduateUniversity":"",
				"graduateProvince":"不限",
				"field":"",
				"page":1
			},
			educationList:["请选择","博士研究生","硕士研究生","本科","专科"],//最高学历
			talentLevelList:["请选择","国内外顶尖人才","国家级人才","其他高级人才"],
			toHref:{name:'highTalentsView',query:{'goBack':'专业技术人才','url':this.url}}
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