import React, { useState } from "react"
import { Modal, Button } from "antd"
import classes from "./Medecine.module.css"
import { DeleteOutlined } from "@ant-design/icons"

const DeleteMedecine = () => {
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
        className={classes.deleteBtn}
      >
        <DeleteOutlined /> Delete
      </Button>
      <Modal
        title="Delete"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Delete"
      >
        <p className={classes.deleteErrorMessage}>
          Are You sure you want to delete this?
        </p>
      </Modal>
    </div>
  )
}

export default DeleteMedecine
