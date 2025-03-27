import { http } from "@/utils";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
function BlogPage() {
  const navigate = useNavigate()
  const sendVerify = () => {
    try {
      const res = http.get("/oauth2/authorize?response_type=code&client_id=opwe-client&scope=profile openid&redirect_uri=https://www.baidu.com")
    } catch (error: any) {
      if (error.response && error.response.status === 302) {
        // 重定向到新的URL
        console.log("")
        navigate(error.response.headers.location)
      } else {
        // 处理其他错误
        console.error('Request error:', error);
      }
    }
  }

  return (
    <div>
      blogPage
      <button onClick={sendVerify} > verify </button>
    </div>
  )
}


export default BlogPage;