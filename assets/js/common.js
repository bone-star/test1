export default{
	signIn:function(_this){
		_this.axios.post(_this.backstage.ajaxUrl+"/nowLoginStatus",{},{"withCredentials":true}).then((res0) =>{
			var data = res0.data
			//console.log(data) 
			if(data){
				//console.log(data)
				if(data.status == "nologin"){//未登录
					//console.log(to.path)
					if(_this.cookies.get("userInfo")){//非首次登陆，登陆失效时清除
						_this.cookies.remove("userInfo");
		      			_this.cookies.remove("username");
		      			_this.cookies.remove("password");
					}/*
					if(whiteList.indexOf(to.path) > -1){//在登录页
					}else{
						window.location.href="/#/login"; 
					}*/
					window.location.href="/#/login"; 
				}else{
					//在已经登录的状态下
					//console.log(data)
					if( _this.$route.path.indexOf("/login") > -1){//登录状态下访问登录页，直接跳到聚合
						window.location.href="/#/indexPage";
					}
				}
			}
		},err=>{
			err = _this.common.errorAjax(err);
			console.log(err);
		})
	},
	getHttp:function(url,_this,params){
		return new Promise((resolve, reject) => {
			var api = url;
			_this.axios.get(api,{
				params:params,
				timeout: 1000//超时
			}).then((res0) =>{
				var data = res0.data
				if(data.status == "success"){
					resolve(data)
				}else{
					console.log("接口通畅，数据上传/获取失败")
				}
			}).catch((err)=>{
				reject(err)
			})
		})
	},
	postHttp:function(url,_this,params){
		return new Promise((resolve, reject) => {
			var api = url;
			//console.log(params)
			var p = params;
			//p.withCredentials = true;
			//console.log(p)
			if(params){
				p = _this.qs.stringify(params)
			}
			var userInfo = _this.cookies.get("userInfo");
			//console.log(api)
			var whiteList = [_this.backstage.ajaxUrl+"/quit",_this.backstage.ajaxUrl+"/login"];
			if(whiteList.indexOf(url) > -1){//登录页直接走
				//console.log(whiteList.indexOf(url));
				_this.axios.post(api,p,{"withCredentials":true}).then((res0) =>{
					var data = res0.data
					//console.log(res0)
					if(data){
						resolve(data)
					}else{
						console.log("接口通畅，数据上传/获取失败")
					}
				}).catch((err)=>{
					console.log(err)
					reject(err)
				})
			}else if(userInfo){
				//非登录页其他接口
				_this.axios.post(_this.backstage.ajaxUrl+"/nowLoginStatus",{},{"withCredentials":true}).then((res0) =>{
					var data = res0.data
					//console.log(data) 
					if(data){
						//console.log(data)
						if(data.status == "nologin"){//未登录
							//console.log(to.path)
							if(_this.cookies.get("userInfo")){//非首次登陆，登陆失效时清除
								_this.cookies.remove("userInfo");
				      			_this.cookies.remove("username");
							}
							window.location.href="/#/login"; 
						}else{
							_this.axios.post(api,p,{"withCredentials":true}).then((res0) =>{
								var data = res0.data
								//console.log(res0)
								if(data){
									resolve(data)
								}else{
									console.log("接口通畅，数据上传/获取失败")
								}
							}).catch((err)=>{
								console.log(err)
								reject(err)
							})
						}
					}
				})
					
			}
		})
	},
	addPost:function(url,param,_this){
		return new Promise((resolve, reject) => {
			_this.axios.post(url,param)
		    .then(response => {
		    	var data = response.data
				if(data.status == "success"){
					resolve(data)
				}else{
					console.log("接口通畅，数据上传/获取失败")
				}
	       	}).catch((err)=>{
				reject(err)
			})
	    })
	},
	errorAjax:function(err){
		let errorAll = ["timeout","400","404","500"];
		let texts = "";
		if(err.message.indexOf(errorAll[0]) > -1){
			texts = "网络错误，请稍后重试"
		}else if(err.message.indexOf(errorAll[1]) > -1){
			texts = "400请求错误，请稍后重试"
		}else if(err.message.indexOf(errorAll[2]) > -1){
			texts = "404无法找到指定页面，请稍后重试"
		}else if(err.message.indexOf(errorAll[3]) > -1){
			texts = "500服务器错误请稍后重试"
		}
		return texts;
	}
}
