import React from "react"
import { Form, Button, Select } from "antd"
import classes from "./workspace.module.css"

const { Option } = Select

const ExamForm = () => {
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
          name="examCategory"
          rules={[
            {
              required: true,
              message: "Please input Exam Category!!",
            },
          ]}
        >
          <Select placeholder="Exam Category" allowClear>
            <Option value="A">Category A</Option>
            <Option value="B">Category B</Option>
            <Option value="C">Category C</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="examName"
          rules={[
            {
              required: true,
              message: "Please input Exam Name !!!",
            },
          ]}
        >
          <Select placeholder="Exam Name" allowClear>
            <Option value="A">Name A</Option>
            <Option value="B">Name B</Option>
            <Option value="C">Name C</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="LabCategory"
          rules={[
            {
              required: true,
              message: "Please input Lab Category !!!",
            },
          ]}
        >
          <Select placeholder="Add Laboratory category" allowClear>
            <Option value="A">Laboratory category A</Option>
            <Option value="B">Laboratory category B</Option>
            <Option value="C">Laboratory category C</Option>
          </Select>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            className={classes.SendExamBtn}
            type="primary"
            htmlType="submit"
          >
            Send Exam Request
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  )
}

export default ExamForm
