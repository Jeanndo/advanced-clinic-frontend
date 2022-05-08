import React, { useState } from "react"
import { Drawer, Button, Space } from "antd"
import PatientForm from "./PatientForm"
import classes from "./style.module.css"

const UpdatedPatients = () => {
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
          <button onClick={showDrawer} className={classes.editButton}>
            Edit
          </button>
        </Space>
        <Drawer
          width={800}
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
      </>
    </React.Fragment>
  )
}

export default UpdatedPatients
