<template>
	<div class="login">
		<wHead :headerTitle="headerTitle"></wHead>
		<embed class="login-img" :src='require("@/assets/img/loginImg.svg")' width="70%"></embed>
		<a-form @submit="loginSubmit">
			<h1 class="form-title text-center">
				欢迎登录
			</h1>
		    <a-form-item class="m-top">
			    <a-input v-model="formInline.username" placeholder="请输入账号">
			    	<img slot="prefix" :src="require('../assets/img/user.png')" />
			        <!--<a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />-->
			    </a-input>
		    </a-form-item>
		    <a-form-item>
			    <a-input v-model="formInline.password" type="password" placeholder="请输入密码">
			       <img slot="prefix" :src="require('../assets/img/lock.png')" />
			       <!--<a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />-->
			    </a-input>
		    </a-form-item>
		    <p class="text-red" style="position: relative;z-index: 10;">
				{{msg}}
			</p>
		    <a-form-item>
			    <a-button 
			        type="primary"
			        html-type="submit"
			        block
			    >
			        	登录
			    </a-button>
		    </a-form-item>
			<div class="login-bg"></div>
		</a-form>
	</div>
</template>

<script>
import wHead from '@/components/largeScreen/header.vue';
import appJs from '@/assets/js/app.js'
export default {
	data() {
	    return {
	      	formInline: {
		        username:'',
		        password:''
	      	},
	      	headerTitle:"人才大数据智能分析与决策平台",
	      	msg:""
	    }
	},
	components:{  
		wHead
	},
	methods: {
	    loginSubmit(e) {
	        //console.log(this.formInline);
	        e.preventDefault();//禁止提交刷新
	        var param = this.formInline,
	        	url = this.backstage.ajaxUrl+"/login";
	        //console.log(param)
	        this.backstage.login(this,param,url);
	      // console.log(param)
	    
		}
	},
    mounted(){
	  	appJs.remFontSize()
	}
};
</script>
<style src="../assets/css/master.css" scoped="scoped"></style>
<style>
	.login{
		position: relative;
		width: 100%;
		height: 100%;
	}
	.login:after{ 
		content: "";
		position: absolute;
		top: 0px;
		bottom: 0px;
		left: 0px;
		right: 0px;
		z-index: -1;
		background-image: url(../assets/img/bg.jpg);
    	background-position: center;
    	background-size:100%;
    	background-repeat: no-repeat;
    	background-color: #051540 ;
	}
	.header span {
	    font-size: 1.7rem;
	}
	.login .ant-form{
		position: absolute;
		top: 16.722rem;
		right: 17.556rem;
		padding: 2.05rem 3.278rem 1.889rem 3.278rem;
		width: 29.278rem;
		min-height: 21rem;
	}
	.login-bg{
		content: "";
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0px;
		left: 0px;
		background-image:url(../assets/img/login-border.png); 
		background-size: 100% 100%;
    	background-position: center;
    	background-repeat:no-repeat ;
    	//filter: drop-shadow(0 3px 2px #0061ab) drop-shadow(0 3px 15px #0061ab) drop-shadow(0 3px 5px #0061ab);
		//-webkit-filter: drop-shadow(0 3px 2px #0061ab) drop-shadow(0 3px 15px #0061ab) drop-shadow(0 3px 5px #0061ab);
	
	}
	.ant-form .login-bg:after,
	.login .ant-form .login-bg:before{
		content: "";
	    width: 28rem;
	    height: 10rem;
	    position: absolute;
	    z-index: 10;
	    background-image: url(../assets/img/login-border-light.png);
	    background-position: center;
	    background-repeat: no-repeat;
	}
	.login .ant-form .login-bg:after{
		top:-4.8rem;
	    left:-2.5rem;
	}
	.login .ant-form .login-bg:before{
		bottom: -4.8rem;
	    right: -2.5rem;
	}
	.login .ant-input{
		padding:0.5rem 2rem 0.5rem 2.8rem;
		height: auto;
		background-color:#ffffff;
	}
	.login .ant-form-item{
		padding:0.77rem 0rem;
		position: relative;
		z-index: 10;
	}
	.login .form-title{
		position: relative;
		padding-bottom: 0.9rem;
		font-size: 1.447rem;
		color:#FFFFFF;
		z-index: 10;
	}
	.login .ant-btn{
		padding:0.5rem 2rem;
		height: auto;
	}
	.ant-btn span{
		font-size: 1.2rem;
	}
	.ant-input-affix-wrapper .ant-input-prefix{
		left: 8px;
	}
	.login-img{
		width: 29.278rem;
		height: 25.611rem;
		position: absolute;
		top: 13.722rem;
		left: 19.611rem;
	}
</style>