import React, { useState } from "react"
import { Drawer, Button, Space } from "antd"
import DoctorForm from "./DoctorForm"

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
      <>
        <Space>
          <Button type="primary" onClick={showDrawer}>
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
      </>
    </React.Fragment>
  )
}

export default DoctorDrawer
