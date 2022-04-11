import React, { useState } from "react"
import { Drawer, Button } from "antd"
import AddDepartment from "./AddDepartment"
import classes from "./department.module.css"
import { EditOutlined } from "@ant-design/icons"

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
        <Button
          type="primary"
          onClick={showDrawer}
          className={classes.updateBtn}
        >
          <EditOutlined />
          Edit
        </Button>
        <Drawer
          title="UPDATE DEPARTMENT"
          placement="right"
          onClose={onClose}
          visible={visible}
          width={700}
        >
          <AddDepartment />
        </Drawer>
      </>
    </div>
  )
}

export default AddDepartmentDrawer
