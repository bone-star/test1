<template>
	<div class="height-full hr">
		<wHead :headerTitle="headerTitle"></wHead>
		<div class="main"> 
			<div class="flex-between ratio-24">
				<div class="left-box">
					<div class="flip-row ratio-3">
						<div class="flip-box">
							<div class="flip-header">
								本省人才总数
							</div>
							<div class="flip-body"> 
								<div class="digit-set  flex-between" id="flip">
									<!-- <ul class="digit down">
										<li class="front">4</li>
										<li class="back"></li>
										<li class="digit-center"></li>
									</ul>-->
									<small>人</small>
								</div>
							</div>
						</div>
					</div>
					<div class="ratio-21">
						<div class="ratio-12 p-top p-bottom">
							<div class="card-box">
								<div class="card-header flex-center">
									<div class="card-header-title">
										专利趋势
									</div>
								</div>
								<div class="card-body">
									<div class="total">
										<div class="col-12 p">
											<div class="horn-box">
												<div class="horn-top"></div>
												<div class="horn-bottom"></div>
												<div class="horn-header  flex-center">
													2019年专利总量
												</div>
												<div class="horn-body  flex-center">
													880813个
												</div>
											</div>
										</div>
										<div class="col-12 p">
											<div class="horn-box">
												<div class="horn-top"></div>
												<div class="horn-bottom"></div>
												<div class="horn-header flex-center">
													2019年发明授权量
												</div>
												<div class="horn-body flex-center">
													880813个
												</div>
											</div>
										</div>
									</div>
									<div class="chart-p-top">
										<div class="chart-box" id="patentChart"></div>
									</div>
								</div>
							</div>
						</div>
						<div class="ratio-12 p-top">
							<div class="card-box">
								<div class="card-header flex-center">
									<div class="card-header-title">
										本省高端人才年龄金字塔
									</div>
								</div>
								<div class="card-body">
									<div class="chart-box" id="ageChart"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="center-box p-top p-left p-right">
					<div class="ratio-17">
						<div class="total-box">
							<div class="col-8 p">
								<div class="total-header">
									<img :src="require('@/assets/img/header-icon1.png')" />
									本省工作高端人才
								</div>
								<div class="total-body">
									<h1>83.32<span>万人</span></h1> 
								</div>
							</div>
							<div class="col-8 p">
								<div class="total-header"> 
									<img :src="require('@/assets/img/header-icon2.png')" />
									高端人才占比
								</div>
								<div class="total-body">
									<h1>1.28%</h1>
								</div>
							</div>
							<div class="col-8 p"> 
								<div class="total-header">
									<img :src="require('@/assets/img/header-icon3.png')" />
									2019年毕业生
								</div>
								<div class="total-body">
									<h1>53.92<span>万人</span></h1>
								</div>
							</div>
						</div>
						<div class="map-box" id="ChinaMapBox">
							<div class="map-header">
								<span class="header-icon"></span>
								本省高端人才流动情况
							</div>
							<div class="chart-box" id="mapChart"></div>
						</div>
						<div class="map-tips left-position p">
							<div class="map-header">
								TOP1 南京
							</div>
							<div class="map-body text-center">
								<b class="text-blue">3.2</b>万人
							</div>
						</div>
						<div class="map-tips left-position2 p">
							<div class="map-header">
								TOP2 杭州
							</div>
							<div class="map-body text-center">
								<b class="text-blue">2.9</b>万人
							</div>
						</div>
						<div class="map-tips right-position p">
							<div class="map-header">
								TOP3 海口
							</div>
							<div class="map-body text-center">
								<b class="text-blue">2.3</b>万人
							</div>
						</div>
						<div class="tips">
							<div class="tips-level">
								<div class="levle-row point">
									<span class="legend"></span>
									广东省
								</div>
								<div class="levle-row point-yellow">
									<span class="legend"></span>
									前TOP3城市
								</div>
								<div class="levle-row point-blue">
									<span class="legend"></span>
									其余城市
								</div>
							</div>
						</div>
					</div>
					<div class="ratio-7 box tab">
						<div class="big-box tab-item">
							<div class="box-header">
								<span class="header-icon"></span>
								本地高端人才培养TOP10高校
							</div>
							<div class="box-body">
								<div class="chart-box" id="highEndChart"></div>
							</div>
						</div>
						<div class="big-box tab-item hide">
							<div class="box-header">
								<span class="header-icon"></span>
								本地高端人才培养TOP10高校
							</div>
							<div class="box-body">
								<div class="chart-box" id="schoolChart"></div>
							</div>
						</div>
						<ul class="tab-btn-group">
							<li class="tab-btn active"><a href="javascript:void(0)"></a></li>
							<li class="tab-btn"><a href="javascript:void(0)"></a></li>
						</ul>
					</div> 
				</div>
				<div class="right-box">
					<div class="ratio-8 p-top p-bottom">
						<div class="card-box">
							<div class="card-header flex-center">
								<div class="card-header-title">
									本地高端人才流动情况
								</div>
							</div>
							<div class="card-body">
								<div class="chart-box" id="flowChart"></div>
							</div>
						</div>
					</div>
					<div class="ratio-8 p-top p-bottom">
						<div class="card-box">
							<div class="card-header flex-center">
								<div class="card-header-title">
									人才质量本省与全国对比
								</div>
							</div>
							<div class="card-body tab">
								<div class="flex-between">
									<div class="sum-box">
										<img :src="require('../../assets/img/img-icon1.png')" class="img-icon"/>
										<div class="sum-text">
											<p>广东人才质量</p>
											<p class="text-navy"><b>42</b>分</p>
										</div>
									</div>
									<div class="sum-box">
										<img :src="require('../../assets/img/img-icon2.png')" class="img-icon"/>
										<div class="sum-text">
											<p>全国排名</p>
											<p class="text-navy"><b>12</b>名</p>
										</div>
									</div>
									<div class="sum-box">
										<img :src="require('../../assets/img/img-icon3.png')" class="img-icon"/>
										<div class="sum-text">
											<p>等级</p>
											<p class="text-navy"><b>中下</b></p>
										</div>
									</div>
								</div>
								
								<div class="sum-chart tab-item">
									<div class="col-12">
										<div class="chart-box"  id="efficiencyChart"></div>
										<div class="chart-header">
											最低得分<br>指标
										</div>
									</div>
									<img :src="require('@/assets/img/line2.png')" />
									<div class="col-12">
										<div class="chart-box"  id="arrangementChart"></div>
										<div class="chart-header">
											最高得分<br>指标
										</div>
									</div>
								</div>
								<div class="sum-chart tab-item  hide">
									<div class="col-12">
										<div class="chart-box"  id="contributeChart"></div>
										<div class="chart-header">
											最低得分<br>指标
										</div>
									</div>
									<img :src="require('@/assets/img/line2.png')" />
									<div class="col-12">
										<div class="chart-box"  id="gradationChart"></div>
										<div class="chart-header">
											最高得分<br>指标
										</div>
									</div>
								</div>
								
								<ul class="tab-btn-group">
									<li class="tab-btn active"><a href="javascript:void(0)"></a></li>
									<li class="tab-btn"><a href="javascript:void(0)"></a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="ratio-8 p-top">
						<div class="card-box p-i">
							<div class="card-header flex-center">
								<div class="card-header-title">
									本年度行业前景TOP10
								</div>
							</div>
							<div class="card-body">
								<ul class="table" id="topTable">
			 						<li class="t-head">
										<div class="th col-th-3">序号</div>
										<div class="th col-th-5">行业</div>
										<div class="th col-th-7">17年就业人数</div>
										<div class="th col-th-8">18年就业人数</div>
										<div class="th col-th-7">人才需求预测</div>
									</li>

									<li class="t-body" id="scrollBox">
										<div v-for="count of 2"  :id="'list'+count">
											<ul class="tr" v-for="item of tableList">
												<li class="td col-th-3">&#160;</li>
												<li class="td col-th-5">{{item.name}}</li>
												<li class="td col-th-7">
													{{item.talent[0]}}万人
													<span v-if="item.talent[1] >= 0" class="text-red">
														({{item.talent[1]}}%)
													</span>
													<span v-else class="text-green">
														({{item.talent[1]}}%)
													</span>
												</li>
												<li class="td col-th-8">
													{{item.invest[0]}}万人
													<span v-if="item.invest[1] >= 0" class="text-red">
														({{item.invest[1]}}%)
													</span>
													<span v-else class="text-green">
														({{item.invest[1]}}%)
													</span>
												</li>
												<li class="td col-th-7">
													{{item.forecast[0]}}万人
													<span v-if="item.invest[1] >= 0" class="text-red">
														({{item.forecast[1]}}%)
													</span>
													<span v-else class="text-green">
														({{item.forecast[1]}}%)
													</span>
												</li>
											</ul>
										</div>
									</li>
								</ul>
							</div> 
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
import chartStyle from '@/assets/js/app.js';
import chinaMap from '@/assets/js/china.js';

import mapImg from "@/assets/img/map.png";

import pointYellow from "@/assets/img/pointYellow.png";
import pointBlue from "@/assets/img/pointBlue.png";
import point from "@/assets/img/point.png";

export default{
	name:"",
	data(){
		return{
			headerTitle:"广东人才大数据-人才看板",
			tableList:[]
		}
	},
	components:{
	  	wHead
	},
	methods:{
		table(){
			//引入数据
			this.common.getHttp("#/api/table",this,{}).then(response =>{
				this.tableList = response.list;
			},err => { 
				err = this.common.errorAjax(err)
				if(err){
				this.$message.error(err);
			}
			})
		},
		patentChart(){
			//专利趋势
			const patentChart = this.echarts.init(document.getElementById("patentChart"), "shine");
			const patentChartOpt = {
				legend:$.extend({},chartStyle.legendOpt,{
					top:5
				}),
				color:[chartStyle.colorMap.red,chartStyle.colorMap.navy,chartStyle.colorMap.yellow,chartStyle.colorMap.green,chartStyle.colorMap.violet],
				tooltip:{
					trigger: 'axis',
					 formatter:function(p){
						 var start = p[0].name + "<br>"; 
						 p.forEach(function(v,i){
							start += v.marker + v.seriesName + "：" + v.value[i + 1] +"个<br>"
						 })
						return  start
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
			    	name:"专利(个)",
					nameTextStyle:{
						align:"left",
						padding:[0,0,-8,0],
						fontSize:chartStyle.chartFontSize
					},
					axisLabel:{}
			 	}),
			 	grid:{
					top:45,
					bottom:25,
					left:35,
					right:20
				},
				series:[{
					name:"专利申请总量",
			        type:"line",
					symbol:"circle",
			        symbolSize:6,
					lineStyle:$.extend({},chartStyle.lineShadow,{
						shadowColor:chartStyle.colorMap.red
					})
				},{
					name:"发明专利",
			        type:"line",
					symbol:"circle",
			        symbolSize:6,
					lineStyle:$.extend({},chartStyle.lineShadow,{
						shadowColor:chartStyle.colorMap.navy
					})
				},{
					name:"发明授权",
			        type:"line",
					symbol:"circle",
			        symbolSize:6,
					lineStyle:$.extend({},chartStyle.lineShadow,{
						shadowColor:chartStyle.colorMap.yellow
					})
				},{
					name:"使用新型",
			        type:"line",
					symbol:"circle",
			        symbolSize:6,
					lineStyle:$.extend({},chartStyle.lineShadow,{
						shadowColor:chartStyle.colorMap.green
					})
				},{
					name:"外观专利",
			        type:"line",
					symbol:"circle",
			        symbolSize:6,
					lineStyle:$.extend({},chartStyle.lineShadow,{
						shadowColor:chartStyle.colorMap.violet
					})
				}]
			}
			patentChart.setOption(patentChartOpt); 
			//引入数据
			this.common.getHttp("#/api/patentChart",this,{}).then(response =>{
				console.log(response)
				$("#patentChart").addClass("chart-done");
				patentChartOpt.dataset.source = response.list;
				patentChart.setOption(patentChartOpt);
			},err => { 
				err = this.common.errorAjax(err)
				if(err){
				this.$message.error(err);
			}
			})
		},
		ageChart(){
			//本省高端人才年龄金字塔
			const men = "path://M790.85952 583.1552c0-76.19968-24.19072-148.67712-68.93184-208.67456l108.66176-108.66176 0 84.74496c0 14.14016 5.72928 26.9376 14.99648 36.20352 9.26336 9.26464 22.06592 14.99648 36.20352 14.99648 28.27648 0 51.2-22.92224 51.2-51.2l0-204.2112c0.11008-1.36832 0.18176-2.7456 0.18176-4.1408 0-14.18752-5.7728-27.02592-15.09504-36.29952-9.27232-9.31456-22.1056-15.08096-36.28672-15.08224-1.3952 0-2.77504 0.07168-4.14208 0.18176l-204.2112 0c-28.27648 0-51.2 22.92352-51.2 51.2 0 14.13888 5.73184 26.93888 14.99648 36.2048 9.26592 9.26464 22.06464 14.9952 36.20352 14.9952l84.74624 0-108.66176 108.66304c-59.99744-44.73856-132.47744-68.93056-208.67712-68.92928-93.49376 0-181.3888 36.40576-247.49824 102.51648C127.23712 401.7664 90.8288 489.664 90.8288 583.15776c0.00128 93.49248 36.40832 181.38752 102.51776 247.49696 66.10816 66.10688 154.00448 102.5152 247.49696 102.5152 93.4912 0 181.39008-36.40704 247.49696-102.5152C754.45248 764.54528 790.85824 676.64768 790.85952 583.1552zM440.84352 830.77248c-66.14016-0.00256-128.32128-25.75744-175.08992-72.52736-46.76736-46.76736-72.52352-108.9472-72.5248-175.08736 0-66.14272 25.75616-128.32256 72.52352-175.0912 46.76864-46.76736 108.94848-72.52352 175.0912-72.5248 66.14016 0 128.32384 25.75744 175.08992 72.5248 46.76864 46.76864 72.5248 108.94848 72.5248 175.08864 0 66.14272-25.75744 128.32256-72.5248 175.09248C569.16608 805.01504 506.98368 830.77248 440.84352 830.77248z";
			const woman = "path://M598.058159 188.898171c-138.75727 0-251.727791 112.765864-251.727791 251.523134 0 138.552613 112.868192 251.420805 251.727791 251.420805 138.859598 0 251.830119-112.765864 251.830119-251.420805C849.990607 301.664035 736.917758 188.898171 598.058159 188.898171L598.058159 188.898171zM598.058159 799.082242c-88.51404 0-169.455781-32.233437-232.183072-85.444189L314.199261 765.31388l84.830219 84.830219-75.927651 75.825322-84.830219-84.830219-98.439892 98.235235-75.927651-75.825322 98.337564-98.235235-89.844309-89.741981 75.927651-75.825322 89.844309 89.741981 57.099231-56.996902c-35.507944-55.666633-56.382932-121.463775-56.382932-192.070351 0-197.800739 161.064855-358.660937 359.172579-358.660937 198.107725 0 359.274908 160.860198 359.274908 358.660937C957.333067 638.119716 796.165884 799.082242 598.058159 799.082242L598.058159 799.082242z";
			const ageChart = this.echarts.init(document.getElementById("ageChart"), "shine");
			const ageChartOpt = {
			//color:[colorMap.red,colorMap.navy],
				legend:$.extend({},chartStyle.legendOpt,{
					itemGap:20,
					top:-5,
					icon :"rect"
				}),
				dataset:[{
			        source:[]
			    },{
			        source:[]
			    },{
			        source:[]
			    }],
			    xAxis:[$.extend({},chartStyle.axisOpt,{
					type:"value",
					name:"单位:%",
					nameLocation:"start",
					nameTextStyle:{
						color:"#f0f0f0",
						align:"center",
						fontSize:chartStyle.chartFontSize,
						padding:[0,0,-25,30]
					},
					inverse:true,//柱状图反向
					axisTick:{show:false},
					axisLine:{show:false},
					axisLabel:{
						color:"#f0f0f0"
					}
			 	}),$.extend({},chartStyle.axisOpt,{
					type:"value",
					//inverse:true,//柱状图反向
					axisTick:{show:false},
					axisLine:{show:false},
					axisLabel:{
						color:"#f0f0f0"
					},
					gridIndex:1
			 	}),$.extend({},chartStyle.axisOpt,{
					type:"value",
					//inverse:true,//柱状图反向
					axisTick:{show:false},
					axisLine:{show:false},
					axisLabel:{
						show:false,
						color:"#f0f0f0"
					},
					gridIndex:2
			 	}),$.extend({},chartStyle.axisOpt,{
					type:"value",
					//inverse:true,//柱状图反向
					axisTick:{show:false},
					axisLine:{show:false},
					axisLabel:{show:false},
					gridIndex:3
			 	})],
			    yAxis:[$.extend({},chartStyle.axisOpt,{
					type:"category",
					inverse:true,
					axisTick:{show:false},
					axisLine:{show:false},
					axisLabel:{show:false}
			 	}),$.extend({},chartStyle.axisOpt,{
					type:"category",
					inverse:true,
					axisTick:{show:false},
					axisLine:{show:false},
					axisLabel:{
						interval: 0,
						color: "#f0f0f0",
						fontSize:chartStyle.chartFontSize,
						align:"center",
						margin:$(window).width()*(35/1920),
					
					},
					gridIndex:1
			 	}),$.extend({},chartStyle.axisOpt,{
					type:"category",
					inverse:true,
					axisTick:{show:false},
					axisLine:{show:false},
					axisLabel:{
						interval: 0,
						color: "#f0f0f0",
						fontSize:chartStyle.chartFontSize,
						align:"left",
						//margin:0,
						verticalAlign:"top",
						padding:[-25,0,0,0],
						inside:true,
						formatter:function(p,i){
							var data = "  {menMarker|} 男:"+ageChartOpt.dataset[1].source[i][1]+"%  {womanMarker|} 女:"+ageChartOpt.dataset[1].source[i][2]+"%" ;
							return "比例：(" + p +")" + data
						},
						rich:{
							menMarker:{
								height:8,
								width:8,
								backgroundColor:"#00c8c9",
								borderRadius:50
							},
							womanMarker:{
								height:8,
								width:8,
								backgroundColor:"#ff6565",
								borderRadius:50
							}
						}
					},
					gridIndex:2
			 	}),$.extend({},chartStyle.axisOpt,{
					type:"category",
					inverse:true,
					axisTick:{show:false},
					axisLine:{show:false},
					axisLabel:{show:false},
					gridIndex:3
			 	})],
			 	grid:[{
					top:10,
					bottom:"60%",
					left:10,
					right:"58%"
				},{
					top:10,
					bottom:"60%",
					left:"58%",
					right:10
				},{
					top:"55%",
					bottom:0,
					left:10,
					right:10
				},{
					top:"55%",
					bottom:0,
					left:5,
					right:5
				}],
				series:[{
					name:"男",
			        type:"pictorialBar",
					symbol:men,
					symbolSize: 10,
					symbolRepeat: true,
					yAxisIndex:0,
					xAxisIndex:0,
					datasetIndex:0,
					itemStyle:{
						color:new this.echarts.graphic.LinearGradient(
							1, 0, 0, 0,
							[
								{offset:0, color:"#0072c9"},
								{offset:0.5, color:"#21bad1"},
								{offset:1, color:"#3fffd9"}
							]
						)
					}
				},{
					name:"女",
			        type:"pictorialBar",
					symbol:woman,
					symbolSize: 10,
					symbolRepeat: true,
					yAxisIndex:1,
					xAxisIndex:1,
					datasetIndex:0,
					itemStyle:{
						color:new this.echarts.graphic.LinearGradient(
							1, 0, 0, 0,
							[
								{offset:0, color:"#da2d16"},
								{offset:1, color:"#fde72e"}
							]
						)
					}
				},{
					type:"bar",
					barWidth:"10%",
					stack:"占比",
					yAxisIndex:2,
					xAxisIndex:2,
					datasetIndex:1,
					color:chartStyle.colorMap.cyan,
					z:5
				},{
					type:"bar",
					barWidth:"10%",
					stack:"占比",
					yAxisIndex:2,
					xAxisIndex:2,
					datasetIndex:1,
					color:chartStyle.colorMap.red,
					z:5
				},{
					name:"",
					type:"bar",
					barGap:"-200%",
					barWidth:"30%",
					yAxisIndex:3,
					xAxisIndex:3,
					datasetIndex:2,
					itemStyle:{
						color:"#2e354a",
						borderWidth:2,
						borderColor:"#2e354a",
						barBorderRadius:10
					}
				}]
			}
			ageChart.setOption(ageChartOpt); 
			//引入数据
			this.common.getHttp("#/api/ageChart",this,{}).then(response =>{
			//	console.log(response)
				$("#ageChart").addClass("chart-done");
				response.list.forEach(function(v,i){
					ageChartOpt.dataset[i].source = v;
				})
				//console.log(ageChartOpt)
				ageChart.setOption(ageChartOpt);
			},err => { 
				err = this.common.errorAjax(err)
				if(err){
				this.$message.error(err);
			}
			})
		},
		
		//本地高端人才培养TOP10高校 
		//高端人才
		highEndChart(){
			const id = document.getElementById("highEndChart");
			id.style.width = id.parentNode.style.width;
			const highEndChart = this.echarts.init(id, "shine");
			const highEndChartOpt = {
				color:["#6254ff",chartStyle.colorMap.yellow],
				tooltip:{
					trigger: 'axis',
					axisPointer: {            
						type: 'shadow'       
					},
					formatter:function(p){ 
						//p = p[0];
						return p[0].name + "<br>" + p[0].marker+ p[0].seriesName + "：" + p[0].value[1] + "人" 
						 +"<br>" + p[1].marker+ p[1].seriesName + "：" + p[1].value[2] + "%";
					} 
				},
				legend:$.extend({},chartStyle.legendOpt,{
					top:3,
					x:"center"
				}),
				xAxis:$.extend({},chartStyle.axisOpt,{
					type:"category",
					//boundaryGap:false,
					axisLabel:{
						interval: 0,
						fontSize:chartStyle.chartFontSize - 2,
						rotate:15,
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
					name:"高端人才（人）",
					nameTextStyle:{
						align:"left",
						fontSize:chartStyle.chartFontSize,
						padding:[0,0,-8,-8]
					},
					axisLabel:{
						formatter:"{value}人",
						fontSize:chartStyle.chartFontSize
					}
				}),$.extend({},chartStyle.axisOpt,{
					type:"value",
					name:"人才转化率（%）",
					nameTextStyle:{
						align:"right",
						fontSize:chartStyle.chartFontSize,
						padding:[0,-8,-8,0]
					},
					axisLabel:{
						formatter:"{value}%",
						fontSize:chartStyle.chartFontSize
					}
				})],
				grid:{
					top:25,
					bottom:45,
					left:60,
					right:50
				},
				dataset:{
					source:[]
				},
				series:[
					{
						name:"高端人才",
						type:"bar",
						barWidth:"40%",
						itemStyle:{
							barBorderRadius:[5, 5, 0, 0]
						}
					},
					{
						name:"人才转化率",
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
			highEndChart.setOption(highEndChartOpt); 
			//引入数据
			this.common.getHttp("#/api/highEndChart",this,{}).then(response =>{
			//	console.log(response)
				$("#highEndChart").addClass("chart-done");
				highEndChartOpt.dataset.source = response.list;
				highEndChart.setOption(highEndChartOpt);
			},err => { 
				err = this.common.errorAjax(err)
				if(err){
				this.$message.error(err);
			}
			})
			
		},
		schoolChart(){
			const schoolChart = this.echarts.init(document.getElementById("schoolChart"), "shine");
			const schoolChartOpt = {
				color:["#2fccda",chartStyle.colorMap.yellow],
				tooltip:{
					trigger: 'axis',
					axisPointer: {            
						type: 'shadow'       
					},
					formatter:function(p){ 
						//p = p[0];
						return p[0].name + "<br>" + p[0].marker+ p[0].seriesName + "：" + p[0].value[1] + "人" 
						 +"<br>" + p[1].marker+ p[1].seriesName + "：" + p[1].value[2] + "%";
					} 
				},
				legend:$.extend({},chartStyle.legendOpt,{
					top:3,
					x:"center"
				}),
				xAxis:$.extend({},chartStyle.axisOpt,{
					type:"category",
					//boundaryGap:false,
					axisLabel:{
						interval: 0,
						fontSize:chartStyle.chartFontSize - 2,
						rotate:15,
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
					name:"毕业生总数（人）",
					nameTextStyle:{
						align:"left",
						fontSize:chartStyle.chartFontSize,
						padding:[0,0,-8,-8]
					},
					axisLabel:{
						formatter:"{value}人",
						fontSize:chartStyle.chartFontSize
					}
				}),$.extend({},chartStyle.axisOpt,{
					type:"value",
					name:"人才转化率（%）",
					nameTextStyle:{
						align:"right",
						fontSize:chartStyle.chartFontSize,
						padding:[0,-8,-8,0]
					},
					axisLabel:{
						formatter:"{value}%",
						fontSize:chartStyle.chartFontSize
					}
				})],
				grid:{
					top:25,
					bottom:45,
					left:60,
					right:50
				},
				dataset:{
					source:[]
				},
				series:[
					{
						name:"毕业生总数",
						type:"bar",
						barWidth:"40%",
						itemStyle:{
							barBorderRadius:[5, 5, 0, 0]
						}
					},
					{
						name:"人才转化率",
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
			schoolChart.setOption(schoolChartOpt); 
			//引入数据
			this.common.getHttp("#/api/schoolChart",this,{}).then(response =>{
			//	console.log(response)
				$("#schoolChart").addClass("chart-done");
				schoolChartOpt.dataset.source = response.list;
				schoolChart.setOption(schoolChartOpt);
			},err => { 
				err = this.common.errorAjax(err)
				if(err){
				this.$message.error(err);
			}
			})
		},
		//本地高端人才流动情况
		flowChart(){
			const flowChart = this.echarts.init(document.getElementById("flowChart"), "shine");
			const flowChartOpt = {
				color:[chartStyle.colorMap.red,chartStyle.colorMap.navy],
				tooltip:{
					trigger: 'axis',
					formatter:function(p){
						 var start = p[0].name + "<br>"; 
						 p.forEach(function(v,i){
							start += v.marker + v.seriesName + "：" + v.value[i + 1] +"人<br>"
						 })
						return  start
					} 
				},
				legend:$.extend({},chartStyle.legendOpt,{
					top:3,
					x:"center"
				}),
				xAxis:$.extend({},chartStyle.axisOpt,{
					type:"category",
					boundaryGap:false,
					axisLabel:{}
				}),
				yAxis:$.extend({},chartStyle.axisOpt,{
					splitLine:{
						show:false,
						lineStyle:{
							type:"dashed",
							color:"#afbeed"
						}
					},
					type:"value",
					name:"单位：人",
					nameTextStyle:{
						align:"left",
						fontSize:chartStyle.chartFontSize,
						padding:[0,0,-8,-8]
					},
					axisLabel:{
						formatter:"{value}人",
						fontSize:chartStyle.chartFontSize
					}
				}),
				grid:{
					top:25,
					bottom:26,
					left:45,
					right:30
				},
				dataset:{
					source:[]
				},
				series:[
					{
						name:"流入",
						type:"line",
						symbol:"circle",
						symbolSize:6,
						lineStyle:$.extend({},chartStyle.lineShadow,{
							shadowColor:chartStyle.colorMap.red,
						})
					},
					{
						name:"流出",
						type:"line",
						symbol:"circle",
						symbolSize:6,
						lineStyle:$.extend({},chartStyle.lineShadow,{
							shadowColor:chartStyle.colorMap.navy,
						})
					}
				]
			}
			flowChart.setOption(flowChartOpt); 
			//引入数据
			this.common.getHttp("#/api/flowChart",this,{}).then(response =>{
			//	console.log(response)
				$("#flowChart").addClass("chart-done");
				flowChartOpt.dataset.source = response.list;
				flowChart.setOption(flowChartOpt);
			},err => { 
				err = this.common.errorAjax(err)
				if(err){
				this.$message.error(err);
			}
			})
		},
			//人才贡献
		contributeChart(){
			const contributeChart = this.echarts.init(document.getElementById("contributeChart"), "shine");
			const contributeChartOpt = {
				title:{
					text:"人才\n贡献",
					left:"24%",
					y:"center",
					textStyle:{
						color:"#ff7640",
						fontSize:chartStyle.chartFontSize + 3
					}
				},
				series: [
					{
						name:"得分",
						type:"pie",
						hoverAnimation:false,
						center:["35%","50%"],
						radius: ["90%", "100%"],
						avoidLabelOverlap: false,
						label: {show: false},
						markLine:{
							lable:{
								show:true,
							},
							lineStyle:{
								type: 'solid',
								color:"#fcff00"
							},
							symbol:'none',
							data:[
								[
									{
										x: "48%",
										y: 10,
										
									},
									{
										x: "58%",
										y: 10
									}
								],[
									{
										x: "58%",
										y: 10
									},
									{
										name:"得分:14",
										x:"68%",
										y: 15
									}
								]
							]
						},
						itemStyle:{
							color:function(p){
								if(p.dataIndex == 1){
									return "#395667"
								}else{
									return "#fcff00"
								}
							}
						},
						emphasis: {
							label: {show: false}
						},
						data:[]
					},{
						name:"排名",
						type:"pie",
						hoverAnimation:false,
						center:["35%","50%"],
						radius: ["65%","75%"],
						avoidLabelOverlap: false,
						label:{show:false},
						markLine:{
							lable:{
								show:true,
							},
							lineStyle:{
								type: 'solid',
								color:"#6bf1f8"
							},
							symbol:'none',
							data:[
								[
									{
										x: "50%",
										y: 30,
										
									},
									{
										x: "58%",
										y: 30
									}
								],[
									{
										x: "58%",
										y: 30
									},
									{
										name:"排名:14",
										x:"68%",
										y: 35
									}
								]
							]
						},
						itemStyle:{
							color:function(p){
								if(p.dataIndex == 1){
									return "#395667"
								}else{
									return "#6bf1f8"
								}
							}
						},
						emphasis: {
							label: {show: false}
						},
						data:[]
					}
				]
			}
			contributeChart.setOption(contributeChartOpt); 
			//引入数据
			this.common.getHttp("#/api/contributeChart",this,{}).then(response =>{
			//	console.log(response)
				$("#contributeChart").addClass("chart-done");
				chartStyle.pieData(response.list,contributeChartOpt);
				contributeChart.setOption(contributeChartOpt);
			},err => { 
				err = this.common.errorAjax(err)
				if(err){
				this.$message.error(err);
			}
			})
		},
		//人才层次 gradationChart
		gradationChart(){
			const gradationChart = this.echarts.init(document.getElementById("gradationChart"), "shine");
			const gradationChartOpt = {
				title:{
					text:"人才\n层次",
					left:"24%",
					y:"center",
					textStyle:{
						color:"#6bf1f8",
						fontSize:chartStyle.chartFontSize + 3
					}
				},
				series: [
					{
						name:"得分",
						type:"pie",
						hoverAnimation:false,
						center:["35%","50%"],
						radius: ["90%","100%"],
						avoidLabelOverlap: false,
						label: {show: false},
						markLine:{
							lable:{
								show:true,
							},
							lineStyle:{
								type: 'solid',
								color:"#fcff00"
							},
							symbol:'none',
							data:[
								[
									{
										x: "48%",
										y: 10,
										
									},
									{
										x: "58%",
										y: 10
									}
								],[
									{
										x: "58%",
										y: 10
									},
									{
										name:"得分:14",
										x:"68%",
										y: 15
									}
								]
							]
						},
						itemStyle:{
							color:function(p){
								if(p.dataIndex == 1){
									return "#395667"
								}else{
									return "#fcff00"
								}
							}
						},
						emphasis: {
							label: {show: false}
						},
						data:[]
					},{
						name:"排名",
						type:"pie",
						hoverAnimation:false,
						center:["35%","50%"],
						radius: ["65%","75%"],
						avoidLabelOverlap: false,
						label: {show: false},
						markLine:{
							lable:{
								show:true,
							},
							lineStyle:{
								type: 'solid',
								color:"#6bf1f8"
							},
							symbol:'none',
							data:[
								[
									{
										x: "50%",
										y: 30,
										
									},
									{
										x: "58%",
										y: 30
									}
								],[
									{
										x: "58%",
										y: 30
									},
									{
										name:"排名:14",
										x:"68%",
										y: 35
									}
								]
							]
						},
						itemStyle:{
							color:function(p){
								if(p.dataIndex == 1){
									return "#395667"
								}else{
									return "#6bf1f8"
								}
							}
						},
						emphasis: {
							label: {show: false}
						},
						data:[]
					}
				]
			}
			gradationChart.setOption(gradationChartOpt); 
			//引入数据
			this.common.getHttp("#/api/gradationChart",this,{}).then(response =>{
			//	console.log(response)
				$("#gradationChart").addClass("chart-done");
				chartStyle.pieData(response.list,gradationChartOpt);
				gradationChart.setOption(gradationChartOpt);
			},err => { 
				err = this.common.errorAjax(err)
				if(err){
				this.$message.error(err);
			}
			})
		},
		efficiencyChart(){
			//人才效能 efficiencyChart
			const efficiencyChart = this.echarts.init(document.getElementById("efficiencyChart"), "shine");
			const efficiencyChartOpt = {
				title:{
					text:"人才\n效能",
					left:"24%",
					y:"center",
					textStyle:{
						color:"#53FFC3",
						fontSize:chartStyle.chartFontSize + 3
					}
				},
				series: [
					{
						name:"得分",
						type:"pie",
						hoverAnimation:false,
						center:["35%","50%"],
						radius: ["90%","100%"],
						avoidLabelOverlap: false,
						label: {show: false},
						markLine:{
							lable:{
								show:true,
							},
							lineStyle:{
								type: 'solid',
								color:"#fcff00"
							},
							symbol:'none',
							data:[
								[
									{
										x: "48%",
										y: 10,
										
									},
									{
										x: "58%",
										y: 10
									}
								],[
									{
										x: "58%",
										y: 10
									},
									{
										name:"得分:14",
										x:"68%",
										y: 15
									}
								]
							]
						},
						itemStyle:{
							color:function(p){
								if(p.dataIndex == 1){
									return "#395667"
								}else{
									return "#fcff00"
								}
							}
						},
						emphasis: {
							label: {show: false}
						},
						data:[]
					},{
						name:"排名",
						type:"pie",
						hoverAnimation:false,
						center:["35%","50%"],
						radius: ["65%","75%"],
						avoidLabelOverlap: false,
						label: {show: false},
						markLine:{
							lable:{
								show:true,
							},
							lineStyle:{
								type: 'solid',
								color:"#6bf1f8"
							},
							symbol:'none',
							data:[
								[
									{
										x: "50%",
										y: 30,
										
									},
									{
										x: "58%",
										y: 30
									}
								],[
									{
										x: "58%",
										y: 30
									},
									{
										name:"排名:14",
										x:"68%",
										y: 35
									}
								]
							]
						},
						itemStyle:{
							color:function(p){
								if(p.dataIndex == 1){
									return "#395667"
								}else{
									return "#6bf1f8"
								}
							}
						},
						emphasis: {
							label: {show: false}
						},
						data:[]
					}
				]
			}
			
			efficiencyChart.setOption(efficiencyChartOpt); 
			//引入数据
			this.common.getHttp("#/api/efficiencyChart",this,{}).then(response =>{
			//	console.log(response)
				$("#efficiencyChart").addClass("chart-done");
				chartStyle.pieData(response.list,efficiencyChartOpt);
				efficiencyChart.setOption(efficiencyChartOpt);
			},err => { 
				err = this.common.errorAjax(err)
				if(err){
				this.$message.error(err);
			}
			})
		},
		//人才层次 arrangementChart
		arrangementChart(){
			
			const arrangementChart = this.echarts.init(document.getElementById("arrangementChart"), "shine");
			const arrangementChartOpt = {
				title:{
					text:"人才\n层次",
					left:"24%",
					y:"center",
					textStyle:{
						color:"#D964FF",
						fontSize:chartStyle.chartFontSize + 3
					}
				},
				series: [
					{
						name:"得分",
						type:"pie",
						hoverAnimation:false,
						center:["35%","50%"],
						radius: ["90%","100%"],
						avoidLabelOverlap: false,
						label: {show: false},
						markLine:{
							lable:{
								show:true,
							},
							lineStyle:{
								type: 'solid',
								color:"#fcff00"
							},
							symbol:'none',
							data:[
								[
									{
										x: "48%",
										y: 10,
										
									},
									{
										x: "58%",
										y: 10
									}
								],[
									{
										x: "58%",
										y: 10
									},
									{
										name:"得分:14",
										x:"68%",
										y: 15
									}
								]
							]
						},
						itemStyle:{
							color:function(p){
								if(p.dataIndex == 1){
									return "#395667"
								}else{
									return "#fcff00"
								}
							}
						},
						emphasis: {
							label: {show: false}
						},
						data:[]
					},{
						name:"排名",
						type:"pie",
						hoverAnimation:false,
						center:["35%","50%"],
						radius: ["65%","75%"],
						avoidLabelOverlap: false,
						label: {show: false},
						markLine:{
							lable:{
								show:true,
							},
							lineStyle:{
								type: 'solid',
								color:"#6bf1f8"
							},
							symbol:'none',
							data:[
								[
									{
										x: "50%",
										y: 30,
										
									},
									{
										x: "58%",
										y: 30
									}
								],[
									{
										x: "58%",
										y: 30
									},
									{
										name:"排名:14",
										x:"68%",
										y: 35
									}
								]
							]
						},
						itemStyle:{
							color:function(p){
								if(p.dataIndex == 1){
									return "#395667"
								}else{
									return "#6bf1f8"
								}
							}
						},
						emphasis: {
							label: {show: false}
						},
						data:[]
					}
				]
			}
			arrangementChart.setOption(arrangementChartOpt); 
			//引入数据
			this.common.getHttp("#/api/arrangementChart",this,{}).then(response =>{
			//	console.log(response)
				$("#arrangementChart").addClass("chart-done");
				chartStyle.pieData(response.list,arrangementChartOpt);
				arrangementChart.setOption(arrangementChartOpt);
			},err => { 
				err = this.common.errorAjax(err)
				if(err){
				this.$message.error(err);
			}
			})
		},
		mapChart(){
			//mapChart
			//引入地图
			this.echarts.registerMap('chinaFull',chinaMap.chinaFull);
			this.echarts.registerMap('chinas',chinaMap.china);
			//引入图片
			var bg = mapImg;
			var mapBg = new Image();
			mapBg.src = bg;
			const mapChart = this.echarts.init(document.getElementById("mapChart"), "shine");
			const mapChartOpt = {
				//tooltip:{},
			//	backgroundColor: mapBg,
				title:{},
				geo:[{
					type:'map',
					map:'chinas', // 自定义扩展图表类型
					
					roam:false,
					zoom:1.5,
					top:$(window).height()*(128 / 1000),
				    silent:true,
					aspectScale:0.75,
					itemStyle:{
					    areaColor:"transparent",
						shadowColor:'#000000',
						shadowBlur:20,
						shadowOffsetX:5
					},
					emphasis:{
						label:{show:false}
					},
					z:0
				},{
					type:'map',
					map:'chinas', // 自定义扩展图表类型
					roam:false,
					zoom:1.5,
					top:$(window).height()*(128 / 1000),
				    silent:true,
					aspectScale:0.75,
					itemStyle:{
					    areaColor:{
							image:mapBg, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
							repeat:'repeat'
						},
						borderWidth:0,
						shadowColor:'#0871be',
						shadowBlur:1,
						shadowOffsetX:5
					},
					emphasis:{
						label:{show:false,color:"#f0f0f0"}
					},
					z:1
				},{
					type:'map',
					map:'chinaFull', // 自定义扩展图表类型
					roam:false,
					zoom:1.5,
					top:$(window).height()*(128 / 1000),
				    silent:true,
					aspectScale:0.75,
					itemStyle:{
					    areaColor:"transparent",//1b1464
						borderColor:"rgba(23,141,151,0.5)",
						borderWidth:1
					},
					emphasis:{
						label:{show:false,color:"#f0f0f0"}
					},
					z:2
				},{
					type:'map',
					map:'chinas', // 自定义扩展图表类型
					roam:false,
					zoom:1.5,
					top:$(window).height()*(128 / 1000),
				    silent:true,
					aspectScale:0.75,
					itemStyle:{
					    areaColor:"transparent",//1b1464
						borderColor:"#08c8ed",
						borderWidth:1.5,
						shadowColor:'#08c8ed',
						shadowBlur:3,
					},
					emphasis:{
						label:{show:false}
					},
					z:5
				}],
				series:[{
					type: 'lines',
					zlevel: 2,
					effect: {
						show: true,
						period: 4, //箭头指向速度，值越小速度越快
						trailLength: 0.1, //特效尾迹长度[0,1]值越大，尾迹越长重
						symbol: 'pin', //箭头图标
						symbolSize: 8, //图标大小
						color:"#ffffff"
					}, 
					geoIndex:2,
					lineStyle: {
						color:function(p){
							if(p.dataIndex < 3 ){
								return "rgba(252,255,0,0.2)";
							}else{
								return "rgba(0,231,254,0.2)";
							}
						},//"transparent",
						width: 1, //尾迹线条宽度
						opacity: 1, //尾迹线条透明度
						curveness: .2, //尾迹线条曲直度
						shadowColor:chartStyle.colorMap.yellow,
						shadowBlur:3
					},
					data:[],
					z:8
				},
				{
					type: 'scatter',
					coordinateSystem: 'geo',
					// symbol: 'diamond',
					showEffectOn: 'render',
					rippleEffect: {
						period: 15,
						scale: 6,
						brushType: 'fill'
					},
					geoIndex:2,
					label:{
						show:true,
						fontSize:chartStyle.chartFontSize,
						formatter:function(p){
							var style = "border1";
							if(p.name == "广东"){
								style = "border0";
							}else if(p.name != "广东" && p.dataIndex > 3){
								style = "border2";
							}
							return "{p|\n}{"+style+"|"+p.name+"}";
						},
						rich:{
							p:{
								height:40
							},
							border0:{
								borderWidth:1,
								borderColor:chartStyle.colorMap.orange,
								padding:3,
								color:chartStyle.colorMap.orange
							},
							border1:{
								borderWidth:1,
								borderColor:chartStyle.colorMap.yellow,
								padding:3,
								color:chartStyle.colorMap.yellow
							},
							border2:{
								borderWidth:1,
								borderColor:"#5ee7ff",
								padding:3,
								color:"#5ee7ff"
							}
						}
					},
					hoverAnimation: true,
					symbolSize:30,
					itemStyle: {
						shadowBlur: 10,
						shadowColor: '#333'
					},
					data:[],
					z:10
				}
				]
			}
			mapChart.setOption(mapChartOpt);
			//引入数据
			this.common.getHttp("#/api/mapJson",this,{}).then(response =>{
			//	console.log(response)
				$("#mapChart").addClass("chart-done");
				var coordsArry = [];
				var scatterArry = [];
				response.list.forEach(function(val,index){
					var valName = val.name;
					var mapHot = "image://" + point;
					var size = 35,shadow = chartStyle.colorMap.yellow;
					if(index == 0){
						scatterArry.push({"name":"广东","value":[113.270701,23.135024,0],"symbol":mapHot,"symbolSize":size});
					}
					if (valName.indexOf("广东") == -1 && index <= 2){
						size = 30;
						mapHot = "image://" + pointYellow;
					}else if(index > 2){
						size = 30;
						shadow = chartStyle.colorMap.blue;
						mapHot = "image://" + pointBlue;
					}
					chinaMap.chinaFull.features.forEach(function(v,i){
						var name = v.properties.name,
						center = v.properties.center,
						value = val.value;
						if(name == valName){
							if(value <= 0 || !value){
								value = 0;
							}
							scatterArry.push({"name":valName,"value":[center[0],center[1],value],"symbol":mapHot,"symbolSize":size});
							coordsArry.push({"coords":[[center[0],center[1]],[113.270701,23.135024]],"lineStyle":{"shadowColor":shadow}});
						}
					})
				})
				//console.log(scatterArry);
				mapChartOpt.series[0].data = coordsArry;
				//console.log(mapChartOpt.series[0].data)
				mapChartOpt.series[1].data = scatterArry;
				mapChart.setOption(mapChartOpt);
			},err => { 
				err = this.common.errorAjax(err)
				if(err){
				this.$message.error(err);
			}
			})
		}
	},
	
	mounted(){
		
		chartStyle.remFontSize();
		chartStyle.mapSize();
		this.master.flip("flip","6508.65","万人");//翻牌器
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
		this.patentChart();
		this.ageChart();
		this.highEndChart();
		this.schoolChart();
		this.flowChart();
		this.contributeChart();
		this.gradationChart();
		this.efficiencyChart();
		this.arrangementChart();
		this.mapChart();
		this.table();
		this.master.scroll("scrollBox","list1");
	}
}
</script>

<style src="@/assets/css/hr.css" scoped></style>

<style scoped="scoped">

</style>