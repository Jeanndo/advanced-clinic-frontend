import React from "react"
import { Form, Input, Button } from "antd"

const MedecineForm = () => {
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
          name="medecine_name"
          rules={[
            {
              required: true,
              message: "Medecine Name Please!",
            },
          ]}
        >
          <Input placeholder="Medecine Name" />
        </Form.Item>
        <Form.Item
          name="medecine_category"
          rules={[
            {
              required: true,
              message: "Medecine Category Please!",
            },
          ]}
        >
          <Input placeholder="Medecine Category" />
        </Form.Item>
        <Form.Item
          name="medecine_type"
          rules={[
            {
              required: true,
              message: "Medecine Type Please!",
            },
          ]}
        >
          <Input placeholder="Medecine Type" />
        </Form.Item>
        <Form.Item
          name="medecine_cost"
          rules={[
            {
              required: true,
              message: "Medecine Cost please!",
            },
          ]}
        >
          <Input type="number" placeholder="Medecine Cost" />
        </Form.Item>
        <Form.Item
          name="medecine_description"
          rules={[
            {
              required: true,
              message: "Medecine Description Please!",
            },
          ]}
        >
          <Input.TextArea placeholder="Medecine Description" />
        </Form.Item>
        <Form.Item
          name="production date"
          rules={[
            {
              required: true,
              message: "Date Please!",
            },
          ]}
        >
          <Input.TextArea placeholder="Medecine Description" />
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

export default MedecineForm
