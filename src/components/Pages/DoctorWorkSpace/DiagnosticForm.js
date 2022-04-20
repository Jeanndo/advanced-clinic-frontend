import React from "react"
import { Form, Input, Button } from "antd"
import classes from "./workspace.module.css"

const DiagnosticForm = () => {
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
          name="diagnosisName"
          rules={[
            {
              required: true,
              message: "Please input Diagnosis Name!",
            },
          ]}
        >
          <Input placeholder="Diagnosis Name" />
        </Form.Item>

        <Form.Item
          name="comment"
          rules={[
            {
              required: true,
              message: "Please input Comment!",
            },
          ]}
        >
          <Input.TextArea rows={10} />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            className={classes.completeDiagnosticBtn}
            htmlType="submit"
          >
            Complete Diagnosis
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  )
}

export default DiagnosticForm
