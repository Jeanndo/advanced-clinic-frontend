import React, { useState } from "react"
import { Drawer, Button, Space } from "antd"
import BillForm from "./BillForm"
import classes from "./bill.module.css"
import { EditOutlined } from "@ant-design/icons"

const UpdateBill = () => {
  const [visible, setVisible] = useState(false)
  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (
    <React.Fragment>
      <>
        <Space>
          <Button
            type="primary"
            onClick={showDrawer}
            className={classes.updateBtn}
          >
            <EditOutlined />
            Edit
          </Button>
        </Space>
        <Drawer
          width={500}
          title="Update Bill"
          placement="right"
          onClose={onClose}
          visible={visible}
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
            </Space>
          }
        >
          <BillForm />
        </Drawer>
      </>
    </React.Fragment>
  )
}

export default UpdateBill
