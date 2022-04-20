import React, { useState } from "react"
import { Drawer, Button, Space } from "antd"
import LabForm from "./LabForm"
import classes from "./lab.module.css"

const LabDrawer = () => {
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
            size="large"
            onClick={showDrawer}
            className={classes.addBtn}
          >
            Add Lab
          </Button>
        </Space>
        <Drawer
          width={500}
          title="Add Lab"
          placement="right"
          onClose={onClose}
          visible={visible}
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
            </Space>
          }
        >
          <LabForm />
        </Drawer>
      </>
    </React.Fragment>
  )
}

export default LabDrawer
