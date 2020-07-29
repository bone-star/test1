<template>
	<div>
		<!--<a-breadcrumb>
		   当前位置：
		   <a-breadcrumb-item>首页</a-breadcrumb-item>
	    </a-breadcrumb>-->
	  	<a-row class="clear" style="padding-top:2.22rem;" :gutter="24">
	  		<a-col span="6" class="img-box" v-for="item in formList.total">
	  			<div class="img-body">
	  				<div class="text">
			  			<small>
			  				{{item.name}}
			  			</small>
			  			<h1>
			  				{{item.num}}
			  				<small>{{item.unit}}</small>
			  			</h1>
		  			</div>
		  			<img :src="item.img"/>
	  			</div>
	  		</a-col>
	  	</a-row>
	  	<a-row :gutter="16" class="m-top">
	  		<a-col :span="10">
				<a-card title="人才库信息" style="height:33.888rem;">
					<div style="height:28rem;" id="highTalentChart"></div>
					<!--<router-link class="list" v-for="item in formList.highTalent" :to="{name:item.url}">
						<img class="icon" :src="item.img" />
						<h3>
							{{item.high_type}}
							<br>
							<small>
								单位：人
							</small>
						</h3>
						<span class="sum">
							{{item.num}}
						</span>
					</router-link>-->
					
				</a-card>
	  		</a-col>
	  		<a-col :span="14">
	  			<a-row>
					<a-card title="成果信息">
						<a-row type="flex" justify="center" class="total-box">
							<a-col :span="6" v-for="(item,i) in formList.itemResult" class="flex-center">
								<!--<img :src="" class="m-right"/>-->
								<router-link :to="{name:item.url}" :style='item.img'>
									<h1>{{item.num+item.unit}}</h1>
									<small>{{item.achievement_type}}</small>
					          	</router-link>
							</a-col>
						</a-row>
					</a-card>
				</a-row>
				<a-row :gutter="16" class="m-top">
					<a-col :span="15">
						<a-card title="人才载体信息" style="height:24.2rem;">
							<a-row class="flex-middle">
								<a-col :span="9" class="flex-center">
									<div class="talentCarry">
										<div class="box flex-middle" v-for="listItem in formList.talentCarry.text">
											
											<router-link :to="{name:listItem.url}" class="flex-middle">
												<img :src="listItem.img"/>
												<div class="text"> 
													<h1>{{listItem.num}}<small>个</small></h1>
													<p>{{listItem.support_type}}</p>
												</div>
											</router-link>
										</div>
									</div>
								</a-col>
								<a-col :span="15">
									<div id="talentCarryChart" class="chart-box"></div>
								</a-col>
								
							</a-row>
						</a-card>
					</a-col>
					<a-col :span="9">
						<a-card style="height:24.2rem;" title="项目信息">
							<!--<div style="height:23.35rem;" id="itemInfoChart"></div>-->
							<router-link class="list" v-for="item in formList.itemInfo" :to="{name:item.url}">
								<img class="icon" :src="item.img" />
								<h3>
									{{item.project_type}}
									<br>
									<small>
										单位：个
									</small>
								</h3>
								<span class="sum">
									{{item.num}}
								</span>
							</router-link>
						</a-card>
			  		</a-col>
				</a-row>
	  		</a-col>
	  		
	  		
		</a-row>
	</div>
</template>

<style scoped="scoped">
	.chart-box{
		width: 100%;
		height: 270px;
	}
</style>
<script>
//页面引入
var echarts = require('echarts');
const color=[
	["#63adfb","#4ee1cf","#fc856a","#b78cfa","#2be2ed","#ffd02f"],
    ["#63adfb","#4ee1cf","#fc856a","#b78cfa","#2be2ed","#ffd02f"],
    ["#259DFF","#FB654C","#BA87FF","#4ee1cf","#ffd02f"]
]; 
export default{
	data(){
		return{
			collapsed: true,
			colorClass:["text-blue","text-violet","text-cyan","text-orange"],
			formList:{
				"total":[
					{"name":"人才库总数","dataName":"highTalent","num":0,"unit":"人","img":require('../../assets/img/img-bg-orange.png')},
					{"name":"人才载体总数","dataName":"talentCarry","num":0,"unit":"个","img":require('../../assets/img/img-bg-violet.png')},
					{"name":"项目信息总数","dataName":"itemInfo","num":0,"unit":"个","img":require('../../assets/img/img-bg-blue.png')},
					{"name":"成果信息总数","dataName":"itemResult","num":0,"unit":"个","img":require('../../assets/img/img-bg-green.png')}
				],
				"itemResult": //项目成果
				[
					{"achievement_type":"高新技术成果","num":0,"url":"highResult","id":1,"unit":"件","img":{'backgroundImage':'url(' + require('../../assets/img/itemResult-icon1.png') + ')'}},
					{"achievement_type":"广东科技成果","num":0,"url":"resultProject","id":2,"unit":"件","img":{'backgroundImage':'url(' + require('../../assets/img/itemResult-icon2.png') + ')'}},
					{"achievement_type":"专利","num":0,"url":"patentResult","id":3,"unit":"件","img":{'backgroundImage':'url(' + require('../../assets/img/itemResult-icon3.png') + ')'}},
					{"achievement_type":"科技奖励","num":0,"url":"sciencePrix","id":4,"unit":"项","img":{'backgroundImage':'url(' + require('../../assets/img/itemResult-icon4.png') + ')'}}
				
				],
				"highTalent": //人才库信息
				[
					/*{"high_type":"党政人才","num":0,"img":require('../../assets/img/icon1.png'),"url":"politics","id":1},
					{"high_type":"企业经营管理人才","num":0,"img":require('../../assets/img/icon2.png'),"url":"business","id":2},
					{"high_type":"高技能人才","num":0,"img":require('../../assets/img/icon3.png'),"url":"highSkill","id":3},
					{"high_type":"本地人才","num":0,"img":require('../../assets/img/icon4.png'),"url":"localSkill","id":4},
					{"high_type":"专业技术人才库","num":0,"img":require('../../assets/img/icon5.png'),"url":"skill","id":5},
					{"high_type":"高层次人才库","num":0,"img":require('../../assets/img/icon6.png'),"url":"levelSkill","id":6}
				*/
					["/highLevel/politics",1],
					["/highLevel/business",2],
					["/highLevel/highSkill",3],
					["/highLevel/localSkill",4],
					["/highLevel/skill",5],
					["/highLevel/levelSkill",6],
					["",7]
				],
				"talentCarry"://人才载体
				{
					"chart":[
						["/talent/market",1],
						["/talent/keyLaboratory",3],
						["/talent/academician",4],
						["/talent/researchCenter",6],
						["/talent/newEnterprises",7],
						["/talent/register",9]
					],
					"text":[
						{"support_type":"新型研发机构","img":require('../../assets/img/talentCarry-icon1.png'),"num":0,"url":"RDInstitutions","id":5},	
						{"support_type":"产业园区","img":require('../../assets/img/talentCarry-icon2.png'),"num":0,"url":"industrialPark","id":2},	
						{"support_type":"高等院校与研究所","img":require('../../assets/img/talentCarry-icon3.png'),"num":0,"url":"heightSchool","id":8}	
					]
				},
				"itemInfo":[
					{"project_type":"国家重点专项项目","num":0,"img":require('../../assets/img/icon1.png'),"url":"keyProject","id":1},
					{"project_type":"广东科技项目","num":0,"img":require('../../assets/img/icon2.png'),"url":"STProject","id":2},
					{"project_type":"广东自然科学基金 ","num":0,"img":require('../../assets/img/icon3.png'),"url":"NFProject","id":3},
					{"project_type":"广东重点实验室","num":0,"img":require('../../assets/img/icon4.png'),"url":"keyTestProject","id":4}
				/*
					["/project/keyProject",1],
					["/project/STProject",2],
					["/project/NFProject",3],
					["/project/keyTestProject",4],
					["",5]*/
				]//项目信息
				
				}
		}
	},
	components:{
		
	},
	methods:{
		getData(){
			this.common.postHttp(this.backstage.ajaxUrl+"/firstPageTotal" ,this,"")
			.then(response => {
				//console.log(response);
				var list = this.formList; 
				//项目信息
				list.itemInfo.forEach((val,i)=>{
					var id = val.id;
					response.itemInfo.forEach((v)=>{
						if(id == v.id){
							val.num = this.backstage.format(v.num); 
						}
					})
				});
				//console.log(list.highTalent)
				//人才信息库,图表数据
				response.highTalent.forEach((v,i)=>{
					var id = v.id;
					list.highTalent.forEach((val)=>{
						if(val[val.length-1] == id){
							val.unshift(v.high_type,v.num)
						}
					})//.push([v.project_type,v.num]);
				});
				//console.log(list.itemInfo)
				this.highTalentChart(list.highTalent);
				
				//总计提取
				
				list.total.forEach((v,i)=>{
					//console.log(v)
					response[v.dataName].forEach((val)=>{
						
						if(JSON.stringify(val).indexOf("总计") > -1){
							//console.log(val)
							v.num = this.backstage.format(val.num);
							
						}
					})
				})
				
				//console.log(response.itemResult)
				//成果信息
				list.itemResult.forEach((val)=>{
					var id = val.id;
					response.itemResult.forEach((v)=>{
						if(id == v.id){
							val.achievement_type = v.achievement_type;
							val.num = this.backstage.format(v.num); 
						}
					})
				})
				//console.log(list.itemResult)
				//人才载体信息
				response.talentCarry.forEach((v,i)=>{
					var hasId;
					list.talentCarry.text.forEach((val,index)=>{
						if(val.id == v.id){
							val.num = this.backstage.format(v.num); 
							val.support_type = v.support_type;
							hasId = val.id
						}
					})
					
					if(v.id != hasId && v.support_type != "总计"){
						list.talentCarry.chart.forEach((val,index)=>{
							if(val[val.length-1] == v.id){
								val.unshift(v.support_type,v.num);
							}
						});
						//console.log(list.talentCarry.chart)
					}
				})
				this.talentCarryChart(list.talentCarry.chart)
				//chartList.talentCarryChart
				
			},err=>{
				err = this.common.errorAjax(err);
				if(err){
					this.$message.error(err);
				}
			})
		},
		talentCarryChart(data){
			//var data = this.formList.talentCarry.chart;
			//console.log(data)
			var _this = this;
			const talentCarryChart = echarts.init(document.getElementById("talentCarryChart"), "shine");
			const talentCarryChartOpt = {
				tooltip:{
			        trigger:"axis",
			        axisPointer:{
			            type:"shadow",
			            shadowStyle:{
			                color:"rgba(0,0,0,0)"
			            }
			        },
			        formatter:(v)=>{
			            return 
			        }
			    },
			    dataset: {
			        // 提供一份数据。
			        source: data
			    },
			    xAxis: [{
			        type: 'log',
			        axisLabel:{show:false},
			        axisLine:{show:false},
			        axisTick:{show:false},
			        splitLine:{show:false}
			    },{
			        type: 'log',
			        inverse:true,
			        axisLabel:{show:false},
			        axisLine:{show:false},
			        axisTick:{show:false},
			        splitLine:{show:false}
			    }], 
			    yAxis: [{
			        type: 'category',
			        axisLabel:{
			            inside:true,
			            padding: [-30, 0,0,0]
			        },
			        axisLine:{show:false},
			        axisTick:{show:false},
			        splitLine:{show:false}
			    },{
			    	name:"单位(个)",
			    	nameTextStyle:{
			            padding:[0,-45,-20,0]
			        },
			        type: 'category',
			        //inverse:true,
			        position:"right",
			        axisLabel:{
			        	show:true,
			            formatter:function(p,i){
			                return _this.backstage.format(data[i][1])
			            }
			        },
			        axisLine:{show:false},
			        axisTick:{show:false},
			        splitLine:{show:false}
			    }],
			    grid:{
			        "top":10,
			        "left":20,
			        "right":80,
			        "bottom":0
			    },
			    series: [{
			        type: 'bar',
			        barWidth:"20%",
			        showBackground: true,
			        itemStyle:{
			            barBorderRadius:50,
			            color:function(p){
			                return color[0][p.dataIndex % color[0].length]
			            }
			           
			        },
			        backgroundStyle: {
			            barBorderRadius: 50,
			            color: 'rgba(220, 220, 220, 0.8)'
			        }
			    },{
			        type: 'bar',
			        barWidth:"20%",
			        yAxisIndex:1,
			        xAxisIndex:1,
			        z:0,
			        itemStyle:{
			            color:"rgba(220, 220, 220, 0)"
			        }
			    }]
			};
			var nowThis = this;
			talentCarryChart.setOption(talentCarryChartOpt); 
			talentCarryChart.on('click', function (param) {
	            nowThis.$router.push({
		            path: param.value[2]
		            // query: { params: ddd}
		        });
	            //window.location.href = param.value[2]
	            //console.log(param.value[2]);//这里根据param填写你的跳转逻辑
	        });
		},
		highTalentChart(data){//人才信息库
			var series = [];
			var otherData = [],maxData;
			//console.log(otherData);
			data.forEach((v,i)=>{
				if(v[0].indexOf("总计") == -1){
					otherData.push(v)
				}else{
					maxData = v
				}
			})
			var backstage = this.backstage;
			//console.log(data)
			const highTalentChart = echarts.init(document.getElementById("highTalentChart"), "shine");
			const highTalentChartOpt = {
				color:color[1],
				legend: {
			        show: true,
			        selectedMode:false
			    },
			    dataset: {source: otherData},
			    xAxis: {
			        type: 'category',
			        z: 10,
			        axisLabel:{
			            interval: 0,
			            rotate:10
				        /*formatter:function(v,i){
	                		return otherData[i][1] + "个"
	            		}*/
			        },
			        axisTick:{show:false},
			        splitLine:{show:false},
			        axisLine:{show:false}
			    },
			    grid:{
			    	top:30,
			    	left:55,
			    	right:15,
			    	bottom:50
			    },
			    yAxis: {
			    	type: 'log',
			        max: maxData[1],//maxData[1],
			       	name:"单位（人）",
			       	nameTextStyle:{
			       		color:"#333333"
			       	},
			       	axisLabel:{
			        	show:true,
			        	color:"#333333"
			        },
			        axisTick:{
			        	show:true,
			        	lineStyle:{
			        		color:"#cccccc"
			        	}
			        
			        },
			        splitLine:{show:false},
			        axisLine:{
			        	show:true,
			        	lineStyle:{
			        		color:"#cccccc"
			        	}
			        }
			    },
			    series: [
			    	{
						name:"",
						//"silent":true,
				        type: 'bar',
				       // barGap:"-100%",
				        barWidth:"30%",
				        itemStyle:{
				        	barBorderRadius:[4,4,0,0],
				            color:function(p){
				                return color[1][p.dataIndex % color[1].length]
				            }
				        },
				        label:{
				            show:true,
				            position:"top",
				            formatter:function(v,i){
				            	return backstage.format(v.value[1]);
				            }
				        }
				   }
			    ]
			}
			var nowThis = this;
			highTalentChart.setOption(highTalentChartOpt); 
			highTalentChart.on('click', function (param) {
				nowThis.$router.push({
		            path: param.value[2]
		            // query: { params: ddd}
		        });
	            //window.location.href = param.value[2]
	            //console.log(param.value[2]);//这里根据param填写你的跳转逻辑
	        });
		}
	},
	mounted(){
		//this.talentCarryChart();
		//this.itemInfoChart();
		this.getData();
		//console.log( this.formList.talentCarryChart)
		//console.log(this.formList.highTalent)
	}
	
}
</script>