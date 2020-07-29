export default{
    flip:function(id,number,unit){ //翻牌器
    	//公有制
		var flipId = document.getElementById(id);
		var number = number;
		var unit = unit ? unit : "";
		//私有属性
		var pointIndex = number.indexOf(".");//小数点所在的位置
		var comma = false;
		if(pointIndex > -1){
			number = number.replace(/\./, "");//去除小数点
		}else if(number.length > 3 ){
			comma = true;
		}
		var count = number.length;
		var flipHtml = "";
		for(var i = 0;i < count;i++){
			var blackNum = parseInt(number[i]),
				frontNum = blackNum - 1,
				field = "",//分隔符，,/.
				lastUnit = "";//最后单位
			if(blackNum == 0){
				frontNum = 9;
			}else if(blackNum == 9){
				frontNum = 0;
			}
			
			if(i == pointIndex-1 && !comma){
				field = "<b class='point flex-item-bottom'>.</b>";
			}
			if(i == count-1){
				lastUnit = "<small>"+unit+"</small>";
			}
			flipHtml += '<ul class="digit down go">'
			+'		<li class="front number'+frontNum+'">'+frontNum+'</li>'
			+'		<li class="back number'+blackNum+'">'+blackNum+'</li>'
			+'		<li class="digit-center"></li>'
			+'	</ul>'
			+field
			+lastUnit;
		}
		flipId.innerHTML = flipHtml;
		var flipUl = flipId.getElementsByTagName('ul');
		if(comma){
			var sum = 0;
			for(var j = 0;j < flipUl.length;j++){
				var b = document.createElement("b");
				b.innerText = ",";
				b.setAttribute("class","point flex-item-bottom");
				if(sum % 3 == 0 && sum > 0){
					flipId.insertBefore(b,flipUl[flipUl.length - sum]);
				}
				sum++;
			}
		}
    },
    downplayChart:function(chart,index,seriesIndex){//去除高亮
		chart.dispatchAction({
			type:"downplay",
			seriesIndex:seriesIndex,
			dataIndex:index
	   });
	},
	highlightChart:function(chart,index,seriesIndex){//添加高亮
		chart.dispatchAction({
			type:"highlight",
			seriesIndex:seriesIndex,
			dataIndex:index
		});
	},
	
	pieUnSelectChart:function(chart,index,seriesIndex){//去除高亮
		chart.dispatchAction({
			type:"pieUnSelect",
			seriesIndex:seriesIndex,
			dataIndex:index
	   });
	},
	pieSelectChart:function(chart,index,seriesIndex){//添加高亮
		chart.dispatchAction({
			type:"pieSelect",
			seriesIndex:seriesIndex,
			dataIndex:index
		});
	},
	showTipChart:function(chart,index,seriesIndex){//去除高亮
		chart.dispatchAction({
			type:"showTip",
			seriesIndex:seriesIndex,
			dataIndex:index
	   });
	},
	hideTipChart:function(chart,index,seriesIndex){//添加高亮
		chart.dispatchAction({
			type:"hideTip",
			seriesIndex:seriesIndex,
			dataIndex:index
		});
	},
	scroll:function(boxId,id1){
		var box=document.getElementById(boxId);
		var l1=document.getElementById(id1);
		function scrollup(){
			if(box.scrollTop>=l1.offsetHeight){ 
				box.scrollTop=0;
			}else{
				box.scrollTop++;
			}
		}
		var scrollMove=setInterval(scrollup,30);//数值越大，滚动速度越慢
		box.onmouseover=function(){
			clearInterval(scrollMove)
		}
		box.onmouseout=function(){
			scrollMove=setInterval(scrollup,30);
		}
	},
	tabRun:function(tab,timer,index,speed){
		var run = function(t){
			$(t).find(".tab-item").eq(index).removeClass("hide").siblings(".tab-item").addClass("hide");
			$(t).find(".tab-btn").eq(index).addClass("active").siblings(".tab-btn").removeClass("active");
			
			var count = $(t).find(".tab-item").length;
			if(index >= count-1){
				index = 0
			}else{
				index++;
			}
		}
		timer = setInterval(function(){
			run($(tab)); 
		},speed);
		$(tab).mouseover(function(){
			clearInterval(timer);
		}).mouseout(function(){
			timer = setInterval(function(){
				run($(tab)); 
			},speed);
		})
	}

};


