import React from "react"
import { Form, Input, Button, Radio } from "antd"

const PatientForm = () => {
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
          name="firstName"
          rules={[
            {
              required: true,
              message: "First Name Please!",
            },
          ]}
        >
          <Input placeholder="First Name" />
        </Form.Item>
        <Form.Item
          name="lastName"
          rules={[
            {
              required: true,
              message: "Last Name Please!",
            },
          ]}
        >
          <Input placeholder="Last Name" />
        </Form.Item>
        <Form.Item
          name="dateOfBirth"
          rules={[
            {
              required: true,
              message: "Date of Birth Please!",
            },
          ]}
        >
          <Input type="Date" placeholder="Date Of Birth" />
        </Form.Item>
        <Form.Item
          name="country"
          rules={[
            {
              required: true,
              message: "Country please!",
            },
          ]}
        >
          <Input placeholder="Country" />
        </Form.Item>
        <Form.Item name="gender" label="Gender">
          <Radio.Group>
            <Radio value="Female">Female</Radio>
            <Radio value="Male">Male</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="Nid"
          rules={[
            {
              required: true,
              message: "National ID !",
            },
          ]}
        >
          <Input placeholder="National ID" />
        </Form.Item>
        <Form.Item
          name="passport_num"
          rules={[
            {
              required: false,
              message: "Passport number !",
            },
          ]}
        >
          <Input placeholder="Passport Number" />
        </Form.Item>
        <Form.Item
          name="address"
          rules={[
            {
              required: true,
              message: "Address Please !",
            },
          ]}
        >
          <Input placeholder="Address" />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: "Phone number Please !",
            },
          ]}
        >
          <Input placeholder="Phone" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: false,
              message: "Email Please !",
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="province"
          rules={[
            {
              required: true,
              message: "Province Please !",
            },
          ]}
        >
          <Input placeholder="Province" />
        </Form.Item>
        <Form.Item
          name="district"
          rules={[
            {
              required: true,
              message: "District Please !",
            },
          ]}
        >
          <Input placeholder="District" />
        </Form.Item>
        <Form.Item
          name="sector"
          rules={[
            {
              required: true,
              message: "Sector Please !",
            },
          ]}
        >
          <Input placeholder="Sector" />
        </Form.Item>
        <Form.Item
          name="cell"
          rules={[
            {
              required: true,
              message: "Cell Please !",
            },
          ]}
        >
          <Input placeholder="Cell" />
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

export default PatientForm
