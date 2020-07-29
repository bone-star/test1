<template>
	<div>
		<!--<a-breadcrumb>
		    <a-breadcrumb-item>
		    	<router-link :to="{name:'home'}">首页</router-link>
		    </a-breadcrumb-item>
		    <a-breadcrumb-item>人才载体信息库</a-breadcrumb-item>
		    <a-breadcrumb-item>工商注册企业</a-breadcrumb-item>
		</a-breadcrumb>-->
		<h1 class="title">查询条件</h1>
		<a-card :bordered="false">
			<a-form class="ant-advanced-search-form" id="searchForm"  @submit="submitForm">
				<div :class="cardClass" class="search-box" >
					<a-row :gutter="24" >
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="企业名称" :label-col="{ span: 9 }" :wrapper-col="{ span: 15}">
							    <a-input  placeholder="请输入企业名称" v-model="formModel.name"/>
						    </a-form-item>					
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}" >
							<a-form-item label="法定代表人" :label-col="{ span: 9 }" :wrapper-col="{ span: 15}">
							    <a-input  placeholder="请输入法人代表" v-model="formModel.legalRepresentative"/>
						    </a-form-item>					
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="经营状态" :label-col="{ span:9 }"  :wrapper-col="{ span: 15}">
								<a-select v-model="formModel.state" >
						          	<a-select-option  v-for="item in formList.stateList" :value="item">
							          	{{item}}
							        </a-select-option>
								</a-select>
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="行业分类" :label-col="{ span:9 }"  :wrapper-col="{ span: 15}">
								<a-select v-model="formModel.industry" >
						          	<a-select-option  v-for="item in formList.industryList" :value="item">
							          	{{item}}
							        </a-select-option>
								</a-select>
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="统一社会信用代码" :label-col="{ span:9 }"  :wrapper-col="{ span: 15}">
								<a-input  placeholder="请输入统一社会信用代码" v-model="formModel.code"/>
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="纳税人识别号" :label-col="{ span:9 }"  :wrapper-col="{ span: 15}">
								<a-input  placeholder="请输入识别号" v-model="formModel.taxpayerIdentificationNumber"/>
							
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="工商注册号" :label-col="{ span:9 }"  :wrapper-col="{ span: 15}">
								<a-input  placeholder="请输入工商注册号" v-model="formModel.businessRegistrationNumber"/>
							
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="组织机构代码" :label-col="{ span:9 }"  :wrapper-col="{ span: 15}">
								<a-input  placeholder="请输入组织机构代码" v-model="formModel.organizationCode"/>
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="成立时间" :label-col="{ span:9 }"  :wrapper-col="{ span: 15}">
								<a-col span="11">
								 	<a-date-picker
								 		placeholder="开始时间" 
								 		@change="timeStart"
								 		v-model="formModel.startDate"
								 	/>
								</a-col>
								<a-col span="2" class="text-center">-</a-col>
								<a-col span="11">
									<a-date-picker v-model="formModel.endDate" @change="timeEnd" placeholder="结束时间"/>
								</a-col>
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" :lg="{span:6}">
							<a-form-item label="企业类型" :label-col="{ span:9 }"  :wrapper-col="{ span: 15}">
								<a-select v-model="formModel.enterpriseType" >
						          	<a-select-option  v-for="item in formList.enterpriseType" :value="item">
							          	{{item}}
							        </a-select-option>
								</a-select>
							</a-form-item>
						</a-col>
						<a-col :span="6">
							<a-form-item label="所在城市" :label-col="{ span: 9 }" :wrapper-col="{ span: 15}">
							    <a-col :span="11">
							    	<a-select 
										:loading="cityLoad" 
										v-model="formModel.administrativeProvince"
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
							    <a-col :span="2" align="center">-</a-col>
							    <a-col :span="11">
							    	<a-select 
										:loading="areaLoad"
										v-model="formModel.administrativeCity"
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
			工商注册企业列表
			&nbsp;&nbsp;
			<span>
			共查询到
			<span class="text-red">{{tableTotal}}</span>
			条记录
			</span>
		</h1>
		<a-spin tip="Loading..." :spinning="tableLoading">
			<a-table :columns="columns" :data-source="tableData" :pagination="pageObj" @change="tableChage">
				<router-link target="_blank" slot="name" slot-scope="text,val" :to="{name:'marketView',query:{id:val.id,goBack:'工商注册企业',url:'market'}}">
	          		{{text}}
	          	</router-link>
				<!--<a slot="name" slot-scope="text">查看详情</a>-->
			</a-table>
		</a-spin>
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
	    title: '公司名称',
	    dataIndex: 'name',
	    key: 'name',
	    align:'center',
	    width:200,
	    scopedSlots: { customRender: 'name' },
    },{
	    title: '组织机构代码',
	    dataIndex: 'creditCode',
	    key: 'creditCode',
	    align:'center',
	    width:180
	    //scopedSlots: { customRender: 'name' },
    },{
	    title: '成立时间',
	    dataIndex: 'establishmentDate',
	    key: 'establishmentDate',
	    align:'center'
	   // scopedSlots: { customRender: 'name' },
    },{
	    title: '企业类型',
	    dataIndex: 'enterpriseType',
	    key: 'enterpriseType',
	    align:'center',
	    width:200
	   // scopedSlots: { customRender: 'name' },
    },{
	    title: '所在省份',
	    dataIndex: 'administrativeProvince',
	    key: 'administrativeProvince',
	    align:'center',
	   // scopedSlots: { customRender: 'name' },
    },{
	    title: '所在地市',
	    dataIndex: 'administrativeCity',
	    key: 'administrativeCity',
	    align:'center',
	   // scopedSlots: { customRender: 'name' },
    },{
	    title: '法定代表人',
	    dataIndex: 'legalRepresentative',
	    key: 'legalRepresentative',
	    align:'center',
	    width:150
	   // scopedSlots: { customRender: 'name' },
    },{
	    title: '经营状态',
	    dataIndex: 'state',
	    key: 'state',
	    align:'center',
	   // scopedSlots: { customRender: 'name' },
    },{
	    title: '行业分类',
	    dataIndex: 'industry',
	    key: 'industry',
	    align:'center',
	    width:150
	   // scopedSlots: { customRender: 'name' },
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
			tableData:[],
			tableTotal:0,
      		columns,
			pageObj:{"pageSize":10,"total": 10,"current":1},
			tableLoading:true,
			cardClass:"card-hide",
			formList:{
				"enterpriseType":[
					"请选择",
					"农民专业合作经济组织",
					"一人有限责任公司",
					"内资分公司",
					"事业单位营业",
					"社团法人营业",
					"股份合作制",
					"其他",
					"内资企业法人分支机构",
					"国有经营单位",
					"一人有限责任公司分公司",
					"全民所有制分支机构",
					"股份制企业",
					"联营",
					"集体经营单位",
					"外商投资企业分支机构",
					"集团",
					"台、港、澳投资企业",
					"非公司台、港、澳投资企业分支机构",
					"个体工商户",
					"国有社团法人营业",
					"股份合作制分支机构",
					"其他有限责任公司分公司",
					"台、港、澳投资企业分支机构",
					"全民所有制",
					"股份有限公司",
					"其他股份有限公司分公司",
					"非公司外商投资企业分支机构",
					"国有事业单位营业",
					"合伙企业分支机构",
					"非公司私营企业",
					"合伙企业",
					"个人独资企业分支机构",
					"有限责任公司分公司",
					"内资企业法人",
					"集体所有制",
					"有限合伙企业",
					"分公司",
					"外商投资有限合伙企业",
					"经营单位",
					"有限责任公司",
					"外商投资企业",
					"股份有限公司分公司",
					"普通合伙企业分支机构",
					"集体事业单位营业",
					"普通合伙企业",
					"股份制",
					"集体分支机构",
					"股份制分支机构",
					"非公司台、港、澳企业",
					"其他有限责任公司",
					"内资公司",
					"其他股份有限公司",
					"内资非法人企业、非公司私营企业及内资非公司企业分支机构",
					"个人独资企业",
					"其他类型",
					"外国",
					"办事处",
					"非公司外商投资企业"
				],
				industryList:[
					"请选择",
					"零售业",
					"批发业",
					"科技推广和应用服务业",
					"金属制品业",
					"计算机、通信和其他电子设备制造业",
					"化学原料和化学制品制造业",
					"汽车制造业",
					"电气机械和器材制造业",
					"其他制造业",
					"通用设备制造业",
					"商务服务业",
					"建筑安装业",
					"研究和试验发展",
					"纺织服装、服饰业",
					"房地产业",
					"专业技术服务业",
					"公共设施管理业",
					"专用设备制造业",
					"多式联运和运输代理业",
					"皮革、毛皮、羽毛及其制品和制鞋业",
					"木材加工和木、竹、藤、棕、草制品业",
					"软件和信息技术服务业",
					"橡胶和塑料制品业",
					"道路运输业",
					"非金属矿物制品业",
					"租赁业",
					"造纸和纸制品业",
					"文教、工美、体育和娱乐用品制造业",
					"新闻和出版业",
					"食品制造业",
					"印刷和记录媒介复制业",
					"仪器仪表制造业",
					"家具制造业",
					"水利管理业",
					"建筑装饰、装修和其他建筑业",
					"纺织业",
					"有色金属冶炼和压延加工业",
					"居民服务业",
					"金属制品、机械和设备修理业",
					"医药制造业",
					"其他服务业",
					"电信、广播电视和卫星传输服务",
					"黑色金属冶炼和压延加工业",
					"住宿业",
					"保险业",
					"餐饮业",
					"机动车、电子产品和日用产品修理业",
					"广播、电视、电影和录音制作业",
					"房屋建筑业",
					"互联网和相关服务",
					"废弃资源综合利用业",
					"农、林、牧、渔专业及辅助性活动",
					"其他金融业",
					"土木工程建筑业",
					"农业",
					"渔业",
					"农副食品加工业",
					"资本市场服务",
					"体育",
					"文化艺术业",
					"邮政业",
					"石油、煤炭及其他燃料加工业",
					"水上运输业",
					"林业",
					"电力、热力生产和供应业",
					"生态保护和环境治理业",
					"装卸搬运和仓储业",
					"铁路、船舶、航空航天和其他运输设备制造业",
					"畜牧业",
					"水的生产和供应业",
					"货币金融服务",
					"酒、饮料和精制茶制造业",
					"航空运输业",
					"燃气生产和供应业",
					"非金属矿采选业",
					"其他采矿业",
					"化学纤维制造业",
					"教育",
					"娱乐业",
					"管道运输业",
					"有色金属矿采选业",
					"铁路运输业",
					"卫生",
					"黑色金属矿采选业",
					"开采专业及辅助性活动",
					"煤炭开采和洗选业",
					"石油和天然气开采业",
					"人民政协、民主党派",
					"烟草制品业",
					"群众团体、社会团体和其他成员组织",
					"社会保障",
					"科学研究和技术服务业",
					"社会工作",
					"中国共产党机关",
					"建筑业",
					"土地管理业"
				],
				stateList:["请选择","开业","注销","吊销","迁出","其他","撤销","解散"],
			},
			
			formModel:{
				"name":"",
				"legalRepresentative":"",
				"chairman":"",
				"state":"请选择",
				"industry":"请选择",
				"taxpayerIdentificationNumber":"",
				"businessRegistrationNumber":"",
				"organizationCode":"",
				"startDate":"",
				"endDate":"",
				"enterpriseType":"请选择",
				"administrativeProvince":"不限",
				"administrativeCity":"不限",
				"page":1
			}
		}
	},
	components:{
	}, 
	methods:{
		searchReset(){
			this.formModel = {
				"name":"",
				"legalRepresentative":"",
				"chairman":"",
				"state":"请选择",
				"industry":"请选择",
				"taxpayerIdentificationNumber":"",
				"businessRegistrationNumber":"",
				"organizationCode":"",
				"startDate":"",
				"endDate":"",
				"enterpriseType":"请选择",
				"administrativeProvince":"不限",
				"administrativeCity":"不限",
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
			
			console.log(this.formModel)
			e.preventDefault();//禁止提交刷新
			this.tableLoading = true;
			this.formModel.page = this.pageObj.current = 1;//表格回到第一页
			this.tableList();
		},
		timeStart(a,time){//a占位
			this.formModel.startDate = time;
		},
		timeEnd(a,time){//a占位
			this.formModel.endDate = time;
		},
		tableChage(pagination){//分页切换
			this.tableLoading = true;//表格加载中 
			this.pageObj.current = pagination.current;//当前页
			this.formModel.page = pagination.current;
			this.tableList();
		},
		tableList(){
			let obj = this.formModel;
			let url = "findBusinessRegInfo";
			let _this = this;
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