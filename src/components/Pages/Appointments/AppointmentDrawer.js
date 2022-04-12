import React, { useState } from "react"
import { Drawer, Button, Space } from "antd"
import AppointmentForm from "./AppointmentForm"

const AppointmentDrawer = () => {
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
          <Button type="primary" onClick={showDrawer}>
            Add Appointment
          </Button>
        </Space>
        <Drawer
          width={500}
          title="Add Appointment"
          placement="right"
          onClose={onClose}
          visible={visible}
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
            </Space>
          }
        >
          <AppointmentForm />
        </Drawer>
      </>
    </React.Fragment>
  )
}

export default AppointmentDrawer
