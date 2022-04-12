import React from "react"
import { Form, Input, Button } from "antd"

const LabForm = () => {
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
          span: 8,
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
          name="Patient_id"
          rules={[
            {
              required: true,
              message: "Patient ID Please!",
            },
          ]}
        >
          <Input type="number" placeholder="Patient ID" />
        </Form.Item>
        <Form.Item
          name="patient_type"
          rules={[
            {
              required: true,
              message: "Patient Type is Missing!",
            },
          ]}
        >
          <Input placeholder="Patient Type" />
        </Form.Item>
        <Form.Item
          name="test_type"
          rules={[
            {
              required: true,
              message: "Test Type is Missing!",
            },
          ]}
        >
          <Input placeholder="Test Type" />
        </Form.Item>
        <Form.Item
          name="test_code"
          rules={[
            {
              required: true,
              message: "Test Code is Missing!",
            },
          ]}
        >
          <Input placeholder="Test Code" />
        </Form.Item>
        <Form.Item
          name="weight"
          rules={[
            {
              required: true,
              message: "Weight is Missing!",
            },
          ]}
        >
          <Input placeholder="Weight" />
        </Form.Item>
        <Form.Item
          name="height"
          rules={[
            {
              required: true,
              message: "Height is Missing!",
            },
          ]}
        >
          <Input type="number" placeholder="Height" />
        </Form.Item>
        <Form.Item
          name="blood_pressure"
          rules={[
            {
              required: true,
              message: "Blood Pressure is Missing!",
            },
          ]}
        >
          <Input type="number" placeholder="Blood Pressure" />
        </Form.Item>
        <Form.Item
          name="temperature"
          rules={[
            {
              required: true,
              message: "Temperature is Missing!",
            },
          ]}
        >
          <Input type="number" placeholder="Temperature" />
        </Form.Item>
        <Form.Item
          name="date"
          rules={[
            {
              required: true,
              message: "Date is Missing!",
            },
          ]}
        >
          <Input type="Date" placeholder="Date" />
        </Form.Item>
        <Form.Item
          name="category"
          rules={[
            {
              required: true,
              message: "Category is Missing!",
            },
          ]}
        >
          <Input placeholder="category" />
        </Form.Item>
        <Form.Item
          name="test_result"
          rules={[
            {
              required: false,
              message: "Test Result is Missing!",
            },
          ]}
        >
          <Input.TextArea placeholder="Test Result" />
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

export default LabForm
