<template>
	<div>
		<h1 class="title">查询条件</h1>
		<a-card :bordered="false">
			<a-form class="ant-advanced-search-form" id="searchForm"  @submit="submitForm">
				<div :class="cardClass" class="search-box" >
					<a-row :gutter="24" >
						<a-col :md="{span:8}" >
							<a-form-item label="公司简称" :label-col="{ span:9 }"  :wrapper-col="{ span: 15}">
								 <a-input  placeholder="请输入公司简称" v-model="formModel.chAbbreviation"/>
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" >
							<a-form-item label="企业所在地区" :label-col="{ span:9 }" :wrapper-col="{ span: 15}">
							    <a-select 
									:loading="areaLoad" 
									v-model="formModel.province"
								>
									<a-select-option 
										:value="cityItem.addr" 
										v-for="cityItem in areaList" 
										:key="cityItem.code"
									>
							            {{cityItem.addr}}
							        </a-select-option>
								</a-select>
						    </a-form-item>
					    </a-col>
						<a-col :md="{span:8}"  >
							<a-form-item label="法人代表" :label-col="{ span: 9 }" :wrapper-col="{ span: 15}">
							    <a-input  placeholder="请输入法人代表" v-model="formModel.legalRepresentative"/>
						    </a-form-item>					
						</a-col>
						<a-col :md="{span:8}" >
							<a-form-item label="董事长" :label-col="{ span:9 }"  :wrapper-col="{ span: 15}">
								 <a-input  placeholder="请输入姓名" v-model="formModel.chairman"/>
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" >
							<a-form-item label="是否有院士工作站" :label-col="{ span:9 }"  :wrapper-col="{ span: 15}">
								<a-select v-model="formModel.isAcademicianWorkstation" >
									<a-select-option value="请选择">
							          	请选择
							        </a-select-option>
							        <a-select-option value="是">
							          	是
							        </a-select-option>
							        <a-select-option value="否">
							          	否
							        </a-select-option>
								</a-select>
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" >
							<a-form-item label="行业分类" :label-col="{ span:9 }"  :wrapper-col="{ span: 15}">
								<a-select v-model="formModel.industry" >
						          	<a-select-option  v-for="item in industryList" :value="item">
							          	{{item}}
							        </a-select-option>
								</a-select>
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" >
							<a-form-item label="公司代码" :label-col="{ span:9 }"  :wrapper-col="{ span: 15}">
								 <a-input  placeholder="请输入公司代码" v-model="formModel.code"/>
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" >
							<a-form-item label="上市时间" :label-col="{ span:9 }"  :wrapper-col="{ span: 15}">
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
						<a-col :md="{span:8}" >
							<a-form-item label="是否有重点实验室" :label-col="{ span:9 }"  :wrapper-col="{ span: 15}">
								<a-select v-model="formModel.hasKeyLab" >
									<a-select-option value="请选择">
							          	请选择
							        </a-select-option>
							        <a-select-option value="是">
							          	是
							        </a-select-option>
							        <a-select-option value="否">
							          	否
							        </a-select-option>
								</a-select>
							</a-form-item>
						</a-col>
						<a-col :md="{span:8}" >
							<a-form-item label="是否为高新企业" :label-col="{ span:9 }"  :wrapper-col="{ span: 15}">
								<a-select v-model="formModel.isHighTech" >
									<a-select-option value="请选择">
							          	请选择
							        </a-select-option>
							        <a-select-option value="是">
							          	是
							        </a-select-option>
							        <a-select-option value="否">
							          	否
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
		
		<!--<h1 class="title">
			上市企业列表
			&nbsp;&nbsp;
			<span>
			共查询到
			<span class="text-red">{{tableTotal}}</span>
			条记录
			</span>
		</h1>
		<a-spin tip="Loading..." :spinning="tableLoading">
			<a-table :columns="columns" :data-source="tableData" :pagination="pageObj" @change="tableChage">
				<router-link target="_blank" slot="name" slot-scope="text" :to="{name:'registerView',query:{id:text,goBack:'上市企业',url:'register'}}">
	          		查看详情
	          </router-link>
			</a-table>
		</a-spin>-->
		<wTable
			:columns="columns"
			tableUrl="findListedCompanyInfo"
			:model="formModel"
			title="上市企业列表"
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
	    title: '公司简称',
	    dataIndex: 'chAbbreviation',
	    key: 'chAbbreviation',
	    align:'center',
	    width:250,
	    scopedSlots: { customRender: 'name' }
    },{
	    title: '股票代码',
	    dataIndex: 'code',
	    key: 'code',
	    align:'center'
	    //scopedSlots: { customRender: 'name' },
    },{
	    title: '法人代表',
	    dataIndex: 'legalRepresentative',
	    key: 'legalRepresentative',
	    align:'center',
	   // scopedSlots: { customRender: 'name' },
    },{
	    title: '董事长',
	    dataIndex: 'chairman',
	    key: 'chairman',
	    align:'center',
	   // scopedSlots: { customRender: 'name' },
    },{
	    title: '行业分类',
	    dataIndex: 'industry',
	    key: 'industry',
	    align:'center',
	   // scopedSlots: { customRender: 'name' },
    },{
	    title: '省份',
	    dataIndex: 'province',
	    key: 'province',
	    align:'center'
    }
];
export default{
	data(){
		return{
			toHref:{name:'registerView',query:{'goBack':'本地人才','url':"register"}},
			areaLoad:true,
			areaList:[{"addr":"不限","code":0}],//城市
			searchStateText:"更多",
			icon:"down",
			searchBottomBtn:false,
      		columns,
			cardClass:"card-hide",
			areaLoad:true,
			areaList:[{"addr":"不限"}],
			industryList:["请选择",
				"金融业",
				"交通运输、仓储和邮政业",
				"制造业",
				"租赁和商务服务业",
				"电力、热力、燃气及水生产和供应业",
				"批发和零售业",
				"建筑业",
				"信息传输、软件和信息技术服务业",
				"房地产业",
				"文化、体育和娱乐业",
				"采矿业",
				"科学研究和技术服务业",
				"农、林、牧、渔业",
				"水利、环境和公共设施管理业",
				"教育",
				"住宿和餐饮业",
				"卫生和社会工作",
				"居民服务、修理和其他服务业"
			],
			formModel:{
				"legalRepresentative":"",
				"chAbbreviation":"",
				"chairman":"",
				"industry":"请选择",
				"code":"",
				"hasKeyLab":"请选择",
				"isNationalIncubator":"请选择",
				"isAcademicianWorkstation":"请选择",
				"isHighTech":"请选择",
				"province":"广东",
				"startDate":"",
				"endDate":"",
				"page":1
			}
		}
	},
	components:{
		wTable
	}, 
	methods:{
		searchReset(){//重置
			this.backstage.searchReset(this);
			this.formModel.province = "广东"
		},
		submitForm(e){//提交
			this.backstage.submitForm(e,this);
		},
		timeStart(a,time){//a占位
			//console.log(this.formModel.startDate._d.getDate())
			this.formModel.startDate = time;
		},
		timeEnd(a,time){//a占位
			this.formModel.endDate = time;
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
			var params = {"code":"440000"};//广东
			this.common.postHttp(this.backstage.cityUrl.city,this,"")
			.then(response => {
				this.areaLoad = false;
				this.areaList = this.areaList.concat(response);
				this.areaList.forEach((v,i)=>{
					if(v.addr){
						v.addr = v.addr.toString().replace(/省|市/g,"")
					}
				})
			},err => {
				err = this.common.errorAjax(err);
				if(err){
					this.$message.error(err);
				}
			})
		},
	},
	mounted(){
		this.city();
		var searchBox = document.getElementsByClassName("search-box")[0];
		var row = searchBox.getElementsByClassName("ant-row")[0];
		this.searchBottomBtn = this.backstage.search.open(row);
	}
}
</script>

<style>
</style>