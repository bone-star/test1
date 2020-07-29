<template>
	<div>
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
							label="学历" 
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
						<a-form-item label="职务" :label-col="{ span: 7 }" :wrapper-col="{ span: 17 }">
						    <a-input placeholder="请输入职务" v-model="formModel.job"/>
					    </a-form-item>					
					</a-col>
					<a-col :span="6">
						<a-form-item label="任职公司代码" :label-col="{ span: 7 }" :wrapper-col="{ span: 17 }">
						    <a-input placeholder="请输入公司代码" v-model="formModel.code"/>
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
		<!--<h1 class="title">
			党政人才上市高管
			&nbsp;&nbsp;
			<span>
			共查询到
			<span class="text-red">{{tableTotal}}</span>
			条记录
			</span>
		</h1>
		<a-spin tip="Loading..." :spinning="tableLoading">
			<a-table :columns="columns" :data-source="tableData" :pagination="pageObj" @change="tableChage">
			    <router-link 
			    	target="_blank"
					slot="name" 
					slot-scope="text,val" 
					:to="{name:'listTalentsView',query:{'id':val.id,'goBack':'党政人才上市高管','url':'politics'}}"
				>
	          		{{text}}
	         	</router-link>
			</a-table>
		</a-spin>-->
		<wTable
			:columns="columns"
			tableUrl="getPartyMgrByConditionAndPage"
			:model="formModel"
			title="党政人才上市高管"
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
	    width:100,
	    align:"center" 
	    //scopedSlots: { customRender: 'name' },
   },{
	    title: '姓名',
	    dataIndex: 'name',
	    key: 'name',
	    scopedSlots: { customRender: 'name' },
		align:"center" 
  },{
	    title: '性别',
	    dataIndex: 'sex',
	    key: 'sex',
		align:"center" 
  },
  {
	    title: '年龄',
	    dataIndex: 'age',
	    key: 'age',
	    align:"center" 
    
  },
  {
	    title: '学历',
	    dataIndex: 'education',
	    key: 'education',
    	align:"center" 
  },
  {
	    title: '职务',
	    dataIndex: 'job',
	    key: 'job',
	    align:"center",
	    width:250
  },
  {
	    title: '公司代码',
	    dataIndex: 'code',
	    key: 'code',
	    align:"center" 
    
  },
  {
	    title: '任职时间',
	    dataIndex: 'jobTime',
	    key: 'jobTime',
	    align:"center" 
    
  }
];

export default{
	data(){
		return{
      		columns,
			tableLoading:true,
			educationList:["请选择","博士","硕士","本科","专科"],//最高学历
			searchCardState:false,
			searchStateText:"更多",
			cardClass:"card-hide",
			icon:"down",
			formModel:{
				"name":"",
				"startAge":"",
				"endAge":"",
				"edu":"请选择",
				"code":""
			},
			toHref:{name:'listTalentsView',query:{'goBack':'党政人才上市高管','url':'politics'}}
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
		}
	},
	mounted(){
		var searchBox = document.getElementsByClassName("search-box")[0];
		var row = searchBox.getElementsByClassName("ant-row")[0];
		this.searchBottomBtn = this.backstage.search.open(row);
	} 
}
</script>

<style>
</style> 