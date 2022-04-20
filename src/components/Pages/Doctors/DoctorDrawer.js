import React, { useState } from "react"
import { Drawer, Button, Space } from "antd"
import DoctorForm from "./DoctorForm"
import classes from "./doctor.module.css"

const DoctorDrawer = () => {
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
          size="large"
          type="primary"
          onClick={showDrawer}
          className={classes.addBtn}
        >
          Add Doctor
        </Button>
      </Space>
      <Drawer
        width={500}
        title="ADD DOCTOR"
        placement="right"
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
          </Space>
        }
      >
        <DoctorForm />
      </Drawer>
    </React.Fragment>
  )
}

export default DoctorDrawer
