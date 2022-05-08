import React from "react"
import { Form, Input, Button } from "antd"

const AppointmentForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo)
  }
  return (
    <React.Fragment>
      <Form
        name="basic"
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="appointment_type"
          rules={[
            {
              required: true,
              message: "Appointment Type is Missing!",
            },
          ]}
        >
          <Input placeholder="Appointment Type" />
        </Form.Item>
        <Form.Item
          label="Date of Creation"
          name="appointment_createdAt"
          rules={[
            {
              required: true,
              message: "Date of Creation is Missing!",
            },
          ]}
        >
          <Input type="Date" placeholder="Date of Creation" />
        </Form.Item>
        <Form.Item
          label="DeadLine"
          name="appointment_deadline"
          rules={[
            {
              required: true,
              message: "Deadline is Missing!",
            },
          ]}
        >
          <Input type="Date" placeholder="Deadline" />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  )
}

export default AppointmentForm
