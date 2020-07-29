<template>
	<div class="indexPage">
		<router-link :to="{'name':'largeScreen'}" class="big-screen-btn">
       		<img :src="require('../assets/img/big-screen-btn-ico.png')" />
			<span>大屏看板</span>
        </router-link>
		<div class="indexPage-img" >
			<indexPageImg />
		</div>
		<wHead :headerTitle="headerTitle"></wHead>
		<div class="flex-center">
			<div class="imgs-box">
	          	<div class="item-box" style="top: 0rem;left:10.05rem">
					<span class="icon">
						<img :src="require('../assets/img/largeScreenIcon1.png')">
					</span>
					<p>人才供需监测<br>系统</p>
					<img :src="require('../assets/img/largeScreenIcon.png')">
				</div>
				<div class="item-box" style="top: 9.556rem;left:0rem"> 
					<span class="icon">
						<img :src="require('../assets/img/largeScreenIcon2.png')">
					</span>
					<p>人才流动监测与 流失预警系统</p>
					<img :src="require('../assets/img/largeScreenIcon.png')">
				</div>
				<a href="./#/index">
					<div class="item-box" style="bottom: 4rem;left:9.111rem">
						<span class="icon">
							<img :src="require('../assets/img/largeScreenIcon3.png')">
						</span>
						<p>人才库管理平台</p>
						<img :src="require('../assets/img/largeScreenIcon.png')">
					</div>
				</a>
				<a href="http://xypj.xuanlife.com.cn/">
					<div class="item-box" style="bottom: 0rem;left:24.944rem">
						<span class="icon">
							<img :src="require('../assets/img/largeScreenIcon4.png')">
						</span>
						<p>人才信用评价<br>系统</p>
						<img :src="require('../assets/img/largeScreenIcon.png')">
					</div>
				</a>
				<a href="http://hrtps.ahtyt.com/">
					<div class="item-box" style="bottom: 4rem;right:14rem">
						<span class="icon">
							<img :src="require('../assets/img/largeScreenIcon5.png')">
						</span>
						<p>人才政策智能<br>分析系统</p>
						<img :src="require('../assets/img/largeScreenIcon.png')">
					</div>
				</a>
				<div class="item-box"  style="bottom: 6.833rem;right:0rem">
					<span class="icon">
						<img :src="require('../assets/img/largeScreenIcon6.png')">
					</span>
					<p>人才企业双向<br>推荐系统</p>
					<img :src="require('../assets/img/largeScreenIcon.png')">
				</div>
				
				<div class="item-box" style="top: 1.556rem;right:6.056rem">
					<span class="icon">
						<img :src="require('../assets/img/largeScreenIcon7.png')">
					</span>
					<p>人才就业创业<br>分析与服务平台</p>
					<img :src="require('../assets/img/largeScreenIcon.png')">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import wHead from '@/components/largeScreen/header.vue';
import appJs from '@/assets/js/app.js';
import indexPageImg from '@/components/svg.vue';
export default{
	data(){
		return{
			headerTitle:"人才大数据智能分析与决策平台"
		}
	},
	components:{  
		wHead,
		indexPageImg
	}, 
	methods:{
	},
	mounted(){
	}
}
</script>

<style src="../assets/css/master.css" scoped="scoped"></style>
<style scoped="scoped">
	.big-screen-btn{
		position: absolute;
		top:2.28rem ;
		right:2.22rem ;
		z-index: 10;
	}
	.big-screen-btn img{
		margin-right: 0.83rem;
		width: 1.33rem;
		height: 1.06rem;
	}
	.big-screen-btn span{
		font-size: 0.89rem;
		color: #00fdfa;
	}
	.indexPage-img{
		position: absolute; 
	    top: 0rem;
	    left: 0px;
	    right: 0rem;
	    bottom: 0px;
	    z-index: 10;
	    /* width: 100%; */
	    /* height: 100%; */
	    z-index: 0;
	}
	.indexPage-img svg{
		width: 100%;
   		height: 100%;
	}
	.indexPage{
		
	}
	.indexPage:after{
		content: "";
		position: absolute;
		top: 0px;
		bottom: 0px;
		left: 0px;
		right: 0px;
		z-index: -1;
		background-image: url(../assets/img/indexPage.jpg);
    	background-position: center;
    	background-size:100% ;
	}
	>>>.header span{
		font-size: 1.7rem;
	}
	.imgs-box{
		padding: 0px 0.5rem;
		width: 63.667rem;
		height: 33.444rem;
		position: relative;
		top: 11.278rem;
	}
	.item-box{
		position: absolute;
		width:8.5rem;
		/*height: 8.4rem;*/
	}
	.item-box img{
		/*position: absolute;
		left: 0px;
		bottom: 0px;*/
		width:8.5rem;
		height: 7.944rem;
	}
	.item-box .icon{
		display: block;
		height: 3rem;
		text-align: center;
	}
	.item-box .icon img{
		width:auto;
		height: 100%;
		/*box-shadow: 1.022rem 0.256rem 1.106rem 0.228rem 
		rgba(0, 97, 171, 0.24);*/
		filter: drop-shadow(0 3px 2px #0061ab) drop-shadow(0 3px 15px #0061ab) drop-shadow(0 3px 5px #0061ab);
		-webkit-filter: drop-shadow(0 3px 2px #0061ab) drop-shadow(0 3px 15px #0061ab) drop-shadow(0 3px 5px #0061ab);
	}
	.item-box p{
		width: 8.5rem;
		font-size: 1.111rem;
		position: absolute;
	    z-index: 1;
	    bottom: 10px;
	    text-align: center;
	    color: #00fdfa; 
	}
</style>