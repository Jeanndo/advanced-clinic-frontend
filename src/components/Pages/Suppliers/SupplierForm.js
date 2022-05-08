import React from "react"
import { Form, Input, Button, Checkbox, Col, Row } from "antd"

const SupplierForm = () => {
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
        <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item
            name="supplier_company"
            rules={[
              { required: true, message: "Supplier's Company  Please!!" },
            ]}
            style={{ display: "inline-block", width: "calc(50% - 8px)" }}
          >
            <Input placeholder="Company Name" />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[{ required: true, message: "Phone is Missing!!" }]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
          >
            <Input placeholder="Phone" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Email Please!!" }]}
            style={{ display: "inline-block", width: "calc(50% - 8px)" }}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="address"
            rules={[{ required: true, message: "Address is missing !!" }]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
          >
            <Input placeholder="Address" />
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

export default SupplierForm
