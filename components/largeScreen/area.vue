<template>
  	<div class="height-full">
  		<wHead :headerTitle="headerTitle"></wHead>
  		<div class="main">
  			<div class="flex-between top-box ratio-16">
				<div class="left-box">
					<div class="ratio-12 p-top p-bottom">
						<div class="card-box tab">
							<div class="tab-item ">
								<div class="card-header flex-center">
									<div class="card-header-title">
										本省人才流入趋势
									</div>
								</div>
								<div class="card-body">
									<div class="chart-box" id="flowChart1"></div>
								</div>
							</div>
							<div  class="tab-item hide">
								<div class="card-header flex-center">
									<div class="card-header-title" >
										<span id="flowChartYear">2019</span>年各地市人才流入排行
										<!-- <div class="year"> 2019</div> -->
									</div>
								</div>
								<div class="card-body" style="padding-top:0px;">
									<div class="chart-box" id="flowChart2"></div>
								</div>
							</div>
							<ul class="tab-btn-group">
								<li class="tab-btn active"><a href="javascript:void(0)"></a></li>
								<li class="tab-btn"><a href="javascript:void(0)"></a></li>
							</ul>
						</div>
					</div>
					<div class="ratio-12 p-top p-bottom">
						<div class="card-box tab">
							<div class="tab-item">
								<div class="card-header flex-center">
									<div class="card-header-title">
										本省年薪分布
									</div>
								</div>
								<div class="card-body">
									<div class="chart-box" id="salaryChart1"></div>
								</div>
							</div>
							<div  class="tab-item hide ">
								<div class="card-header flex-center">
									<div class="card-header-title">
										各地市年薪分布
									</div>
								</div>
								<div class="card-body">
									<div class="chart-box" id="salaryChart2"></div>
								</div>
							</div>
							<ul class="tab-btn-group">
								<li class="tab-btn active"><a href="javascript:void(0)"></a></li>
								<li class="tab-btn"><a href="javascript:void(0)"></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="center-box p-top">
					<div class="flip-row">
						<div class="col-12 p-left flex height-auto">
							<div class="flip-box">
								<div class="flip-header">
									本省人才总数
								</div>
								<div class="flip-body">
									<div class="digit-set flex" id="flip">
										<!-- <ul class="digit down">
											<li class="front">4</li>
											<li class="back"></li>
											<li class="digit-center"></li>
										</ul>-->
										<small>万人</small>
									</div>
									<h1 class="text-red">
										<span class="arrow-up"></span>
										+9%
										<small>较上年比</small>
									</h1>
								</div>
							</div>
						</div>
						<div class="col-12 flex-center height-auto">
							<div class="flip-box">
								<div class="flip-header">
									本省企业总数
								</div>
								<div class="flip-body">
									<div class="digit-set flex" id="businessFlip">
										
									</div>
									<h1 class="text-lightBlue">
										<span class="arrow-down"></span>
										-9%
										<small>较上年比</small>
									</h1>
								</div>
							</div>
						</div>
					</div>
					<div class="map-box" id="mapBox">
						<div class="chart-box" id="mapChart"></div>
					</div>
					<div class="tips">
						<div class="tips-level">
							<h3>等级</h3>
							<div class="levle-row level-blue">
								<span class="legend"></span>
								优
							</div>
							<div class="levle-row level-green">
								<span class="legend"></span>
								良
							</div>
							<div class="levle-row level-yellow">
								<span class="legend"></span>
								中
							</div>
							<div class="levle-row level-red">
								<span class="legend"></span>
								差
							</div>
						</div>
						<div class="tips-box">
							<div class="tips-header flex-center">
								<div class="tips-title">
									人才吸引力评估
								</div>
							</div>
							<div class="tips-body">
								<div class="flex" id="mapChartLevel">
									<div class="svg-pie flex-item-center">
										<div>
											<embed :src="require('../../assets/img/ball.svg')" type="image/svg+xml"/>
											<h1 class="svg-title"><!-- 52<span>分</span> --></h1>
											<p class="svg-area">九江市</p>
										</div>
									</div>
									<div class="level">
										<p><b class="text-yellow">优</b>政策扶持力度</p>
										<p><b class="text-red">优</b>人才就业前景</p>
										<p><b class="text-red">优</b>子女教育环境</p>
										<p><b class="text-green">优</b>生活舒适度等级</p>
										<p><b class="text-green">优</b>社会服务完备度</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="right-box">
					<div class="ratio-12 p-top p-bottom">
						<div class="card-box tab">
							<div class="tab-item ">
								<div class="card-header flex-center">
									<div class="card-header-title">
										本省人才与生产总值转化趋势
									</div>
								</div>
								<div class="card-body">
									<div class="chart-box" id="trendChart"></div>
								</div>
							</div>
							<div  class="tab-item hide ">
								<div class="card-header flex-center">
									<div class="card-header-title">
										各地市人才与生产总值相关性对比
									</div>
								</div>
								<div class="card-body">
									<div class="chart-box" id="salaryRankingChart"></div>
								</div>
							</div>
							<ul class="tab-btn-group">
								<li class="tab-btn active"><a href="javascript:void(0)"></a></li>
								<li class="tab-btn"><a href="javascript:void(0)"></a></li>
							</ul>
						</div>
					</div>
					<div class="ratio-12 p-top p-bottom">
						<div class="card-box tab">
							<div class="tab-item ">
								<div class="card-header flex-center">
									<div class="card-header-title">
										各地市企业与人才数量及占比
									</div>
								</div>
								<div class="card-body">
									<div class="chart-box" id="talentsChart"></div>
								</div>
							</div>
							<div  class="tab-item hide">
								<div class="card-header flex-center">
									<div class="card-header-title">
										各地市企业与人才数量及占比
									</div>
								</div>
								<div class="card-body">
									<div class="chart-box" id="businessChart"></div>
								</div>
							</div>
							<ul class="tab-btn-group">
								<li class="tab-btn active"><a href="javascript:void(0)"></a></li>
								<li class="tab-btn"><a href="javascript:void(0)"></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="bottom-box ratio-8 p-top p-bottom">
				<div class="box flex-between">
					<div class="big-box left-box">
						<div class="box-header">
							<span class="header-icon"></span>
							各地市人才政策分布
						</div>
						<div class="box-body">
							<div class="chart-box" id="policyChart"></div>
						</div>
					</div>
					<div class="big-box center-box">
						<div class="box-header">
							<span class="header-icon"></span>
							各地市高校与研究所分布
						</div>
						<div class="box-body">
							<div class="chart-box" id="schoolInstituteChart"></div>
						</div>
					</div>
					<div class="big-box right-box">
						<div class="box-header">
							<span class="header-icon"></span>
							本省人才需求变化
						</div>
						<div class="box-body">
							<div class="chart-box" id="demandChart"></div>
						</div>
					</div>
				</div>
			</div>
  		</div>
  	</div>
</template>

<script>
//页面引入
import wHead from './header.vue';
import mapJson from '@/assets/js/guangdong.js';
import chartStyle from '@/assets/js/app.js';

import blue  from "@/assets/img/hoverHotBlue.png";
import blue2  from "@/assets/img/hoverHotBlue2.png";
import red  from "@/assets/img/hoverHotRed.png";
import red2  from "@/assets/img/hoverHotRed2.png";
import yellow  from "@/assets/img/hoverHotYellow.png";
import yellow2  from "@/assets/img/hoverHotYellow2.png";
import green  from "@/assets/img/hoverHotGreen.png";
import green2  from "@/assets/img/hoverHotGreen2.png";

import mapImg from "@/assets/img/map-bg.png";

//var icon = require('../../assets/img/hoverHotBlue.png');
export default { 
  name: '',
  data(){
  	return{
  		headerTitle:"广东人才大数据-区域看板",
  		scatterArry:[],
  		mapArry:[],
  		//testImg:pic
  	}
  },
  components:{
  	wHead
  },
  methods:{
	mapChart(){
		//中间地图
		//引入地图
		this.echarts.registerMap('guangdongsFull', mapJson.geoJson);
		this.echarts.registerMap('guangdongs', mapJson.geoJsonOutline);
		//引入图片
		var bg = mapImg;
		var mapBg = new Image();
		mapBg.src = bg;
		//console.log(mapBg)
		//地图数据
		//console.log(scatterArry)
		const mapChart = this.echarts.init(document.getElementById("mapChart"), "shine");
		const mapChartOpt = {
			//tooltip:{},
			title:{},
			geo:[{
				type:'map',
				map:'guangdongsFull', // 自定义扩展图表类型
				label:{
					show:true,
					fontSize:chartStyle.chartFontSize + 3,
					color:"#f0f0f0"
				},
				roam:false,
				zoom:1.18,
			    silent:true,
				aspectScale:0.75,
				itemStyle:{
				   areaColor:"transparent",//1b1464
					borderColor:"#1ba3fc",
					borderWidth:1
				},
				emphasis:{
					label:{show:false,color:"#f0f0f0"},
					itemStyle:{
						areaColor:"rgba(22, 255, 241, 0.15)",
						borderWidth:2,
						borderColor:"#16fff1",
						shadowColor:'rgba(22, 255, 241, 1)',
						shadowBlur:10
					}
				},
				z:2
			},{
				type:'map',
				map:'guangdongs', // 自定义扩展图表类型
				aspectScale:0.75,
				label:{
					show:false
				},
				roam:false,
				zoom:1.18,
			    silent:true,
				itemStyle:{
				   areaColor:"#1b1464",//1b1464
					areaColor:{
						image:mapBg, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
						repeat:'repeat'
					},
					borderColor:"rgba(0, 228, 255, 0.8)",
					borderWidth:2,
					shadowColor:'#0a52ca',
					shadowBlur:10,
					opacity:0.8
				},
				emphasis:{
					label:{show:false},
					itemStyle:{
						 areaColor:{
							image:mapBg, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
							repeat:'repeat'
						},
					}
				},
				z:1
			},{//阴影
				type:'map',
				map:'guangdongs', // 自定义扩展图表类型
				aspectScale:0.75,
				label:{
					show:false
				},
				//left:130,
				roam:false,
				zoom:1.18,
			    silent:true,
				itemStyle:{
				   // areaColor:"#1b1464",//1b1464
					areaColor:"#010d25",
					borderColor:"rgba(0, 0, 0, 0.43)",
					borderWidth:5,
					shadowColor:'rgba(0, 0, 0, 1)',
					shadowBlur:3,
					shadowOffsetX:10,
					shadowOffsetY:10,
					opacity:0.5
				},
				emphasis:{
					label:{show:false},
					itemStyle:{
						areaColor:"#010d25",
					}
				},
				z:0
			},{
				type:'map',
				aspectScale:0.75,
				map:'guangdongs', // 自定义扩展图表类型
				label:{
					show:false
				},
				roam:false,
				zoom:1.18,
			    silent:true,
				itemStyle:{
				   areaColor:"#1b1464",//1b1464
					areaColor:"transparent",
					borderColor:"rgba(0, 228, 255, 0.8)",
					borderWidth:2,
					shadowColor:'#0a52ca',
					shadowBlur:10,
					opacity:0.8
				},
				emphasis:{
					label:{show:false},
					itemStyle:{
						 areaColor:"transparent"
					}
				},
				z:4
			}],
			series:[
			{
				name:'mapFull',
				type:'map',
				geoIndex:0,
				data:this.mapArry
			},
			{
				name:'run',
				type:'scatter',
				coordinateSystem:'geo',
				data:this.scatterArry,
				symbolSize:[40,60],
				//geoIndex:3,
				z:12,
				itemStyle:{
					color:"rgba(0,0,0,0)"
				},
				emphasis:{
					color:"rgba(0,0,0,0)"
				}
			}
			]
		}
		mapChart.setOption(mapChartOpt);
		//引入数据
		this.common.getHttp("/api/map",this,{}).then(response =>{
			$("#mapChart").addClass("chart-done");
			var mapArry = response.list;
			var scatterArry = [];
			
			var mapHotBlue  = "image://" + blue ,
				mapHotBlue2  = "image://" + blue2,
				mapHotRed  = "image://" + red,
				mapHotRed2  = "image://" + red2,
				mapHotYellow  = "image://" + yellow,
				mapHotYellow2  = "image://" + yellow2,
				mapHotGreen  = "image://" + green,
				mapHotGreen2  = "image://" + green2;
			var mapHot = "",mapHot2 = "";
			//地图数据
			mapArry.forEach(function(val,index){
				var valName = val.name;
				if(valName.indexOf("市") == -1){
					valName += "市"
				}
				mapJson.geoJson.features.forEach(function(v,i){
					var name = v.properties.name,
					center = v.properties.center;
					if(name.indexOf("市") == -1){
						name += "市"
					}
					if(name == valName){
						if(val.value >= 50 && val.value < 60){
							mapHot = mapHotRed;
							mapHot2 = mapHotRed2;
						}else if(val.value >= 60 && val.value < 70){
							mapHot = mapHotYellow;
							mapHot2 = mapHotYellow2;
						}else if(val.value >=70 && val.value < 80){
							mapHot = mapHotGreen;
							mapHot2 = mapHotGreen2;
						}else if(val.value >=80 && val.value < 100){
							mapHot = mapHotBlue;
							mapHot2 = mapHotBlue2;
						}
						
						scatterArry.push({"name":valName,"value":[center[0],center[1],val.value],"symbol":mapHot,"oldsymbol":mapHot,"newsysmbol":mapHot2})
					}
				})
			});
			//console.log(scatterArry);
			mapChartOpt.series[0].data = mapArry;
			mapChartOpt.series[1].data = scatterArry;
			mapChart.setOption(mapChartOpt);
			//动画
			var nowThis = this;
			var nowIndex = 0,oldIndex;
			function mapRun(){
				var item = mapChartOpt.series[1];
				if(oldIndex >= 0){
					var oldsymbol = item.data[oldIndex].oldsymbol; 
					item.data[oldIndex].symbol = oldsymbol;
				}
				var newsysmbol = item.data[nowIndex].newsysmbol; 
				item.data[nowIndex].symbol = newsysmbol;
				mapChart.setOption(mapChartOpt);
				oldIndex = nowIndex;
				nowThis.master.highlightChart(mapChart,nowIndex,0);
				var LevelArry = mapChartOpt.series[0].data[nowIndex];
				if(LevelArry){
					mapChartLevel(nowIndex,LevelArry);
				}
				 if(nowIndex >= item.data.length-1){
					nowIndex = 0;
				}else{
					nowIndex++
					//console.log(nowIndex);
				} 
			}
			function mapChartLevel(nowIndex,mapArry){
				$("#mapChartLevel .svg-pie .svg-title").html(mapArry.value + "<span>分</span>");
				$("#mapChartLevel .svg-area").text(mapArry.name);
				var sort = ["政策扶持力度","人才就业前景","子女教育环境","生活舒适度等级","社会服务完备度"];
				var textHtml = ""
				mapArry.score.forEach(function(v,i){
					var textClass = "text-blue",text = "优";
					if(v >= 50 && v < 60){
						textClass = "text-red";
						text = "差"
					}else if(v >= 60 && v < 70){
						textClass = "text-yellow";
						text = "中"
					}else if(v >=70 && v < 80){
						textClass = "text-green";
						text = "良"
					}else if(v >=80 && v < 100){
						textClass = "text-blue";
						text = "优"
					}
					textHtml +=  '<p><b class="'+textClass+'">'+text+'</b>'+sort[i]+'</p>'
				})
				$("#mapChartLevel .level").html(textHtml);
				
			}
			window.onload = function(){mapRun()};
			var mapChartTimer = setInterval(function(){mapRun()},5000);
			mapChart.on("mouseover",function(p){
				clearInterval(mapChartTimer);
				//console.log(p)
				//console.log("移入:"+oldIndex+","+nowIndex)
				var seriesItem = mapChartOpt.series[1];
				if(oldIndex >= 0 && p.data.symbol){
					var oldsymbol = seriesItem.data[oldIndex].oldsymbol; 
					seriesItem.data[oldIndex].symbol = oldsymbol;
				}
				if(p.data.symbol){//1
					var newsysmbol = seriesItem.data[p.dataIndex].newsysmbol; 
					seriesItem.data[p.dataIndex].symbol = newsysmbol;
					mapChartLevel(p.dataIndex,mapChartOpt.series[0].data[p.dataIndex]);
					oldIndex = p.dataIndex;	
					if(p.dataIndex < seriesItem.data.length - 2){
						nowIndex = p.dataIndex + 1;
					}else{
						nowIndex = 0;
					}
				}
				mapChart.setOption(mapChartOpt);
				nowThis.master.highlightChart(mapChart,p.dataIndex,0);
				
			}) 
			$("#mapBox canvas").mouseout(function(){ //完全移出地图时才再次转动
				clearInterval(mapChartTimer);
				mapChartTimer = setInterval(function(){
					mapRun();
				},5000);
			})
		},err => {
			err = this.common.errorAjax(err)
			this.$message.error(err);
		});
		
		//console.log(mapChartOpt.series[1].symbol)
	},
	//本省人才流入趋势
	flowChart1(){
		const flowChart1 = this.echarts.init(document.getElementById("flowChart1"), "shine");
		const flowChartOpt1 = {
			color:chartStyle.colorMap.yellow,
			tooltip:{
				formatter:function(p){
					return p.seriesName + "<br>"+ p.marker + p.name + "：" + p.value[1] +"%"
				}
			},
			dataset:{
		        source:[]
		    },
		    xAxis:$.extend({},chartStyle.axisOpt,{
				type:"category",
				boundaryGap:false,
		        axisLabel:{}
		 	}),
		    yAxis:$.extend({},chartStyle.axisOpt,{
				type:"value",
		    	name:"流入人数(万人)",
				nameTextStyle:{
					align:"left",
					padding:[0,0,-8,0],
					fontSize:chartStyle.chartFontSize
				},
				axisLabel:{}
		 	}), 
		 	grid:{
				top:30,
				bottom:25,
				left:35,
				right:35
			},
			series:[{
				name:"流入人数",
		        type:"line",
				symbol:"circle",
		        symbolSize:6,
				lineStyle:{
					color:"#FFD725"
				},
		        areaStyle:{
					color:new this.echarts.graphic.LinearGradient(
						0, 0, 0, 1,
						[
							{offset:0, color:"#FFDE4C"},
							{offset:0.8, color:"rgba(255,222,76,0)"}
						]
					)
				}
			}]
		}
		flowChart1.setOption(flowChartOpt1); 
		//引入数据
		this.common.getHttp("/api/flowChart1",this,{}).then(response =>{
			$("#flowChart1").addClass("chart-done");
			flowChartOpt1.dataset.source = response.list;
			flowChart1.setOption(flowChartOpt1);
		},err => {
			err = this.common.errorAjax(err)
			this.$message.error(err);
		})
	},
	//本省人才流入趋势
	flowChart2(){
		const flowChart2 = this.echarts.init(document.getElementById("flowChart2"), "shine");
		const flowChartOpt2 = {
			color:chartStyle.colorMap.navy,
			title:{
				text:"2019年",
				textStyle:{
					color:chartStyle.colorMap.navy,
					fontSize:chartStyle.chartFontSize+2
				},
				x:"right",
				y:"top",
				top:20
			},
			legend:$.extend({},chartStyle.legendOpt,{
				top:50,
				x:'center'
			}),
			tooltip:{
				formatter:function(p){
					//p = p[0];
					var unit ="",marker = p.marker;
					if(p.seriesIndex == 0){
						unit = "万人";
					}else if(p.seriesIndex == 1){
						unit = "%";
					}
					if(p.color.toString() === '[object Object]'){
						let color = "background-image:linear-gradient(180deg, #1e9bf3 12%, #2fdad0 100%), linear-gradient(#eeebe9, #eeebe9)";
						marker = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;'+color+';"></span>'
					}
					return p.seriesName + "<br>" + marker+ p.name + "：" + p.value[p.seriesIndex + 1] + unit ;
				}
			},
			dataset:{
		        source:[]
		    },
			
		    xAxis:$.extend({},chartStyle.axisOpt,{
				type:"category",
				//boundaryGap:false,
		        axisLabel:{
					interval: 0,
					color: "#f0f0f0",
					fontSize:chartStyle.chartFontSize - 2,
					rotate:-40
				}
		 	}),
		    yAxis:[$.extend({},chartStyle.axisOpt,{
				type:"value",
		    	name:"流入人才数(万人)",
				nameTextStyle:{
					align:"left",
					padding:[0,0,-8,-30],
					fontSize:chartStyle.chartFontSize
				},
				axisLabel:{}
		 	}),$.extend({},chartStyle.axisOpt,{
				type:"value",
		    	name:"流入率(%)",
				nameTextStyle:{
					padding:[0,0,-8,0],
					fontSize:chartStyle.chartFontSize
				},
				axisLabel:{}
		 	})],
		 	grid:{
				top:75,
				bottom:26,
				left:30,
				right:30
			},
			series:[{
				name:"人才数量",
		        type:"bar",
				barWidth:"30%",
				yAxisIndex:0,
				itemStyle:{
					barBorderRadius:[5,5,0,0],
					color:new this.echarts.graphic.LinearGradient(
						0, 0, 0, 1,
						[
							{offset:0, color:"#F5A773"},
							{offset:0.8, color:"#FFE785"} 
						]
					)
				},
				z:0
			},{
				name:"流入率",
		        type:"line",
				symbol:"circle",
		        symbolSize:6,
				yAxisIndex:1,
				lineStyle:$.extend({},chartStyle.lineShadow,{
					shadowColor:chartStyle.colorMap.navy,
					color:chartStyle.colorMap.navy
				}),
				z:1
			}]
		}
		flowChart2.setOption(flowChartOpt2); 
		//console.log(flowChartOpt2.legend)
		//引入数据
		this.common.getHttp("/api/flowChart2",this,{}).then(response =>{
			$("#flowChart2").addClass("chart-done");
			flowChartOpt2.dataset.source = response.list;
			flowChart2.setOption(flowChartOpt2);
		},err => {
			err = this.common.errorAjax(err)
			this.$message.error(err);
		})
	},
	salaryChart1(){
		//本省年薪分布
		const salaryChart1 = this.echarts.init(document.getElementById("salaryChart1"), "shine");
		const salaryChartOpt1 = {
			color:[chartStyle.colorMap.red,chartStyle.colorMap.orange,chartStyle.colorMap.blue,chartStyle.colorMap.navy,chartStyle.colorMap.violet],
			tooltip:{},
			legend:{
				orient:"vertical",
				left:"2%",
				y:"center",
				itemWidth:chartStyle.legenditemWidth,
				itemHeight:chartStyle.legenditemWidth,
				itemGap: chartStyle.legenditemWidth - 5,
				textStyle:{
					color:"#f0f0f0",
					fontSize:chartStyle.chartFontSize
				}
			},
			dataset:{
				source:[]
			},
			series:[
				{
					name:'年薪收入',
					type:'pie',
					radius:['40%', '60%'],
					center:["60%","50%"],
					avoidLabelOverlap:false,
					label:{
						show:true,
						position:'left',
						color:"#ffffff",
						formatter:'{b}\n {d}%',
						fontSize:chartStyle.chartFontSize
					},
					labelLine:{
						show:true,
						length:10,
						length2:30
					},
					selectedMode:'single',
					selectedOffset:5,
					emphasis:{
						itemStyle:{
						   // shadowColor:'rgba(255, 208, 116, 0.35)',
							shadowBlur:5,
							shadowOffsetX:0,
							shadowOffsetY:0
						}
					}
				}
			]
		}
		salaryChart1.setOption(salaryChartOpt1); 
		//console.log(salaryChartOpt1.legend)
		//引入数据
		this.common.getHttp("/api/salaryChart1",this,{}).then(response =>{
			$("#salaryChart1").addClass("chart-done");
			salaryChartOpt1.dataset.source = response.list;
			salaryChart1.setOption(salaryChartOpt1);
		},err => {
			err = this.common.errorAjax(err)
			this.$message.error(err);
		})
	},
	salaryChart2(){
		//各地市年薪分布
		const salaryChart2 = this.echarts.init(document.getElementById("salaryChart2"), "shine");
		const salaryChartOpt2 = {
			tooltip:{
				formatter:function(p){
				  return p.name + "<br>" + p.seriesName + ":<br>" + p.value[p.seriesIndex + 1] +"万人"
				}
			},
			legend:{
				orient:"vertical",
				right:"10%",
				y:"center",
				itemWidth:chartStyle.legenditemWidth,
				itemHeight:chartStyle.legenditemWidth,
				itemGap: chartStyle.legenditemWidth - 5,
				textStyle:{
					color:"#f0f0f0",
					fontSize:chartStyle.chartFontSize
				}
			},
			angleAxis:$.extend({},chartStyle.axisOpt,{
				axisLine:{show:false},
				type:"category",
				axisLabel:{
					interval: 0,
					color:"#f0f0f0",
					margin:1,
					fontSize:chartStyle.chartFontSize
				}
			}),
		    radiusAxis:{
		    	axisTick:{show:false},
		        axisLine:{show:false},
		        minorTick:{show:false},
		        axisLabel:{show:false},
		        splitLine :{show:false}
		    },
		    polar:{
				center:["40%","50%"],
		    	radius:"85%"
		    },
		    dataset:{
		        source:[]
		    },
		    color:["#FF858E","#BDFD40","#04E392","#0ADAFF","#04A3FF","#663DFC"],
		    series:[{
				coordinateSystem:"polar",
				type:"bar",
				name:"3万以下",
				stack:"薪资分布"
			}, {
				coordinateSystem:"polar",
				type:"bar",
				name:"3~6万",
				stack:"薪资分布"
			}, {
				coordinateSystem:"polar",
				type:"bar",
				name:"6~10万",
				stack:"薪资分布"
			}, {
				coordinateSystem:"polar",
				type:"bar",
				name:"10~15万",
				stack:"薪资分布"
			}, {
				coordinateSystem:"polar",
				type:"bar",
				name:"15~20万",
				stack:"薪资分布"
			}, {
				coordinateSystem:"polar",
				type:"bar",
				name:"20万以上",
				stack:"薪资分布"
			}]
		}
		salaryChart2.setOption(salaryChartOpt2);
		//引入数据
		this.common.getHttp("/api/salaryChart2",this,{}).then(response =>{
			$("#salaryChart2").addClass("chart-done");
			salaryChartOpt2.dataset.source = response.list;
			salaryChart2.setOption(salaryChartOpt2);
		},err => {
			err = this.common.errorAjax(err)
			this.$message.error(err);
		})
	},
	//本省人才与生产总值转化趋
	trendChart(){
		const trendChart = this.echarts.init(document.getElementById("trendChart"), "shine");
		const trendChartOpt = {
			color:[chartStyle.colorMap.red,chartStyle.colorMap.navy],
			tooltip:{
				formatter:function(p){
					//p = p[0];
					var unit ="";
					if(p.seriesIndex == 0){
						unit = "亿元";
					}else if(p.seriesIndex == 1){
						unit = "万人";
					}
					return p.seriesName + "<br>" + p.marker+ p.name + "：" + p.value[p.seriesIndex + 1] + unit ;
				}
			},
			legend:$.extend({},chartStyle.legendOpt,{
				top:3,
				x:'center',
				
			}),
			xAxis:$.extend({},chartStyle.axisOpt,{
				type:"category",
				boundaryGap:false,
				axisLabel:{}
			}),
			yAxis:[$.extend({},chartStyle.axisOpt,{
				splitLine:{
					show:false,
					lineStyle:{
						type:"dashed",
						color:"#afbeed"
					}
				},
				type:"value",
				name:'生产总值(亿元)',
				nameTextStyle:{
					align:"left",
					fontSize:chartStyle.chartFontSize,
					padding:[0,0,-8,-8]
				},
				axisLabel:{}
			}),$.extend({},chartStyle.axisOpt,{
				type:"value",
				name:'人才数量(万人)',
				nameTextStyle:{
					align:"right",
					fontSize:chartStyle.chartFontSize,
					padding:[0,-8,-8,0]
				},
				axisLabel:{
					fontSize:chartStyle.chartFontSize
				}
			})],
			grid:{
				top:25,
				bottom:26,
				left:30,
				right:30
			},
			dataset:{
				source:[]
			},
			series:[
				{
					name:'生产总值',
					type:"line",
					symbol:"circle",
					symbolSize:6,
					lineStyle:$.extend({},chartStyle.lineShadow,{
						shadowColor:chartStyle.colorMap.red,
					})
				},
				{
					name:"人才数量",
					type:"line",
					symbol:"circle",
					symbolSize:6,
					yAxisIndex:1,
					lineStyle:$.extend({},chartStyle.lineShadow,{
						shadowColor:chartStyle.colorMap.navy,
					})
				}
			]
		}
		trendChart.setOption(trendChartOpt); 
		//引入数据
		this.common.getHttp("/api/trendChart",this,{}).then(response =>{
			$("#trendChart").addClass("chart-done");
			trendChartOpt.dataset.source = response.list;
			trendChart.setOption(trendChartOpt);
		},err => {
			err = this.common.errorAjax(err)
			this.$message.error(err);
		})
	},
	//各地市企业与人才数量及占比
	talentsChart(){
		const talentsChart = this.echarts.init(document.getElementById("talentsChart"), "shine");
		const talentsChartOpt = {
			color:[chartStyle.colorMap.yellow,chartStyle.colorMap.navy],
			tooltip:{
				formatter:function(p){
					//p = p[0];
					var unit ="",marker = p.marker;
					if(p.seriesIndex == 0){
						unit = "万人";
					}else if(p.seriesIndex == 1){
						unit = "%";
					}
					if(p.color.toString() === '[object Object]'){
						let color = "background-image:linear-gradient(180deg, #1e9bf3 12%, #2fdad0 100%), linear-gradient(#eeebe9, #eeebe9)";
						marker = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;'+color+';"></span>'
					}
					return p.seriesName + "<br>" + marker+ p.name + "：" + p.value[p.seriesIndex + 1] + unit ;
				}
			},
			legend:$.extend({},chartStyle.legendOpt,{
				top:3,
				x:'center'
			}),
			xAxis:$.extend({},chartStyle.axisOpt,{
				type:"category",
				//boundaryGap:false,
				axisLabel:{
					interval: 0,
					fontSize:chartStyle.chartFontSize - 2,
					rotate:-40,
				}
			}),
			yAxis:[$.extend({},chartStyle.axisOpt,{
				splitLine:{
					show:false,
					lineStyle:{
						type:"dashed",
						color:"#afbeed"
					}
				},
				type:"value",
				name:'人才数量(万人)',
				nameTextStyle:{
					align:"left",
					fontSize:chartStyle.chartFontSize,
					padding:[0,0,-8,-8]
				}
			}),$.extend({},chartStyle.axisOpt,{
				type:"value",
				name:'占比(%)',
				nameTextStyle:{
					align:"right",
					fontSize:chartStyle.chartFontSize,
					padding:[0,-8,-8,0]
				}
			})],
			grid:{
				top:25,
				bottom:26,
				left:30,
				right:30
			},
			dataset:{
				source:[]
			},
			series:[
				{
					name:'人才数',
					type:"bar",
					barWidth:"30%",
					itemStyle:{
						color:new this.echarts.graphic.LinearGradient(
							0, 0, 0, 1,
							[
								{offset:0, color:chartStyle.colorMap.blue},
								{offset:1, color:chartStyle.colorMap.navy}
							]
						),
						barBorderRadius:[5, 5, 0, 0]
					}
				},
				{
					name:"占比",
					type:"line",
					symbol:"circle",
					symbolSize:6,
					yAxisIndex:1,
					lineStyle:$.extend({},chartStyle.lineShadow,{
						shadowColor:chartStyle.colorMap.orange,
					})
				}
			]
		}
		talentsChart.setOption(talentsChartOpt); 
		//引入数据
		this.common.getHttp("/api/talentsChart",this,{}).then(response =>{
			$("#talentsChart").addClass("chart-done");
			talentsChartOpt.dataset.source = response.list;
			talentsChart.setOption(talentsChartOpt);
		},err => {
			err = this.common.errorAjax(err)
			this.$message.error(err);
		})
	},
	businessChart(){
		const businessChart = this.echarts.init(document.getElementById("businessChart"), "shine");
		const businessChartOpt = {
			color:[chartStyle.colorMap.yellow,chartStyle.colorMap.navy],
			tooltip:{
				formatter:function(p){
					//p = p[0];
					var unit ="",marker = p.marker;
					if(p.seriesIndex == 0){
						unit = "万家";
					}else if(p.seriesIndex == 1){
						unit = "%";
					}
					if(p.color.toString() === '[object Object]'){
						let color = "background-image:linear-gradient(180deg, #1e9bf3 12%, #2fdad0 100%), linear-gradient(#eeebe9, #eeebe9)";
						marker = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;'+color+';"></span>'
					}
					return p.seriesName + "<br>" + marker+ p.name + "：" + p.value[p.seriesIndex + 1] + unit ;
				}
			},
			legend:$.extend({},chartStyle.legendOpt,{
				top:3,
				x:'center',
				
			}),
			xAxis:$.extend({},chartStyle.axisOpt,{
				type:"category",
				//boundaryGap:false,
				axisLabel:{
					interval: 0,
					fontSize:chartStyle.chartFontSize - 2,
					rotate:-40
				}
			}),
			yAxis:[$.extend({},chartStyle.axisOpt,{
				splitLine:{
					show:false,
					lineStyle:{
						type:"dashed",
						color:"#afbeed"
					}
				},
				type:"value",
				name:'企业数(万家)',
				nameTextStyle:{
					align:"left",
					fontSize:chartStyle.chartFontSize,
					padding:[0,0,-8,-8]
				}
			}),$.extend({},chartStyle.axisOpt,{
				type:"value",
				name:'占比(%)',
				nameTextStyle:{
					align:"right",
					fontSize:chartStyle.chartFontSize,
					padding:[0,-8,-8,0]
				}
			})],
			grid:{
				top:25,
				bottom:26,
				left:20,
				right:20
			},
			dataset:{
				source:[]
			},
			series:[
				{
					name:'企业数',
					type:"bar",
					barWidth:"30%",
					itemStyle:{
						color:new this.echarts.graphic.LinearGradient(
							0, 0, 0, 1,
							[
								{offset:0, color:chartStyle.colorMap.blue},
								{offset:1, color:chartStyle.colorMap.navy}
							]
						),
						barBorderRadius:[5, 5, 0, 0]
					}
				},
				{
					name:"占比",
					type:"line",
					symbol:"circle",
					symbolSize:6,
					yAxisIndex:1,
					lineStyle:$.extend({},chartStyle.lineShadow,{
						shadowColor:chartStyle.colorMap.orange,
					})
				}
			]
		}
		businessChart.setOption(businessChartOpt); 
		
		//引入数据
		this.common.getHttp("/api/businessChart",this,{}).then(response =>{
			$("#businessChart").addClass("chart-done");
			businessChartOpt.dataset.source = response.list;
			businessChart.setOption(businessChartOpt);
		},err => {
			err = this.common.errorAjax(err)
			this.$message.error(err);
		})
	},
	//各地市人才与生产总值相关性对比
	salaryRankingChart(){
		const salaryRankingChart = this.echarts.init(document.getElementById("salaryRankingChart"), "shine");
		const salaryRankingChartOpt = {
			color:[chartStyle.colorMap.red,chartStyle.colorMap.yellow,chartStyle.colorMap.navy],
			tooltip:{
				formatter:function(p){
					//p = p[0];
					var unit ="",marker = p.marker;
					if(p.seriesIndex == 0){
						unit = "%";
					}else if(p.seriesIndex == 1){
						unit = "%";
					}
					if(p.color.toString() === '[object Object]'){
						let color = "background-image:linear-gradient(180deg, #1e9bf3 12%, #2fdad0 100%), linear-gradient(#eeebe9, #eeebe9)";
						marker = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;'+color+';"></span>'
					}
					return p.seriesName + "<br>" + marker+ p.name + "：" + p.value[p.seriesIndex + 1] + unit ;
				}
			},
			legend:$.extend({},chartStyle.legendOpt,{
				top:3,
				x:'center',
				
			}),
			xAxis:$.extend({},chartStyle.axisOpt,{
				type:"category",
				//boundaryGap:false,
				axisLabel:{
					interval: 0,
					fontSize:chartStyle.chartFontSize - 2,
					rotate:-40
				}
			}),
			yAxis:[$.extend({},chartStyle.axisOpt,{
				splitLine:{
					show:false,
					lineStyle:{
						type:"dashed",
						color:"#afbeed"
					}
				},
				type:"value",
				name:'百分比(%)',
				nameTextStyle:{
					//align:"left",
					fontSize:chartStyle.chartFontSize,
					padding:[0,0,-8,8]
				}
			}),$.extend({},chartStyle.axisOpt,{
				type:"value",
				name:'相关性指数',
				nameTextStyle:{
					//align:"right",
					fontSize:chartStyle.chartFontSize,
					padding:[0,8,-8,0]
				}
			})],
			grid:{
				top:30,
				bottom:26,
				left:35,
				right:35
			},
			dataset:{
				source:[]
			},
			series:[{
					name:"人才增长率",
					type:"line",
					symbol:"circle",
					symbolSize:6,
					yAxisIndex:1,
					lineStyle:$.extend({},chartStyle.lineShadow,{
						shadowColor:chartStyle.colorMap.red,
					})
				},{
					name:"gdp增长率",
					type:"line",
					symbol:"circle",
					symbolSize:6,
					yAxisIndex:1,
					lineStyle:$.extend({},chartStyle.lineShadow,{
						shadowColor:chartStyle.colorMap.yellow,
					})
				},{
					name:'相关性指数',
					type:"bar",
					barWidth:"30%",
					itemStyle:{
						color:new this.echarts.graphic.LinearGradient(
							0, 0, 0, 1,
							[
								{offset:0, color:chartStyle.colorMap.blue},
								{offset:1, color:"#6254FF"}
							]
						),
						barBorderRadius:[5, 5, 0, 0]
					}
				}
			]
		}
		salaryRankingChart.setOption(salaryRankingChartOpt); 
		//引入数据
		this.common.getHttp("/api/salaryRankingChart",this,{}).then(response =>{
			$("#salaryRankingChart").addClass("chart-done");
			salaryRankingChartOpt.dataset.source = response.list;
			salaryRankingChart.setOption(salaryRankingChartOpt);
		},err => {
			err = this.common.errorAjax(err)
			this.$message.error(err);
		})
	},
	policyChart(){
		//各地市人才政策分布
		const policyChart = this.echarts.init(document.getElementById("policyChart"), "shine");
		const policyChartOpt = {
			color:["#01C8F3","#0080F8","#1B51FF","#2A00FF","#7800FF","#C600FF","#FF0060","#FF7800","#FFBA00","#EFFF38","#00FB8D"],
			tooltip:{},
			dataset:{
			    source:[]
			},
			series:[
				{
					name:'年薪收入',
					type:'pie',
					silent:true,
					radius:['50%', '70%'],
					center:["50%","50%"],
				//	avoidLabelOverlap:false,
					label:{
						show:true,
						position:'left',
						color:"#ffffff",
						formatter:function(p){
							return p.name +"："+p.value[1]+"个"
						},
						fontSize:chartStyle.chartFontSize
					},
					labelLine:{
						show:true,
						length:10,
						length2:30
					},
					selectedMode:'single',
					selectedOffset:5,
					emphasis:{
						itemStyle:{
						   // shadowColor:'rgba(255, 208, 116, 0.35)',
							shadowBlur:5,
							shadowOffsetX:0,
							shadowOffsetY:0
						}
					}
				}
			]
		}
		policyChart.setOption(policyChartOpt);
		//引入数据
		this.common.getHttp("/api/policyChart",this,{}).then(response =>{
			$("#policyChart").addClass("chart-done");
			policyChartOpt.dataset.source = response.list
			policyChart.setOption(policyChartOpt);
		})
		//动画
		var nowThis = this;
		var policyChartNowIndex = 0 ,policyChartOldIndex;
		var policyChartTimer = setInterval(function(){
			if(policyChartOldIndex >= 0){
				nowThis.master.pieUnSelectChart(policyChart,policyChartOldIndex,0);
			}
			nowThis.master.pieSelectChart(policyChart,policyChartNowIndex,0);
			if(policyChartNowIndex >= policyChartOpt.dataset.source.length -1){
				policyChartNowIndex = 0;
			}else{
				policyChartOldIndex = policyChartNowIndex;
				policyChartNowIndex++
			}
		},5000);
	},
	schoolInstituteChart(){
		//各地市高校与研究所分布
		const schoolInstituteChart = this.echarts.init(document.getElementById("schoolInstituteChart"), "shine");
		const schoolInstituteChartOpt = {
			color:["#6254ff","#2fccda"],
			tooltip:{
				trigger: 'axis',
				axisPointer: {            
					type: 'shadow'       
				},
				 formatter:function(p){
					var data = p[0]; 
					var data1 = p[1]; 
					return data.name + "<br>" +  data.marker + data.seriesName + "：" +  data.value[ data.seriesIndex + 1] + "所" 
					+"<br>" +  data1.marker+ data1.seriesName  + "：" +  data1.value[ data.seriesIndex + 2] + "所";
				} 
			},
			legend:$.extend({},chartStyle.legendOpt,{
				top:3,
				x:'center',
				
			}),
			xAxis:$.extend({},chartStyle.axisOpt,{
				type:"category",
				//boundaryGap:false,
				axisLabel:{
					interval: 0,
					fontSize:chartStyle.chartFontSize,
				}
			}),
			yAxis:[$.extend({},chartStyle.axisOpt,{
				type:"value",
				name:'数量(所)',
				nameTextStyle:{
					align:"left",
					fontSize:chartStyle.chartFontSize,
					padding:[0,0,-8,0]
				}
			})],
			grid:{
				top:30,
				bottom:26,
				left:35,
				right:35
			},
			dataset:{
				source:[]
			},
			series:[
				{
					name:"高校",
					type:"bar",
					barWidth:"30%",
					itemStyle:{
						barBorderRadius:[5,5,0,0]
					},
					yAxisIndex:0,
					emphasis:{
						itemStyle:{
							color:"#7f74fc"
						}
					}
				},
				{
					name:'研究所',
					type:"bar",
					barWidth:"30%",
					itemStyle:{
						barBorderRadius:[5,5,0,0]
					},
					emphasis:{
						itemStyle:{
							color:"#33dfee"
						}
					}
				}
			]
		}
		schoolInstituteChart.setOption(schoolInstituteChartOpt); 
		//引入数据
		this.common.getHttp("/api/schoolInstituteChart",this,{}).then(response =>{
			$("#schoolInstituteChart").addClass("chart-done");
			schoolInstituteChartOpt.dataset.source = response.list
			schoolInstituteChart.setOption(schoolInstituteChartOpt);
		},err => {
			err = this.common.errorAjax(err)
			this.$message.error(err);
		})
		var nowThis = this;
		//动画
		var schoolChartNowIndex = 0 ,schoolChartOldIndex;
		function schoolChartRun(){
			if(schoolChartOldIndex >= 0){
				nowThis.master.hideTipChart(schoolInstituteChart,schoolChartOldIndex,0);
			}
			nowThis.master.showTipChart(schoolInstituteChart,schoolChartNowIndex,0);
			if(schoolChartNowIndex >= schoolInstituteChartOpt.dataset.source.length -1){
				schoolChartNowIndex = 0;
			}else{
				schoolChartOldIndex = schoolChartNowIndex;
				schoolChartNowIndex++
			}
		}
		var schoolChartTimer = setInterval(function(){
			schoolChartRun()
		},5000);
		schoolInstituteChart.on("mouseover",function(p){
			//console.log(p)
			schoolChartOldIndex = schoolChartNowIndex;
			schoolChartNowIndex = p.dataIndex;
		})
		$("#schoolInstituteChart").mouseover(function(){
			clearInterval(schoolChartTimer);
		}).mouseout(function(){
			clearInterval(schoolChartTimer);
			schoolChartTimer = setInterval(function(){
				schoolChartRun()
			},5000);
		})
	},
	demandChart(){
		
		//本省人才需求变化
		const demandChart = this.echarts.init(document.getElementById('demandChart'), 'shine');
		const demandChartOpt = {
			color:["#00daff"],
			tooltip:{
				trigger:"axis",
				formatter:function(p){
					p = p[0];
					return p.seriesName + "<br>" + p.name + "：" + p.value[1] + "万人";
				}
			},
			dataZoom:[
			    {
			    	type:"slider",
			        show:true,
			        realtime:true,
					height:10,
					bottom:0,
					width:"70%",
					x:"center",
			        start:50,
			        end:100,
					xAxisIndex:0,
					textStyle:{
						color:"#f0f0f0"
					},
					dataBackground:{
						lineStyle:{
							color:"#00daff"
						},
						areaStyle:{
							color:"#00daff"
						}
					}
			    }
			],
			xAxis:$.extend({},chartStyle.axisOpt,{
				type:"category",
				boundaryGap:false,
				axisLabel:{}
		 	}),
		    yAxis:$.extend({},chartStyle.axisOpt,{
				type:"value",
				name:'需求量(万人)',
				nameTextStyle:{
					padding:[0,0,-8,-8],
					fontSize:chartStyle.chartFontSize,
					align:"left"
				},
				axisLabel:{}
		 	}),
			grid:{
				top:30,
				bottom:30,
				left:35,
				right:35
			},
		 	dataset:{
				source:[]
			},
		    series:[{
		    	name:"广东省人才需求量",
		        type:"line",
				symbol:"circle",
		        symbolSize:6,
		        areaStyle:{
		            color:new this.echarts.graphic.LinearGradient(
						0, 0, 0, 1,
						[
							{offset:0, color:"#00f3f5"},
							{offset:0.8, color:"rgba(0, 243, 245, 0)"}
						]
					)
		        }
		    }]
		}
		demandChart.setOption(demandChartOpt);
		//引入数据
		this.common.getHttp("/api/demandChart",this,{}).then(response =>{
			var id = document.getElementById("demandChart");
			id.setAttribute("calss","chart-done")
			//addClass("chart-done");
			demandChartOpt.dataset.source = response.list
			demandChart.setOption(demandChartOpt);
		},err => {
			err = this.common.errorAjax(err)
			this.$message.error(err);
		})
	}
  },
  mounted(){
	chartStyle.remFontSize();
	chartStyle.mapSize();
	
	
	//tab切换绑定
	$(".tab-btn").click(function(){
		var tabIndex = $(this).index();
		$(this).addClass("active").siblings(".tab-btn").removeClass("active");
		$(this).parents(".tab").find(".tab-item").eq(tabIndex).removeClass("hide")
		.siblings(".tab-item").addClass("hide");
	})
	//tab定时切换绑定
	let tabLen = $(".tab").length;
	for(let i = 0;i < tabLen;i++){
		this.master.tabRun($(".tab").eq(i),"timer"+i,0,8000);
		
	}
	
  	this.master.flip("flip","6508.65","万人");//翻牌器
  	this.master.flip("businessFlip","160.26","万家");//翻牌器
  	
	this.mapChart();
	this.flowChart1();
	this.flowChart2();
	this.salaryChart1();
	this.salaryChart2();
	this.trendChart();
	this.talentsChart();
	this.businessChart();
	this.salaryRankingChart();
	this.policyChart();
	this.schoolInstituteChart();
	this.demandChart();
	
  }
}
</script>

<style src="../../assets/css/master.css"></style>
<style>
</style>
