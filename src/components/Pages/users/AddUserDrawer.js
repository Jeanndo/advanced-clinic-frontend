import React, { useState } from "react"
import { Drawer, Button } from "antd"
import AddUser from "./AddUer"
import classes from "./users.module.css"

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
      <Button
        type="primary"
        size="large"
        onClick={showDrawer}
        className={classes.addBtn}
      >
        Add User
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
    </div>
  )
}

export default AddUserDrawer
