import React, { useState } from "react"
import { Modal } from "antd"
import ExamResult from "./PrintResult"
import classes from "./workspace.module.css"

const ResultModal = () => {
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
      <button className={classes.exmaBtn} onClick={showModal}>
        Exam Result
      </button>
      <Modal
        title="Exam Result"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1200}
        footer={null}
      >
        <ExamResult />
      </Modal>
    </React.Fragment>
  )
}

export default ResultModal
