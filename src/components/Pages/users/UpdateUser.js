import React, { useState } from "react"
import { Drawer, Button } from "antd"
import AddUser from "./AddUer"
import classes from "./users.module.css"
import { EditOutlined } from "@ant-design/icons"

const AddUserDrawer = () => {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  return (
    <div>
      <>
        <Button
          type="primary"
          onClick={showDrawer}
          className={classes.editButton}
        >
          <EditOutlined />
          Edit
        </Button>
        <Drawer
          title="ADD USER"
          placement="right"
          onClose={onClose}
          visible={visible}
          width={1200}
        >
          <AddUser />
        </Drawer>
      </>
    </div>
  )
}

export default AddUserDrawer
