import React, { useEffect, useState } from 'react';
import { Card, Form, Input, Button, Checkbox } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import logo from '@/assets/newLogo.png'
import './index.scss'
import { useIvt } from '@/store'
import { useLocation, NavLink, useNavigate } from 'react-router-dom';

interface LoginFormValues {
  username: string;
  password: string;
}

function Loginpage() {

  const { loginIvt } = useIvt();
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState(false);
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    setClientReady(true);
  }, []);

  const onFinish = async (values: LoginFormValues) => {
    const { username, password } = values
    // console.log(getQueryString("target"))
    const res = await loginIvt.login({ username, password })
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
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]} >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
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