// 封装axios

import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:8888/dev-api',
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 添加token
    // if(getToken()) {
    //   config.headers.Authorization = `Bearar ${getToken()}`
    // }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
