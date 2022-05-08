import React, { useState } from "react"
import { Modal, Button } from "antd"
import classes from "./nurse.module.css"
import { PlusOutlined } from "@ant-design/icons"

const TestPatient = () => {

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
        className={classes.addButton}
      >
        <PlusOutlined /> Add Test
      </Button>
      <Modal
        title="Add"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Add"
        width={900}
      >
        <p className={classes.deleteErrorMessage}>
          Are You sure you want to delete this?
        </p>
      </Modal>
    </div>
  )
}

export default TestPatient
