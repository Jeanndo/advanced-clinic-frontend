import React, { useState } from "react"
import { Drawer, Button, Space } from "antd"
import LeaveForm from "./AbsanceRequest"
// import classes from "./supplier.module.css"
import { EditOutlined } from "@ant-design/icons"

const UpdateLeave = () => {
  const [visible, setVisible] = useState(false)
  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (
    <React.Fragment>
      <Space>
        <Button
          type="primary"
          onClick={showDrawer}
        //   className={classes.updateBtn}
        >
          <EditOutlined />
           update
        </Button>
      </Space>
      <Drawer
        width={800}
        title="Update a Leave"
        placement="right"
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
          </Space>
        }
      >
        <LeaveForm />
      </Drawer>
    </React.Fragment>
  )
}

export default UpdateLeave
