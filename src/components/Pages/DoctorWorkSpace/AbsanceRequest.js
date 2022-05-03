import React from "react";
import { Form, Input, Button } from "antd";

const AbsanceRequest = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
            name="fullname"
            rules={[{ required: true, message: "Please Enter your full Name" }]}
            style={{ display: "inline-block", width: "calc(50% - 8px)" }}
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="department"
            rules={[{ required: true, message: "Please Enter a Department" }]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
          >
            <Input placeholder="Department" />
          </Form.Item>
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item
            name="startDate"
            rules={[{ required: true, message: "Please enter a Start Date" }]}
            style={{ display: "inline-block", width: "calc(50% - 8px)" }}
          >
            <div>From</div>
            <Input type="date" placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="endDate"
            rules={[{ required: true, message: "Pleanse Entern end Date" }]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
          >
            <div>To</div>
            <Input type="date" placeholder="Department" />
          </Form.Item>
        </Form.Item>
        <Form.Item
          name="reason"
          rules={[
            {
              required: true,
              message: "Please input your  Reason",
            },
          ]}
        >
          <Input.TextArea rows="10" cols="60" placeholder="Reason" />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit Request
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};

export default AbsanceRequest;
