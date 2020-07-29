<template>
	<div>
		<a-row type="flex">
			<a-col :span="4">
				<div class="logo">
					<img src="../assets/img/logo.png" />
					<span>人才库管理平台</span>
				</div>
			</a-col>
			<a-col :span="20">
				<a-menu 
			        mode="horizontal"
			        theme="dark"
			        :selectedKeys="selectedKey"
			        :style="{ lineHeight: '3.5555rem' }"
			    >
		    	
			    	<a-menu-item :key="menuList[0].key">
						<router-link :to="{name:menuList[0].key}">
				       		{{menuList[0].name}}
				        </router-link>
				    </a-menu-item>
			    
				    <a-sub-menu 
			        	v-for="list in menuList"
			        	:key="list.key"
			        	v-if="list.sub.length > 0"
			        >
					 	<span slot="title">{{list.name}}</span>
					 	<!--
					 	二级菜单
					 	这里需要对应路由，url必须唯一
					 	-->
					 	<a-menu-item  v-for="subList in list.sub"  v-if="subList.url || !subList.sub" :key="list.key+'_'+subList.url">
				          	<router-link :to="{name:subList.url}">
				          		{{subList.name}}
				          	</router-link>
				       </a-menu-item>
				      <!-- <a-sub-menu v-for="subList in list.sub" :title="subList.name" v-if="subList.sub" :key="list.key+'_'+subList.url">
				       		<a-menu-item v-for="subLevel in subList.sub" :key="subList.url+'_'+subLevel.url">
				       			{{subLevel.name}}
				       		</a-menu-item>
				       </a-sub-menu>-->
					</a-sub-menu>
					<!--<a-menu-item :key="menuList[menuList.length-1].key">
						<router-link :to="{name:menuList[menuList.length-1].key}">
				       		{{menuList[menuList.length-1].name}}
				        </router-link>
				    </a-menu-item>-->
			    </a-menu>
			</a-col>
		</a-row>
		<div class="user-icon">
			<a-dropdown>
			    <a class="ant-dropdown-link" @click="e => e.preventDefault()">
			    	<span class="user"></span>
			    	<span>{{userInfo}}</span>
			    	
			    </a>
			    <a-menu slot="overlay">
			    	<a-menu-item key="0">
			    		<router-link :to="{name:'largeScreen'}">
				       		大屏看板
				       	</router-link>
				    </a-menu-item>
			    	<a-menu-item key="1">
			    		<router-link :to="{name:'indexPage'}">
				       		返回门户
				       </router-link>
				    </a-menu-item>
				    <a-menu-divider />
				    <a-menu-item key="1">
				        <a target="_blank" rel="noopener noreferrer" @click="quit">退出</a>
				    </a-menu-item>
			    </a-menu>
			</a-dropdown>
			<!--<a-avatar  icon="user" />-->
		</div>
	</div>
</template>

<script>
	
	export default {
		data(){
		  	return{
		  		menuList:this.backstage.menuList,
		  		selectedKey:[],
		  		openKey:[],
		  		userInfo:""
		  	}
		},
		props:["headerTitle"],
	    components:{
	    },
	    methods:{
	    	tabChange(){
	    		var hrefName = this.$route.name;
	    		var href = this.$route.path.split("/");
	    		href = href[href.length - 2];
	    		if(hrefName != "home"){
	    			this.selectedKey = [href+'_'+hrefName];
	    		}else{
	    			this.selectedKey = ["home"];
	    		}
	    		//console.log(this.selectedKey)
	    	},
	    	quit(){//退出系统
	    		//this.cookies.remove("userInfo");
	    		this.common.postHttp(this.backstage.ajaxUrl+"/quit",this,"")
		        .then(response => {
		        	//console.log(response);
		      		if(response.status == "success"){
	    				this.cookies.remove("userInfo");
	    				this.cookies.remove("username");
	    				this.cookies.remove("password");
      					if(!this.cookies.get("userInfo")){
      						//console.log(this.cookies.get("userInfo"));
      						window.location.href="/#/login";
      					}
		      		}else{}
		        },err=>{
		      		console.log(err)
		        })
	    	}
	    	
	    },
	    watch: {
	      // 如果路由有变化，会再次执行该方法
	      "$route": "tabChange"
	    },
	    mounted(){
	    	this.tabChange();
	    	this.userInfo = this.cookies.get("userInfo");
		    //console.log(this.cookies)
	    	//document.cookie.user = "0"
	    	//this.cookies.set("userInfo","123");
			//console.log(this.cookies);
			
		}
	}
</script>

<style scoped="scoped">
	.user-icon .ant-dropdown-link{
		height: 100%;
		display: block;
	}
	.user-icon .ant-dropdown-link .user{
	    float: left;
	    margin-top: 0.6rem;
	    margin-right: 8px;
		width:2.222rem;
		height:2.222rem;
		border-radius:50%;
		overflow:hidden;
		background-image:url('../assets/img/img-bg-orange.png') ;
	}
	.user-icon .ant-dropdown-link span{
		color: #ffffff;
	}
</style>