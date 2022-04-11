import React, { useState } from "react"
import { Drawer, Button, Space } from "antd"
import MedecineForm from "./MedecineForm"

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
            Add Medecine
          </Button>
        </Space>
        <Drawer
          width={500}
          title="Add Medecine"
          placement="right"
          onClose={onClose}
          visible={visible}
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
            </Space>
          }
        >
          <MedecineForm />
        </Drawer>
      </>
    </React.Fragment>
  )
}

export default DoctorDrawer
