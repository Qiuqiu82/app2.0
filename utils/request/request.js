import Vue from 'vue'
import axios from 'axios'
import querystring from 'querystring'


const errorHandle =(satus,info) =>{
	switch(satus){
		case 400:
			console.log('语义有误');
			break;
		case 401:
			console.log('服务器认证失败');
			break;
		case 403:
			console.log('服务器拒绝访问');
			break;
		case 404:
			console.log('地址错误');
			break;
		case 500:
			console.log('服务器遇到意外');
			break;
		case 502:
			console.log('服务器无响应');
			break;
		default:
			console.log(info);
			break;
	}
}

// create an axios instance
const service = axios.create({
	baseURL: 'https://www.yongjiachen.top/jccrm', // url = base url + request url
	//withCredentials: true, // send cookies when cross-domain requests 注意：withCredentials和后端配置的cross跨域不可同时使用
	timeout: 5000, // request timeout
	crossDomain: true
})
 
// request拦截器,在请求之前做一些处理
//这是发送数据之前
service.interceptors.request.use(
    config => {
        // if (store.state.token) {
        //     // 给请求头添加user-token
        //     config.headers["user-token"] = store.state.token;
        // }
		if(config.methods === "post"){
			config.data = querystring.stringify(config.data)
		}
        console.log('请求拦截成功')
        return config;
    },
    error => {
        console.log(error); // for debug
        return Promise.reject(error);
    }
)

//获取数据之前
service.interceptors.response.use(
  response => {
    return response && response.status === 200 ? Promise.resolve(response) : Promise.reject(response);
  },
  error => {
    const { response } = error;
    if (response) {
      errorHandle(response.status, response.info);
    } else {
      // 处理未定义的 response 对象
    }
  }
)

//配置成功后的拦截器
// service.interceptors.response.use(res => {
//     if (res.data.status== 200) {
//         return res.data
//     } else {
//         return Promise.reject(res.data.msg);
//     }
// }, error => {
// 	if (error.response.status) {
// 		switch (error.response.status) {
// 			case 401:
// 				break;
// 			default:
// 				break;
// 		}
// 	}
//     return Promise.reject(error)
// })


// 在main.js中放入这段自定义适配器的代码，就可以实现uniapp的app和小程序开发中能使用axios进行跨域网络请求，并支持携带cookie
axios.defaults.adapter = function(config) { 
    return new Promise((resolve, reject) => {
        console.log(config)
        var settle = require('axios/lib/core/settle');
        var buildURL = require('axios/lib/helpers/buildURL');
        uni.request({
            method: config.method.toUpperCase(),
            url: config.baseURL + buildURL(config.url, config.params, config.paramsSerializer),
            header: config.headers,
            data: config.data,
            dataType: config.dataType,
            responseType: config.responseType,
            sslVerify: config.sslVerify,
            complete: function complete(response) {
                console.log("执行完成：",response)
                response = {
                    data: response.data,
                    status: response.statusCode,
                    errMsg: response.errMsg,
                    header: response.header,
                    config: config
                };

                settle(resolve, reject, response);
            }
        })
    })
}

export default service
