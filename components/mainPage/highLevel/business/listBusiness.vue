<template>
	<div>
		<h1 class="title">查询条件</h1>
		<a-card :bordered="false">
			<a-form class="ant-advanced-search-form" id="searchForm"  @submit="submitForm">
				<a-row :gutter="24" :class="cardClass" class="search-box" >
					<a-col :span="6" >
						<a-form-item label="姓名" :label-col="{ span: 7 }" :wrapper-col="{ span: 17 }">
						    <a-input  
						    	placeholder="请输入姓名" 
						    	v-model="formModel.name" 
						    />
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
						<a-form-item label="职务" :label-col="{ span: 7 }" :wrapper-col="{ span: 17 }">
						    <a-input placeholder="请输入职务" v-model="formModel.job"/>
					    </a-form-item>					
					</a-col>
					<a-col :span="6">
						<a-form-item 
							label="管理类型" 
							:label-col="{ span: 7 }" 
							:wrapper-col="{ span: 17 }"
						>
						    <a-select  v-model="formModel.mgrType">
						        <a-select-option v-for="items in mgrTypeList" :key="items">
						          	{{items}}
						        </a-select-option>
						    </a-select>
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
			上市企业经营管理人才
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
				:to="{name:'listTalentsView',query:{'id':val.id,'goBack':'上市企业经营管理人才','url':url}}"
			>
          		{{text}}
          	</router-link>
		</a-table>-->
		<wTable
			:columns="columns"
			tableUrl="getMgrByConditionAndPage"
			:model="formModel"
			title="上市企业经营管理人才"
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
	    title: '年龄',
	    dataIndex: 'age',
	    key: 'age',
	    align:'center' 
  	},{
	    title: '最高学历',
	    dataIndex: 'education',
	    key: 'education',
	    align:'center' 
  	},{
	    title: '职务',
	    dataIndex: 'job',
	    key: 'job',
	    align:'center' 
  	},{
	    title: '公司代码',
	    dataIndex: 'code',
	    key: 'code',
	    align:'center' 
  	},{
	    title: '任职时间',
	    dataIndex: 'jobTime',
	    key: 'jobTime',
	    align:'center' 
  	}
];
export default{
	data(){
		return{
			url:"",
			searchStateText:"更多",
			icon:"down",
			searchBottomBtn:false,
			tableTotal:0,
      		columns,
			pageObj:{"pageSize":10,"total": 10,"current":1},
			tableLoading:true,
			cardClass:"card-hide",
			formModel:{
				"name":"",
				"startAge":"",
				"endAge":"",
				"edu":"请选择",
				"job":"",
				"mgrType":"请选择",
				"code":"",
				"page":1
			},
			yearList:this.backstage.yearD(),
			tableData:[],
			educationList:["请选择","博士","硕士","本科","专科"],//最高学历
			mgrTypeList:["请选择","董事","监事","高管"],
			toHref:{name:'listTalentsView',query:{'goBack':'上市企业经营管理人才','url':this.url}}
		}
	},
	components:{
		wTable
	}, 
	methods:{
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
		searchReset(){//重置
			this.backstage.searchReset(this);
		},
		submitForm(e){//提交
			this.backstage.submitForm(e,this);
		}
	},
	mounted(){
		var searchBox = document.getElementsByClassName("search-box")[0];
		var row = searchBox.getElementsByClassName("ant-row")[0];
		this.searchBottomBtn = this.backstage.search.open(row);
	},
	computed:{
		
	},
	
	watch:{
		
 	},
 	created() {
 		this.url = this.$route.name;
	    this.form = this.$form.createForm(this, {
	      onFieldsChange: (_, changedFields) => {
	        this.$emit('change', changedFields);
	      },
	      mapPropsToFields: () => {
	        return {
	          username: this.$form.createFormField({
	            value: this.username,
	          }),
	        };
	      },
	      onValuesChange: (_, values) => {
	        console.log(values);
	        // Synchronize to vuex store in real time
	        // this.$store.commit('update', values)
	      },
	    });
	}
}
</script>

<style>
</style>