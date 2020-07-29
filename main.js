import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import router from './router';
import $ from 'jquery';
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false;
Vue.use(Antd);

import less from 'less';
Vue.use(less);

import './mock.js'; 

//引入全局css
import './assets/font/font.css';
import "./assets/css/backstage_master.css";
import "./assets/css/master.css";
import "./assets/font/iconfont.css";


import cookies from 'vue-cookies';
Vue.use(cookies);
Vue.prototype.cookies = cookies;

import './assets/js/jquery.min.js';
import master from './assets/js/master.js';
Vue.use(master); 
Vue.prototype.master = master


import backstage from './assets/js/backstage_master.js'; 
Vue.use(backstage); 
Vue.prototype.backstage = backstage

import common from './assets/js/common.js'; 
Vue.use(common); 
Vue.prototype.common = common;


//引入echarts
import echarts from 'echarts';
import 'echarts/lib/chart/map';
import 'echarts/map/js/china.js';
//import 'echarts/map/js/province/guangdong.js';
Vue.use(echarts) 
Vue.prototype.echarts = echarts


//交互
import axios from 'axios';
Vue.prototype.axios = axios;
import qs from 'qs';
Vue.prototype.qs = qs;


//白名单路由，无需监测
//const userInfo = cookies.get("userInfo");
const whiteList = ['/login','/404']; 
//路由校验
router.beforeEach((to, from, next) => {
	//console.log(to)
	//console.log(from)
	const userInfo = cookies.get("userInfo");
	if(to.path == whiteList[0] || to.path == "/indexPage"){
		document.title = "人才大数据智能分析与决策平台"
	}
	if(whiteList.indexOf(to.path) > -1){//白名单
		next();
			//window.location.href="/#/login"; 
	}
	// 下面均非白名单
	//console.log(cookies,userInfo);
	if(!userInfo){
		//console.log(0)
			//cookie没有值的时候，视为首次登录
		if(whiteList.indexOf(to.path) == -1){//非登录页
			next({"path":"/login"});
			//window.location.href="/#/login"; 
		}
	}else if(userInfo){
		//console.log(1)
		next();
		if(whiteList.indexOf(to.path) > -1){//登录页
			next({"path":"/indexPage"});
			//window.location.href="/#/login"; 
		}
	}
	if(to.path != "/indexPage" && whiteList.indexOf(to.path) == -1){
		document.title = "人才库管理平台"
	}
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<app/>'
});
