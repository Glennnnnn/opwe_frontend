// 登录模块
import { makeAutoObservable } from "mobx"
//import axios from "axios"
import { getToken, setToken, removeToken } from '@/utils'
import { history } from "@/utils/historyPlugin"
import { http } from "@/utils"

interface LoginParams {
  username: string;
  password: string;
}

class LoginIvt {

  result = ''
  token = getToken() || ''


  constructor() {
    makeAutoObservable(this)
  }
  // 登录
  login = async ({ username, password }: LoginParams) => {

    const res = await http.post('/login', {
      username,
      password
    },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      }
    )
    console.log(res.data.code)
    if (res.data.code === 200) {
      // const extraHeaders = {
      //   'nonceid': res.headers.nonceid
      // };
      console.log("res with nonceid" + res.headers.nonceid)
      window.localStorage.setItem("nonceid", JSON.parse(JSON.stringify(res.headers.nonceid)))
      console.log("after storage" + window.localStorage.getItem("nonceid"))
      window.location.href = "http://localhost:8085/oauth2/authorize?response_type=code&client_id=opwe-client&scope=profile openid&redirect_uri=https://www.baidu.com"
      // const redirectRes = http.get("/oauth2/authorize?response_type=code&client_id=opwe-client&scope=profile openid&redirect_uri=https://www.baidu.com")
      // this.token = res.data.data.token
      // this.result = res.data.code
      // setToken(this.token)
      // history.push('/')
    }

    if (res.data.code === 401) {
      // window.alert("login failed")
      setToken("")
      window.location.reload()
      console.log("reload")
    }

    // this.token = "a"
    // this.result = 200
    // setToken(this.token)
    // history.push('/')

    //console.log(res.data)
    console.log('aaa' + getToken())
  }

  logout = async () => {
    const res = await http.get('/user/logout')
    if (res.data.code === 200) {
      this.result = res.data.code
      console.log(getToken())
      removeToken()
    }

  }
}
export default LoginIvt