import React from "react"
import {
  Form,
  Input,
  Button,
  Select,
  Radio,
  Checkbox,
  Row,
  Col,
  Typography,
} from "antd"
import classes from "./department.module.css"

const { Title } = Typography

const AddDepartment = () => {
  const [workIdGenerator, setWorkIdGenerator] = React.useState(false)
  const [passwordGenerator, setPasswordGenerator] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const onFinish = (values) => {
    console.log("Received values of form: ", values)
  }
  const generateWorkID = () => {
    setWorkIdGenerator((prev) => !prev)
  }
  const generatePassword = () => {
    setPasswordGenerator((prev) => !prev)
  }

  const handleLoading = () => {
    setLoading(true)
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
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          className={classes.AddUserFormRow}
        >
          <Col className="gutter-row" span={24}>
            <Title level={5} style={{ color: "#1890ff" }}>
              ADD USER
            </Title>
          </Col>
          <Col className="gutter-row" span={12}>
            <div>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "Your First Name Please",
                  },
                ]}
              >
                <Input placeholder="First Name" />
              </Form.Item>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[{ required: true, message: "Your Last Name Please!" }]}
              >
                <Input placeholder=" Last Name" />
              </Form.Item>
              <Form.Item
                label="National id"
                name="Nid"
                rules={[
                  {
                    required: true,
                    message: "Your National ID Please!",
                  },
                ]}
              >
                <Input placeholder="National ID" />
              </Form.Item>
              <Form.Item
                label="Job   Title"
                name="jobTitle"
                rules={[{ required: true, message: "Your Job Title Please!" }]}
              >
                <Input placeholder="Job Title" />
              </Form.Item>
              <Form.Item
                label="Role"
                name="role"
                rules={[{ required: true, message: "Choose  Role Please!" }]}
              >
                <Select placeholder="Gender">
                  <Select.Option value="Role">Role1</Select.Option>
                  <Select.Option value="demo">Role2</Select.Option>
                  <Select.Option value="demo">Role3</Select.Option>
                  <Select.Option value="demo">Role4</Select.Option>
                  <Select.Option value="demo">Role5</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Country"
                name="Country"
                rules={[{ required: true, message: "Your Country Please!" }]}
              >
                <Input placeholder="Country" />
              </Form.Item>
              <Form.Item
                label="Date Of Birth"
                name="dob"
                rules={[
                  { required: true, message: "Your Date of Birth Please !" },
                ]}
              >
                <Input type="Date" />
              </Form.Item>
            </div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div>
              <Form.Item name="gender" label="Gender">
                <Radio.Group>
                  <Radio value="Female">Female</Radio>
                  <Radio value="Male">Male</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                label="address"
                name="address"
                rules={[{ required: true, message: "Your Address Please !" }]}
              >
                <Input placeholder="Address" />
              </Form.Item>
              <Form.Item
                label="phone"
                name="phone"
                rules={[{ required: true, message: "Your Phone please !" }]}
              >
                <Input type="number" placeholder="Phone" />
              </Form.Item>
              <Form.Item
                label="Department ID"
                name="department_id"
                rules={[{ required: true, message: "Patient ID Please!" }]}
              >
                <Input type="number" placeholder="Patient ID" />
              </Form.Item>
              <Form.Item
                label="Work ID"
                name="work_id"
                rules={[{ required: true, message: "Work ID Please!" }]}
              >
                <Input
                  style={{
                    width: workIdGenerator
                      ? "calc(100% - 115px)"
                      : "calc(100% - 95px)",
                  }}
                  placeholder="Work ID"
                />
                <Button
                  type="primary"
                  loading={workIdGenerator}
                  onClick={generateWorkID}
                >
                  Generate
                </Button>
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Your Email please !" }]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: "Password please!" }]}
              >
                <Input.Password
                  style={{
                    width: passwordGenerator
                      ? "calc(100% - 115px)"
                      : "calc(100% - 95px)",
                  }}
                  placeholder="Password"
                />
                <Button
                  type="primary"
                  loading={passwordGenerator}
                  onClick={generatePassword}
                >
                  Generate
                </Button>
              </Form.Item>
            </div>
          </Col>
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
            <Form.Item label=" " colon={false}>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                onClick={handleLoading}
              >
                Add
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  )
}

export default AddDepartment
