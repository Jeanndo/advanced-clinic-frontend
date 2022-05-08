import React, { useState } from "react"
import { Drawer, Button, Space } from "antd"
import PatientForm from "./DoctorForm"
import classes from "./doctor.module.css"
import { EditOutlined } from "@ant-design/icons"

const UpdatedDoctor = () => {
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
          width={800}
          title="UPDATE DOCTOR"
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
      </>
    </React.Fragment>
  )
}

export default UpdatedDoctor
