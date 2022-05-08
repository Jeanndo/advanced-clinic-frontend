import React, { useState } from "react"
import { Drawer, Button, Space } from "antd"
import MedecineForm from "./MedecineForm"
import classes from "./Medecine.module.css"
import { EditOutlined } from "@ant-design/icons"

const UpdatedMedecine = () => {
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
          title="Update Medecine"
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

export default UpdatedMedecine
