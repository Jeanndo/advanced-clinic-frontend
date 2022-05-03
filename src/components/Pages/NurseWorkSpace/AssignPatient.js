import React, { useState } from "react"
import { Modal, Button } from "antd"
import classes from "./nurse.module.css"
import { ArrowRightOutlined } from "@ant-design/icons"

const AssignPatient = () => {
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
        <ArrowRightOutlined /> Assign
      </Button>
      <Modal
        title="Assign"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Assign"
        width={900}
      >
        <p className={classes.deleteErrorMessage}>
          Are You sure you want to delete this?
        </p>
      </Modal>
    </div>
  )
}

export default AssignPatient
