import React, { memo } from 'react';
import { Button, Form, Input } from 'antd';
import {loginAxios, downloadAxios} from './request/request';

const App = memo(() => {

  // const onFinish = async (values) => {
  //   // await fetch('/api/customeuser/create', {
  //   //   method: "POST",
  //   //   body
  //   // })
  //   const formLabelAlign = {
  //     username: values.username,
  //     password: values.password,
  //     code: values.authcode
  //   }
  //   try {
  //     // 传的 body 是个 json
  //     await loginAxios.post("/customeuser/create", JSON.stringify(formLabelAlign));
  //   } catch (error) {
  //     console.log('error:', error)
  //   }
  // }

  const onFinishFailed = () => {
    console.log('error')
  }

  const downloadHandler = async () => {
    // const res = await fetch('/api/upload/stream').then(res => res.arrayBuffer());
    const res = await downloadAxios.get('upload/stream')
    const a = document.createElement('a');
    const blob = new Blob([res.data], {
      type: 'image/jpg'
    })
    a.href = URL.createObjectURL(blob)
    console.log(URL.createObjectURL(blob))
    a.download = 'myTestImg.zip';
    a.click();
    a.remove();
  }

  return (
    <div style={{margin: '100px auto', width: "800px"}}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 10,
        }}
        style={{
          maxWidth: 800,
        }}
        initialValues={{
          remember: true,
        }}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="账号"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="验证码"
          name="authcode"
          rules={[
            {
              required: true,
              message: 'Please input authcode!',
            },
          ]}
        >
          <div style={{display: 'flex'}}>
            <Input />
            <img src='/api/customeuser/code'></img>
          </div>
          
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            登录
          </Button>
          
          <Button onClick={downloadHandler} type="primary" htmlType="submit">
            下载
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
})

export default App