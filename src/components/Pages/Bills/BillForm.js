import React from "react"
import { Form, Input, Button } from "antd"

const BillForm = () => {
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
          name="patient_id"
          rules={[
            {
              required: true,
              message: "Patient ID is Missing!",
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
          name="doctor_charge"
          rules={[
            {
              required: false,
              message: "Doctor Charge is Missing!",
            },
          ]}
        >
          <Input type="number" placeholder="Doctor Charge" />
        </Form.Item>
        <Form.Item
          name="medecine_charge"
          rules={[
            {
              required: false,
              message: "Medecine Charge is Missing!",
            },
          ]}
        >
          <Input type="number" placeholder="Medecine Charge" />
        </Form.Item>
        <Form.Item
          name="room_charge"
          rules={[
            {
              required: false,
              message: "Room Charge is Missing!",
            },
          ]}
        >
          <Input type="number" placeholder="Room Charge" />
        </Form.Item>
        <Form.Item
          name="operation_charge"
          rules={[
            {
              required: false,
              message: "Operation Charge is Missing!",
            },
          ]}
        >
          <Input type="number" placeholder="Operation Charge" />
        </Form.Item>
        <Form.Item
          name="nursing_charge"
          rules={[
            {
              required: false,
              message: "Nursing Charge is Missing!",
            },
          ]}
        >
          <Input type="number" placeholder="Nursing Charge" />
        </Form.Item>
        <Form.Item
          name="lab_charge"
          rules={[
            {
              required: false,
              message: "Lab Charge is Missing!",
            },
          ]}
        >
          <Input type="number" placeholder="Lab Charge" />
        </Form.Item>
        <Form.Item
          name="insurance_type"
          rules={[
            {
              required: false,
              message: "Insurance Charge is Missing!",
            },
          ]}
        >
          <Input type="number" placeholder="Insurance Charge" />
        </Form.Item>
        <Form.Item
          name="number_of_days"
          rules={[
            {
              required: true,
              message: "Number of days is Missing!",
            },
          ]}
        >
          <Input type="number" placeholder="Number of days " />
        </Form.Item>
        <Form.Item
          name="total_bill"
          rules={[
            {
              required: true,
              message: "Total Bill is Missing!",
            },
          ]}
        >
          <Input type="number" placeholder="Total Bill" />
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

export default BillForm
