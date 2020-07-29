export default {
	//pc端页面大小
	width : document.body.clientWidth,
	height : document.body.clientHeight,
	remFontSize:function(){
		document.getElementsByTagName("html")[0].style.fontSize = Math.ceil(18*(this.width/1920))+"px";
		
	},
	//图表字体计算
	chartFontSize : 14*(document.body.clientWidth/1920),
	legenditemWidth: 12*(document.body.clientWidth/1920),
	 
	mapSize:function(){
		//地图长宽比
		const height = document.body.clientHeight;
		const mapId = document.getElementById("mapBox");
		if(mapId){
			mapId.style.height = (756/1000) * height + "px";//18*(height/1920)+"px";
		}
		//console.log(0)
		
	},
	chinaMap:function(){
		const height = document.body.clientHeight;
		const mapId2 = document.getElementById("ChinaMapBox");
		if(mapId2){
			mapId2.style.height = (576/1000) * height + "px";//18*(height/1920)+"px";
		}
	},
	
	//引入数据
	pieData:function  (data,opt){
		data.forEach(function(v,i){
			opt.series[i].data.push(v);
			var sum = 100;
			if(i > 0){
				sum = 34
			}
			opt.series[i].markLine.data[1][1].name = v.name + ":" + v.value;
			opt.series[i].data.push({"name":"辅助","value":sum-v.value,"label":{"show":false},"labelLine":{"show":false}});
		})
	},
		
	//线条阴影
	//ECharts图表配置的全局常量
	lineShadow : {
		shadowBlur: 6,
		shadowOffsetY:3
	},
	colorMap:{
		red: "#FF4C5A", //rgb(193, 46, 52)
		yellow: "#FFFF00", //rgb(230, 182, 0)
		blue: "#0091F1", //rgb(0, 152, 217)
		navy: "#00E4EC", //海蓝
		violet:"#8256E8",//紫色
		orange: "#FFD074", //rgb(230, 182, 0)
		green: "#00FB8D", //rgb(43, 130, 29)
		cyan: "#339ca8", //rgb(51, 156, 168)
		brown: "#cda819", //rgb(205, 168, 25)
		grass: "#32a487" ,//rgb(50, 164, 135)
	},
	titleOpt:{
		top: 10,
		bottom: 10,
		left: "center",
		textStyle: {
			fontSize: 14
		}
	},
	legendOpt:{
		itemWidth: 14*(document.body.clientWidth/1920),
		itemHeight: 14*(document.body.clientWidth/1920),
		itemGap: 12*(document.body.clientWidth/1920),
		textStyle: {
			 padding: [0, 0, 0, -3],
			//fontSize: 12, */
			color: "#f0f0f0",
			fontSize:14*(document.body.clientWidth/1920)
		}
	},
	tooltipOpt:{
		trigger: "axis",
		axisPointer: {
			type: "shadow"
		}
	},
	gridOpt:{
		top: 25,
		bottom: 25,
		left:30,
		right: 30
	},
	axisOpt:{
		axisLine: {
			lineStyle: {color: "#f0f0f0"}
		},
		axisTick: {
			show: false,
			length: 3,
			lineStyle: {color: "#f0f0f0"}
		},
		axisLabel: {
			interval: 0,
			//fontSize: 12,
			color: "#f0f0f0",
			fontSize:14*(document.body.clientWidth/1920)
		},
		splitLine: {show: false,lineStyle: {color: "#f0f0f0"}},
		splitArea: {show: false}
	},
	ladderBarOpt:{
		type: "bar",
		itemStyle: {
	        normal: {
	            barBorderColor: "rgba(0, 0, 0, 0)",
	            color: "rgba(0, 0, 0, 0)"
	        },
	        emphasis: {
	            barBorderColor: "rgba(0, 0, 0, 0)",
	            color: "rgba(0, 0, 0, 0)"
	        }
	    }
	}
	
}
