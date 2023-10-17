import axios from "axios";
// 引入NProgress进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


//配置进度条参数
NProgress.configure({ showSpinner: false, minimum: 0.2, easeing: 'swing', speed: 1000, trickleRate: 0.2 });



// 1. 创建实例时配置默认值
const service = axios.create({
    baseURL: 'https://api.thecatapi.com',
    timeout: 1000
  });




  //2. 请求拦截器,前端给后端
  service.interceptors.request.use(config => {
    console.log('请求拦截器',  config)  
    NProgress.inc(); 
    return config;
  }, error => {
    NProgress.done();
    Promise.reject(error);
    
  });




//3. 响应拦截器，后端给前端
service.interceptors.response.use(response => {
//判断code码
//console.log('响应拦截器', response)
    NProgress.done();
    return response.data;
},error => {
    NProgress.done();
    return Promise.reject(error);
});


export default service;
