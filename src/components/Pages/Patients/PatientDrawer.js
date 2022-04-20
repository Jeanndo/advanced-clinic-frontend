// @ts-nocheck
import React, { useState } from "react"
import { Drawer, Button, Space } from "antd"
import PatientForm from "./PatientForm"
import classes from "./patient.module.css"

const PatientDrawer = () => {
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
          Add Patient
        </Button>
      </Space>
      <Drawer
        width={500}
        title="ADD PATIENT"
        placement="right"
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
          </Space>
        }
      >
        <PatientForm />
      </Drawer>
    </React.Fragment>
  )
}

export default PatientDrawer
