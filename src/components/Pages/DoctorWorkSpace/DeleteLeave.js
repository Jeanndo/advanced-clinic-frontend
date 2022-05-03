import React, { useState } from "react"
import { Modal, Button } from "antd"
// import classes from "./supplier.module.css"
import { DeleteOutlined } from "@ant-design/icons"

const DeleteLeave = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <div>
      <Button
        type="primary"
        onClick={showModal}
        danger
        // className={classes.deleteBtn}
      >
        <DeleteOutlined /> Delete
      </Button>
      <Modal
        title="Delete a Leave"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Delete"
      >
          {/* className={classes.deleteErrorMessage} */}
        <p >
          Are You sure you want to delete this?
        </p>
      </Modal>
    </div>
  )
}

export default DeleteLeave
