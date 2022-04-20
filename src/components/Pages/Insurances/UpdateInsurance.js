import React, { useState } from "react"
import { Drawer, Button, Space } from "antd"
import InsuranceForm from "./InsuranceForm"
import classes from "./insurance.module.css"
import { EditOutlined } from "@ant-design/icons"

const UpdateInsurance = () => {
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
          title="Update Lab"
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
      </>
    </React.Fragment>
  )
}

export default UpdateInsurance
