import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import indexPage from '@/components/indexPage.vue'//聚合首页
import largeScreen from '@/components/largeScreen.vue'//聚合首页
import login from '@/components/login.vue'//个人中心
import index from '@/components/index.vue'//首页
import home from '@/components/mainPage/home.vue'//首页
import test from '@/components/test.vue'//个人中心
import area from '@/components/largeScreen/area.vue'
import hr from '@/components/largeScreen/hr.vue'

import cookies from 'vue-cookies'
Vue.use(cookies);
Vue.prototype.cookies = cookies

/*import largeScreenIndex from '@/components/largeScreen/largeScreenIndex.vue'//大屏
import hr from '@/components/largeScreen/hr.vue'//大屏*/

import error from '@/components/404.vue'//党政人才
//人才信息库
//import {politics,business,otherBusiness,skill} from '@/components/mainPage/highLevel'
/*import politics from '@/components/mainPage/highLevel/politics.vue'//党政人才
import business from '@/components/mainPage/highLevel/business.vue'//企业经营管理人才
import otherBusiness from '@/components/mainPage/highLevel/otherBusiness.vue'//企业经营管理人才
import skill from '@/components/mainPage/highLevel/skill.vue'//专业技术人才*/
//人才载体信息库

//大屏
const childrenPath = [
	  {
      	path: '/index',//首页
      	name: 'home',
      	component: home,
      	alias:['/']
     },
     {
      	path: '/test',//首页
      	name: 'test',
      	component: test,
      	alias:['/test']
     },{
      	path: '/largeScreen',//大屏看板
      	name: 'largeScreen',
      	component: largeScreen
      //	redirect:"/home"
    }
      
]; 
function importPages (r,file) {
    r.keys().forEach(key => {//key格式 ./xx.vue.js
    	let url = (key.split('.'))[1].replace(/\//,"");
    	let name = url;
    	if(name.split("/").length>1){
    		name = name.split("/");
    		name = name[name.length-1];
    	}
    	//console.log(name)
        childrenPath.push({ path:"/"+file+"/"+name , name:name,component: (resolve)=>require(["@/components/mainPage/"+file+"/"+url],resolve)})
    });
}
importPages(require.context('@/components/mainPage/highLevel',true, /\.vue$/),"highLevel");
importPages(require.context('@/components/mainPage/talent',true, /\.vue$/),"talent");
importPages(require.context('@/components/mainPage/project',false, /\.vue$/),"project");
importPages(require.context('@/components/mainPage/result',true, /\.vue$/),"result");
//importPages(require.context('@/components/mainPage/analysis',true, /\.vue$/),"analysis");
//console.log(childrenPath)
export default new Router({
	mode:'hash',//去掉地址栏#号
    routes: [
    	{
	      	path: '/',//首页 
	      	name: 'index',
	      	component: index,
	      	children:childrenPath
	    },{
	      	path: '/login',
	      	name: 'login',
	      	component: login
	    },{
	      	path: '/indexPage',
	      	name: 'indexPage',
	      	component: indexPage
	    },{
	      	path: '/area',
	      	name: 'area',
	      	component: area
	    },{
	      	path: '/hr',
	      	name: 'hr',
	      	component: hr
	    },{
		    path: '*',
		    name: 'error',
		    component: (resolve) => require(['@/components/404.vue'],resolve)//第二种方式地址重定向
	    }
    ]//childrenPath
})
