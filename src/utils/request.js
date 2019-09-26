import axios from 'axios'
import * as Setting from '@/setting.js'

//1,创建axios实例
const instance = axios.create({
    baseURL: Setting.PROJECT_NAME,
    timeout: 5000
})
// 2,请求拦截器
instance.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
})
// 3,响应拦截器
instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
})
//发送请求
export default instance   
