import React from 'react'
import { Button, Checkbox, DatePicker, Form, Input, Space, TimePicker } from 'antd';
import { FaEnvelope, FaInfo, FaLock, FaPhone, FaUserTie } from 'react-icons/fa';

const { TextArea } = Input;

const AppContact = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };

  return (
      <div id="contact" className='block contactBlock'>
          <div className='container-fluid'>
              <div className='titleHolder'>
                  <h2>Reach out and touch us!</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              </div>

              <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}>
                  <Form.Item
                      name="fullname"
                      rules={[{ required: true, message: 'Please input your full name!' }]} >
                      <Input prefix={<FaUserTie />} placeholder="Full name" />
                  </Form.Item>
                  <Form.Item
                      name="email"
                      type="email"
                      rules={[{ required: true, message: 'Please input your email address!' }]} >
                      <Input prefix={<FaEnvelope />} placeholder="Email Address" />
                  </Form.Item>
                  <Form.Item
                      name="password"
                      rules={[{ required: true, message: 'Please input your Password!' }]} >
                      <Input.Password
                          prefix={<FaLock />}
                          type="password"
                          placeholder="Password" />
                  </Form.Item>
                  <Form.Item name="telephone" >
                      <Input prefix={<FaPhone />} placeholder="Telephone" />
                  </Form.Item>
                  <Form.Item name="subject" >
                      <Input prefix={<FaInfo />} placeholder="Subject" />
                  </Form.Item>
                  <Form.Item name="datetime" >
                      <Space>
                          <TimePicker />
                          <DatePicker />
                      </Space>
                  </Form.Item>
                  <Form.Item name="message">
                      <TextArea placeholder="Message" />
                  </Form.Item>
                  <Form.Item>
                      <Form.Item name="agreement" valuePropName="checked"
                          rules={[
                              { validator: (_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
                          ]}>
                          <Checkbox>I agree with terms and conditions</Checkbox>
                      </Form.Item>
                  </Form.Item>
                  <Form.Item>
                      <Button type="primary" htmlType="submit">
                          Submit
                      </Button>
                  </Form.Item>
              </Form>
          </div>
      </div>
  )
}

export default AppContact
