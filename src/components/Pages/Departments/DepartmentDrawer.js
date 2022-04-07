import React, { useState } from "react"
import { Drawer, Button } from "antd"
import AddDepartment from "./AddDepartment"

const AddDepartmentDrawer = () => {
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
          Add Department
        </Button>
        <Drawer
          title="ADD USER"
          placement="right"
          onClose={onClose}
          visible={visible}
          width={1200}
        >
          <AddDepartment />
        </Drawer>
      </>
    </div>
  )
}

export default AddDepartmentDrawer
