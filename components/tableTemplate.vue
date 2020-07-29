<template>
	<div>
		<h1 class="title">
			{{title}}
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
			<a v-if="viewUrl" target="_blank" slot="name" slot-scope="text,val" @click="viewUrl(val.name)">{{ text }} </a>
			<router-link else
		    	target="_blank"
				slot="name" 
				slot-scope="text,val" 
				:to="toId(val)"
			>
          		{{text}}
         	</router-link>
		</a-table>
	</div>
</template>

<script>
export default{
	data(){
		return{
			tableTotal:0,
			pageObj:{"pageSize":10,"total": 10,"current":1},
			tableLoading:true,
			tableData:[]
		}
	},
	components:{
	},
	props:["columns","model","title","tableUrl","viewUrl","toHref"],
	methods:{
		toId(val){
			this.toHref.query.id = val.id;
			return this.toHref
		},
		tableList(){
			let obj = "";
			/*if(!this.model.page){
				this.model.page = 1
			}*/
			obj = this.model;
			let url = this.tableUrl;
			let _this = this;
			this.backstage.tableList(obj,url,_this);
		},
		tableChage(pagination){//分页切换
			this.tableLoading = true;//表格加载中
			this.pageObj.current = pagination.current;//当前页
			this.model.page = pagination.current;
			this.tableList();
		}
	},
	mounted(){
		this.tableList();
	}
}
</script>

<style>
</style>