import React from "react"
import { Form, Input, Button } from "antd"
import classes from "./workspace.module.css"

const PrescribeForm = () => {
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
          name="Drug Name"
          rules={[
            {
              required: true,
              message: "Drug Name!",
            },
          ]}
        >
          <Input placeholder="Diagnosis Name" />
        </Form.Item>

        <Form.Item
          name="Drug Dosage per day"
          rules={[
            {
              required: true,
              message: "Please input Drug Dosage per day!",
            },
          ]}
        >
          <Input placeholder="Drug Dosage per day" />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" className={classes.classes}>
            Prescribe Medication
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  )
}

export default PrescribeForm
