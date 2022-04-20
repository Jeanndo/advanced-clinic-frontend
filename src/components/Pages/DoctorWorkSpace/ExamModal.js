import React, { useState } from "react"
import { Modal } from "antd"
import ExamForm from "./ExamForm"
import classes from "./workspace.module.css"

const ExamModal = () => {
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
    <React.Fragment>
      <button className={classes.examBtn} onClick={showModal}>
        Request an exam
      </button>
      <Modal
        title="Request an exam"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
        footer={null}
      >
        <ExamForm />
      </Modal>
    </React.Fragment>
  )
}

export default ExamModal
