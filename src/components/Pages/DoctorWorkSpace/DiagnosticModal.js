import React, { useState } from "react"
import { Modal } from "antd"
import DiagnosticForm from "./DiagnosticForm"
import classes from "./workspace.module.css"

const DiagnosticModal = () => {
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
      <button className={classes.diagnosticBtn} onClick={showModal}>
        Add Diagnosis
      </button>
      <Modal
        title="Add Diagnostic"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
        footer={null}
      >
        <DiagnosticForm />
      </Modal>
    </React.Fragment>
  )
}

export default DiagnosticModal
