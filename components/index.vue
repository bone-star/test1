<template>
  	<a-layout>
		<a-layout-header :style="{ position: 'fixed', width: '100%'}">
			<wHead></wHead>
		</a-layout-header>
		<a-layout>
			<a-layout-content :style="{ marginTop: '3.7rem' }">
				
				<a-breadcrumb>
				    当前位置：
				    <a-breadcrumb-item v-for="item in routes">
				    	<router-link v-if="item.name"  :to="{'name':item.name}">
					   		{{item.breadcrumbName}}
					    </router-link>
					    <span v-else>
					    	{{item.breadcrumbName}}
					    </span>
				    </a-breadcrumb-item> 
				</a-breadcrumb>
				<router-view>
					<home></home>
  				</router-view>
			</a-layout-content>
		</a-layout>
	</a-layout>
</template>

<script>
//页面引入
import home from '@/components/mainPage/home';
import wHead from '@/components/header';
import appJs from '@/assets/js/app.js'
export default {
  	name: 'App',
 	data(){
	  	return{
	  		collapsed:false,
	  		menuList:this.backstage.menuList,
	  		otherMenuList:this.backstage.otherMenuList,
  		    routes: [
	            {
	            	path: 'index',
	            	breadcrumbName: 'home',
	            },
	            {
	            	path: 'first',
	            	breadcrumbName: 'first',
	          	},
	          	{
	            	path: 'second',
	           		breadcrumbName: 'second',
	          	}
	        ]
	  		
	  	}
  	
  	},
	components:{
	  	home,
	  	wHead
	},
	methods:{
	  	routeChange(){
	  		//获取传入的参数
		    //this.routes;
		    var id = this.$route.query.id,
	      		goBack = this.$route.query.goBack,
	      		href = this.$route.query.url;
	      		
		    var path = (this.$route.path).split("/");//传入的id值
		    var routes = [];
		    //console.log(path);
		    path.slice(1,path.length).forEach((val,index) => {
		    	//console.log(val)
		    	var title = "",
		    		url = "",
		    		arry = [];
		    	
	    		if(val == "index"){
	    			title = "首页";
	    			url = "home";
	    		}else{
	    			if(index == 0){
	    				routes.push({"name":"home","breadcrumbName":"首页"});
	    			}
		    		if(val.indexOf("View") == -1){
				    	this.menuList.forEach((v,i)=>{//从特定菜单中找出url对应中文名
				    		if(index == 0){
				    			if(val == v.key){
				    				title = v.name;
				    				url = "";
				    			}
				    		}
				    		if(index > 0 && v.sub.length > 0){
				    			//title = v.name
				    			v.sub.forEach((key,j)=>{
				    				if(val == key.url){
				    					title = key.name;
				    					url = val;
				    				}
				    			})
				    		}
				    	})
				    }else if(val.indexOf("View") > -1 || val.indexOf("view") > -1){
					    if(goBack && href){//列表点击进入详情
					    	routes.push({"name":href,"breadcrumbName":goBack});
					    }
		    			this.otherMenuList.forEach((k)=>{
		    				//	console.log(k.name)
		    				if(val == k.url){
		    					title =goBack?goBack + k.name : k.name;
		    					url = "";//详情页为最后一页无需
		    				}
		    			})
		    		}
				 }
		    	routes.push({"name":url,"breadcrumbName":title});
		    })
		    //console.log(routes)
		    
		    this.routes = routes
	  	}
	},
    created(){
	   this.routeChange()
    },
    mounted(){
	  	appJs.remFontSize()
	},
    watch: {
      // 如果路由有变化，会再次执行该方法
      "$route": "routeChange"
    }
  
}
</script>

<style>
.ant-layout-header{
	padding: 0px;
	height: 3.555rem;
	z-index: 10;
}
 
.ant-layout-sider-collapsed {
}
.ant-layout-has-sider{
	position: absolute;
    top: 64px;
    left: 0px;
    right: 0px;
    bottom: 0px;
}
.ant-layout-has-sider .ant-layout-sider{
	/*background: #FFFFFF;*/ 
}
.ant-layout-content{
	position: relative;
	padding: 0px 2.5rem 20px 2.5rem;
}
</style>
