import React, { useEffect, useState } from 'react';
import { Card, Form, Input, Button, Checkbox, message } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import logo from '@/assets/opweLogo.png'
import './index.scss'
import { useIvt } from '@/store'
import { useLocation, NavLink, useNavigate } from 'react-router-dom';
import { useUserLoginMutation } from '@/redux/services/authApi'
interface LoginFormValues {
  username: string;
  password: string;
}

interface Credentials {
  userName: string;
  userPassword: string;
}

function Loginpage() {

  const { loginIvt } = useIvt();
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState(false);
  const location = useLocation()
  const navigate = useNavigate()
  const [messageApi, contextHolder] = message.useMessage();


  useEffect(() => {
    setClientReady(true);
  }, []);
  const [userLogin] = useUserLoginMutation();
  const onFinish = async (values: Credentials) => {
    // const { username, password } = values
    // console.log(getQueryString("target"))
    try {
      const loginResult = await userLogin(values)
        .unwrap()
        .then((payLoad) => {
          // console.log(payLoad)
          if (payLoad.code == 200) {
            messageApi.open({
              type: 'success',
              content: 'Login success!',
              duration: 1
            });
            setTimeout(() => {
              navigate("/")
            }, 1000);

          } else {
            messageApi.open({
              type: 'error',
              content: 'Login failed!',
              duration: 3
            });
          }

        })
    } catch (error) {
      setTimeout(() => {
        messageApi.open({
          type: 'error',
          content: 'Login failed!',
        });
      }, 3000);
    }

  }
  function getQueryString(queryName: String) {
    var reg = new RegExp('(^|&)' + queryName + '=([^&]*)(&|$)', 'i')

    var r = window.location.search.substr(1).match(reg)

    if (r != null) {
      return unescape(r[2])
    }
    return null
  }

  return (
    <div className="login">
      {contextHolder}
      <video autoPlay loop muted>
        <source src="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr" />
      </video>
      <Card className="login-container">
        <div className='login-div'>
          <img className="login-logo" src={logo} alt="" />
          <span style={{ fontSize: '25px', fontWeight: 'bold' }}>Welcome Back! </span>
          <span style={{ fontSize: '18px', fontWeight: 'normal' }}>Login to your account</span>
        </div>
        <Form name="login-form" className="login-form" onFinish={onFinish}>
          <Form.Item
            name="userName"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]} >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="userPassword"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password" />
          </Form.Item>
          <div className='login-div'>
            <Form.Item shouldUpdate>
              {() => (
                <Button
                  className='login-button'
                  type="primary"
                  htmlType="submit"
                  disabled={
                    !clientReady ||
                    !form.isFieldsTouched(true) ||
                    !!form.getFieldsError().filter(({ errors }) => errors.length).length
                  }> Log in</Button>)}
            </Form.Item>
          </div>
        </Form>
      </Card>
    </div>
  )
}


export default Loginpage;