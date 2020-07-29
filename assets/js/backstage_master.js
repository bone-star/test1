export default{
	search:{
		open:function(row){
			var boxHeight = parseInt(row.clientHeight);
			if( boxHeight > 64){
				return true;
			}
		}
	},
	yearD:function(){
		const yearData = ["请选择"];
		for(let i = new Date().getFullYear();i > 1980;i--){
			yearData.push(i)
		}
		return yearData;
	},
	format (num) {//千分位
	    return (num+ '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
	 
	},
	tableList(obj,url,_this){
		var param = {};
	//	var obj = this.formModel;
		Object.keys(obj).forEach(function(key){
			let val = obj[key];
			if(val){
				val = val.toString().replace(/\s/g,"")
			}
			if(val && val != "请选择" && val != "不限" && val != "市辖区"){
				param[key] = val
			}
		})
		
		//console.log(param)
		//console.log(param)
		_this.common.postHttp("http://47.110.49.30:8080/" + url ,_this,param)
		.then(response => { 
			//console.log(response);
			_this.tableLoading = false;
			var pageSize,total,data,pageNum;
			if(response.list){
				pageSize = response.pageSize;
				total = response.total;
				data = response.list;
				pageNum = response.pageNum
				_this.tableTotal = response.total;
				_this.tableData = response.list
			}else{
				pageSize = 10;
				total = response.length;
				data = response;
				pageNum = 1;
				_this.tableTotal = data.length;
				_this.tableData = data
			}
			data.forEach(function(v,i){
				if(v.age){
					v.age += "岁"
				}
				if(v.registerFunds){
					v.registerFunds += "万元"
				}
				if(v.funds){
					v.funds += "万元"
				}
				if(v.introduce){
					v.introduce = v.introduce.substring(0,100)+"..."
				}
				if(v.searchKeywords){
					v.searchKeywords = v.searchKeywords.substring(0,50)+"..."
				}
				
				Object.keys(v).forEach(function(key){
					if(key.indexOf("Time") > -1 && v[key]){
						v[key] = v[key].toString().split("T")[0]
						//console.log(v[key])
					}
					if(key == "itemStartEnd"){
						v[key] = v[key].toString().split("T")[0]
					}
					if(key == "applyDate"){
						v[key] = v[key].toString().split("T")[0]
					}
				})
				//2019-01-29T16:00:00.000+0000
				v.key = pageNum * pageSize - (pageSize-1) + i;
				
			//	_this.tableId.push(response.id)
			})
			_this.pageObj.pageSize = pageSize;
			_this.pageObj.total = total;
			
		},err => {
			_this.tableLoading = false;
			err = _this.common.errorAjax(err);
			if(err){
				if(err){
				_this.$message.error(err);
			}
			}
		})
	},
	cityUrl:{
		"city":"http://47.110.49.30:8080/getProvinceAndCode",
		"area":"http://47.110.49.30:8080/getCityByCode"
	},
	city(_this){
		_this.common.postHttp(_this.backstage.cityUrl.city,_this,"")
		.then(response => {
			//console.log(response)
			_this.cityLoad = false;
			_this.cityList = _this.cityList.concat(response);
		},err => {
			_this.cityLoad = false;
			err = _this.common.errorAjax(err);
			if(err){
				if(err){
				_this.$message.error(err);
			}
			}
		})
	},
	area(_this,opt){
		if(opt){//非不限选项
			_this.common.postHttp(_this.backstage.cityUrl.area,_this,opt)
			.then(response => {
				//console.log(response)
				_this.areaLoad = false;
				_this.areaList = _this.areaList.concat(response);
			},err => {
				_this.areaLoad = false;
				err = _this.common.errorAjax(err);
				if(err){
				_this.$message.error(err);
			}
			})
		}
	},
	cityChange(opt,_this,areaLoad,areaList,model){//name必须有 
		if(opt){//非不限选项
			areaLoad = true;
			var params = {"code":opt};
			//console.log(params)
			_this.common.postHttp(_this.backstage.cityUrl.area,_this,params)
			.then(response => {
				areaLoad = false;
				areaList = response;
				if(response.length > 1){//非直辖市时，全省搜索
					areaList.unshift({"addr":"不限"});
				}
				//model = areaList[0].addr;
			},err => {
				err = _this.common.errorAjax(err);
				if(err){
					_this.$message.error(err);
				}
			})
		}else{
			areaList = [{"addr":"不限"}];
			model = areaList[0].addr;
		}
	},
	ajaxUrl:"http://47.110.49.30:8080",
	viewUrl(_this,param,goBack,url){
		_this.common.postHttp(_this.backstage.ajaxUrl+'/judgeToPage',_this,param)
		.then(res=>{
			if(res.flag == 0){
				window.location.href = "/talent/registerView?id="+res.id+"&goBack="+goBack+"&url="+url
				//this.viewHref = {"name":"registerView","query":{'id':res.id}}
			}else if(res.flag == 1){
				window.location.href = "/talent/marketView?id="+res.id+"&goBack="+goBack+"&url="+url
				//this.viewHref = {"name":"marketView","query":{'id':res.id}}
			}else{
				_this.$message.info('暂无此企业数据');
			}
		},err=>{
			
		})
	},
	menuList:[
		{"name":"首页","key":"home","sub":[]},
		{
			"name":"人才信息库",
			"key":"highLevel",
			"sub":[//二级页
				{
					"name":"党政人才",
					"url":"politics",
				},
				{"name":"企业经营管理人才","url":"business"},
				//{"name":"其他企业经营管理人才","url":"otherBusiness"},
				{"name":"专业技术人才库","url":"skill"},
				{"name":"高技能人才","url":"highSkill"},
				{"name":"本地智库","url":"localSkill"},
				{"name":"高层次人才库","url":"levelSkill"},
			]
		},
		{
			"name":"人才载体信息库",
			"key":"talent",
			"sub":[
				/*{
					"name":"企业基本信息",
					"sub":[//三级页
						{"name":"上市企业","url":"register"},
						{"name":"工商注册企业","url":"market"}
					]
				},*/
				{"name":"上市企业","url":"register"},
				{"name":"工商注册企业","url":"market"},
				{"name":"产业园区","url":"industrialPark"},
				{"name":"重点实验室","url":"keyLaboratory"},
				{"name":"国家级孵化器培育单位","url":"incubator"},
				{"name":"产业技术创新联盟","url":"union"},
				{"name":"院士工作站","url":"academician"},
				{"name":"新型研发机构","url":"RDInstitutions"},
				{"name":"工程技术研究中心","url":"researchCenter"},
				{"name":"高新技术企业","url":"newEnterprises"},
				{"name":"高等院校与研究所","url":"heightSchool"}
			]
		},
		{
			"name":"项目信息库",
			"key":"project",
			"sub":[
				{"name":"国家重点专项","url":"keyProject"},
				{"name":"广东科技项目","url":"STProject"},
				{"name":"广东自然基金项目","url":"NFProject"},
				{"name":"广东重点实验室项目","url":"keyTestProject"}
			]
		},{
			"name":"成果信息库",
			"key":"result",
			"sub":[
				{"name":"高新技术项目成果","url":"highResult"},
				{"name":"科学技术奖","url":"sciencePrix"},
				{"name":"广东省科技项目成果","url":"resultProject"},
				{"name":"广东专利成果","url":"patentResult"}
			]
		},
		{"name":"大屏看板","key":"largeScreen","sub":[]},
	],
	otherMenuList:[
		{"name":"详情页","url":"highTalentsView"},
		{"name":"详情页","url":"registerView"},
		{"name":"详情页","url":"marketView"},
		{"name":"详情页","url":"listTalentsView"},
		{"name":"详情页","url":"marketView"},
		{"name":"专利详情","url":"view"},
		{"name":"详情页","url":"industrialParkView"}
	],
	login(_this,param,url){//登录
		_this.common.postHttp(url,_this,param)
        .then(response => {
        	//console.log(response)
      		if(response.status === "success"){
      			//console.log(1);
      			//document.cookie.userInfo = response.userInfo
      			_this.cookies.set("userInfo",response.userInfo);
      			_this.cookies.set("username",_this.formInline.username);
      			//console.log(_this.cookies.get("userInfo"));
      			//_this.$router.push({path:"/indexPage"});
      			window.location.href="/#/indexPage";
      		}else{
      			//console.log(2);
      			_this.msg = response.msg;
      			if(response.msg.toString().indexOf("已经登录") > -1){
	      			window.location.href="/#/indexPage";
	      			//_this.$router.push({path:"/indexPage"});
      			} 
      			
      		}
      		//console.log(response)
        },err=>{
      		console.log(err);
        })
	},
	searchReset(_this){//重置
		var model = _this.$refs.mychild.model;//访问已经被赋值的model，不可直接改变
		var selectList= ["talentLevel","jobType","edu","technicalLevel","technicalType","talentLevel","industry","hasKeyLab","isNationalIncubator","isAcademicianWorkstation","isHighTech"];
		Object.keys(model).forEach((v,i)=>{
			if(v == "page"){
				model[v] = 1
			}else if(v.indexOf("Province") > -1 || v.indexOf("City") > -1 || v.indexOf("province") > -1 || v.indexOf("city") > -1 ){
				model[v] = "不限"
			}else if(selectList.indexOf(v) > -1){
				model[v] = "请选择"
			}else{
				model[v] = ""
			}
		})
		_this.$refs.mychild.tableLoading = true;
		_this.$refs.mychild.model.page = _this.$refs.mychild.pageObj.current = 1;//表格回到第一页
		_this.$refs.mychild.tableList();
	},
	submitForm(e,_this){//提交
		e.preventDefault();//禁止提交刷新
		_this.$refs.mychild.tableLoading = true;
		//console.log(this.$refs.mychild.pageObj)
		_this.$refs.mychild.model.page = _this.$refs.mychild.pageObj.current = 1;//表格回到第一页
		_this.$refs.mychild.tableList();
	}
}