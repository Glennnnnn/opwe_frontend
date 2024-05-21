import React from "react"
import Loginvt from '@/store/ivt.login'
import IvtUser from "./ivt.user"

class RootIvt {
  loginIvt: Loginvt;
  ivtUser: IvtUser;

  // 组合模块
  constructor() {

    this.loginIvt = new Loginvt()
    this.ivtUser = new IvtUser()
  }
}
// 导入useStore方法供组件使用数据
const ivtContext = React.createContext(new RootIvt())
// export const useStore = () => React.useContext(StoresContext)
const useIvt = () => React.useContext(ivtContext)
export { useIvt }