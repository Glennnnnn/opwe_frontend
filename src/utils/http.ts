//封装axios
import axios from 'axios'
import { getToken, setToken } from '@/utils/token'
// import { history } from '@/utils/historyPlugin'
import JSONbig from 'json-bigint'

//const JSONbig = require('json-bigint')({ 'storeAsString': true });
const http = axios.create({
  baseURL: '/api',
  withCredentials: true,
  headers: {
    'testHeader': 'aaaa',
    'nonceId': window.localStorage.getItem("nonceid") === '' ? '' : window.localStorage.getItem("nonceid"),
  },
  transformResponse: [function (data) {
    try {
      console.log("axios get response" + data)
      return JSONbig.parse(data)
    } catch (err) {
      console.log("axios get error" + err)
      return data
    }
  }],
})
// 添加请求拦截器
http.interceptors.request.use((config) => {
  console.log('Request Cookies:' + config.headers);
  if (config.url && config.url.startsWith('/login')) {
    // 设置 Cookie
    console.log(config.headers.cookie)
  }
  // 根据域名进行逻辑判断
  // 对来自 example.com 域名的请求做一些处理
  // const token = getToken()
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`
  // }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 添加响应拦截器
http.interceptors.response.use(response => {
  console.log('Response Set-Cookie:', response.headers);
  // 如果响应是重定向，进行处理
  if (response.status === 302) {
    // 在这里处理重定向逻辑，比如获取重定向地址并跳转
    const redirectUrl = response.headers.location;
    window.location.href = redirectUrl;

    // 返回一个空的Promise来阻止原始响应链继续执行
    return new Promise(() => { });
  }
  return response;
}, (error) => {
  if (error.response?.status === 401) {
    setToken('')
    console.log(error.response.headers)
    // window.localStorage.setItem("nonceid", "")
    //window.alert("Token expired please login")
    window.location.href = "/loginPage"
    //history.push('/login')
  }
  return Promise.reject(error)
})

function getDomainFromUrl(url: string) {
  const match = url.match(/^https?:\/\/([^/]+)/i);
  if (match && match.length > 1) {
    return match[1];
  }
  return null;
}

export { http }