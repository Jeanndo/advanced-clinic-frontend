import React, { useState } from "react"
import { Drawer, Button, Space } from "antd"
import InsuranceForm from "./InsuranceForm"
import classes from "./insurance.module.css"

const InsuranceDrawer = () => {
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
          Add Insurance
        </Button>
      </Space>
      <Drawer
        width={500}
        title="Add Insurance"
        placement="right"
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
          </Space>
        }
      >
        <InsuranceForm />
      </Drawer>
    </React.Fragment>
  )
}

export default InsuranceDrawer
