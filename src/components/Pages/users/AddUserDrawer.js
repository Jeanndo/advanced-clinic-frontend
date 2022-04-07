import React, { useState } from "react"
import { Drawer, Button } from "antd"
import AddUser from "./AddUer"

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
        <Button type="primary" onClick={showDrawer}>
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
      </>
    </div>
  )
}

export default AddUserDrawer
