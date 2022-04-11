import React from "react"
import { Form, Input, Button, Checkbox, Row, Col } from "antd"

const AddDepartment = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values)
  }

  return (
    <React.Fragment>
      <Form
        name="complex-form"
        onFinish={onFinish}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 24 }}
        style={{ padding: "0 100px" }}
      >
        <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item
            name="department_name"
            rules={[{ required: true, message: "Department Name Please!!" }]}
            style={{ display: "inline-block", width: "calc(50% - 8px)" }}
          >
            <Input placeholder="Department Name" />
          </Form.Item>
          <Form.Item
            name="department_id"
            rules={[{ required: true, message: "Department ID is Missing!!" }]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
          >
            <Input placeholder="Department ID" />
          </Form.Item>
          <Form.Item
            name="department_manager"
            rules={[{ required: true, message: "Department Name Please!!" }]}
            style={{ display: "inline-block", width: "calc(50% - 8px)" }}
          >
            <Input placeholder="Department Name" />
          </Form.Item>
          <Form.Item
            name="phone_number"
            rules={[{ required: true, message: "Phone Number is missing !!" }]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
          >
            <Input placeholder="Phone Number" />
          </Form.Item>
        </Form.Item>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={12}>
            <Form.Item
              name="active"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 6,
              }}
            >
              <Checkbox>Active</Checkbox>
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={12}>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                SUBMIT
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  )
}

export default AddDepartment
