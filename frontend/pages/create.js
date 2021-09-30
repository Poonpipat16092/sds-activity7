import "antd/dist/antd.css";
import { Form, Input, Button, Alert, Spin } from 'antd';
import { useRouter} from 'next/router'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
};

const CreateBlog = () => {
  const router = useRouter()
  const onFinish = (values) => {
      console.log('Success:', values);
      axios.post('http://localhost:8000/api/v1/blog',values)
      router.push('/')
    };
  return (
    <div style={{marginTop: '10%'}}>
      <Form
        {...layout}
        name="basic"
        initialValues={{}}
        onFinish={onFinish}
        >
        <Form.Item
            label="Title"
            name="title"

            rules={[
            {
                required: true,
                message: 'Please input your Title!',
            },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Description"
            name="description"
            rules={[
            {
                required: true,
                message: 'Please input your description!',
            },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
            Submit
            </Button>
        </Form.Item>
        </Form>
      </div>
  );
};

export default CreateBlog