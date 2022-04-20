import React, { useState } from "react"
import { Drawer, Button, Space } from "antd"
import BillForm from "./BillForm"
import classes from "./bill.module.css"

const BillDrawer = () => {
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
          size="large"
          onClick={showDrawer}
          className={classes.addBtn}
        >
          Add Bill
        </Button>
      </Space>
      <Drawer
        width={500}
        title="Add Bill"
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
    </React.Fragment>
  )
}

export default BillDrawer
