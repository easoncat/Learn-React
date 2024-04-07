import React, { memo, useState, useEffect } from 'react';
import { Space, Table, Button, Input, Modal, Form } from 'antd';
import { studentAxios } from './request/request'

const App = memo(() => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [tableData, setTableData] = useState([]);
  const [formDataId, setFormDataId] = useState(0);

  const [form] = Form.useForm()

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'desc',
      dataIndex: 'desc',
      key: 'desc',
      width: 300
    },
    {
      title: 'Action',
      key: 'action',
      width: 200,
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => {updateHandler(record)}}>修改</Button>
          <Button onClick={() => {deleteHandler(record.key)}}>删除</Button>
        </Space>
      ),
    },
  ];
  
  const getData = async() => {
    const res = await studentAxios.get('/list', {
      params: {
        keyword: keyword
      }
    });
    const newData = res.data.map(item => ({
      key: item.id,
      name: item.name,
      age: item.age,
      desc: item.desc
    }))
    setTableData(newData)
  }

  useEffect(() => {
    getData()
  },[])

  const showModal = () => {
    setIsModalOpen(true);
    setFormDataId(0);
    form.resetFields();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSaved = async (values) => {
    if(formDataId) {
      const updateFormData = {
        name: values.name,
        age: values.age,
        desc: values.desc
      }
      await studentAxios.patch(`/list/${formDataId}`, updateFormData)
    } else {
      const formData = {
        name: values.name,
        age: values.age,
        desc: values.desc
      }
      await studentAxios.post('/list', formData);
    }
    getData();
    handleCancel();
  }

  const deleteHandler = async (id) => {
    await studentAxios.delete(`/list/${id}`);
    getData()
  }

  const updateHandler = async (item) => {
    setIsModalOpen(true);
    setFormDataId(item.key);
    const newItem = {
      name: item.name,
      age: item.age,
      desc: item.desc
    }
    form.setFieldsValue(newItem)
  }

  const onFinishFailed = (error) => {
    console.log(error)
  }

  return (
    <div style={{width: "1000px", margin: '20px auto'}}>
      <div style={{display: 'flex', marginBottom: '20px'}}>
        <Input value={keyword} onChange={(e) => {setKeyword(e.target.value)}} style={{width: '300px', marginRight: '40px'}} placeholder="请输入关键词" />
        <Button type="primary" style={{marginRight: '10px'}} onClick={() => {getData()}}>搜索</Button>
        <Button onClick={showModal}>添加</Button>
      </div>
      <Table pagination={false} columns={columns} dataSource={tableData} />
      <Modal 
        title="添加数据" 
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        >
        <Form
            name="basic"
            labelAlign='left'
            form={form}
            labelCol={{
                span: 5,
            }}
            wrapperCol={{
                span: 12,
            }}
            style={{
                width: 500,
                marginLeft: 70,
                marginTop: 30
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onSaved}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="用户名"
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your name!',
                    },
                ]}
            >
            <Input />
            </Form.Item>

            <Form.Item
                label="年龄"
                name="age"
                rules={[
                    {
                        required: true,
                        message: 'Please input your age!',
                    },
                ]}
                >
                <Input />
            </Form.Item>

            <Form.Item
                label="描述"
                name="desc"
                rules={[
                    {
                        required: true,
                        message: 'Please input your desc!',
                    },
                ]}
                >
                <Input />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button style={{marginRight: '20px'}} type="primary" htmlType="submit">
                保存 
              </Button>
              
              <Button onClick={handleCancel}>
                关闭
              </Button>
            </Form.Item>
        </Form>
      </Modal>
    </div>
  )
})

export default App