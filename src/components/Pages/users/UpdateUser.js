import React, { useState } from "react"
import { Drawer } from "antd"
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
      <>
        <button onClick={showDrawer} className={classes.editButton}>
          Edit
        </button>
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
