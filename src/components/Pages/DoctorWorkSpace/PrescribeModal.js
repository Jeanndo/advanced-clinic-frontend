import React, { useState } from "react"
import { Modal } from "antd"
import PrescriptionForm from "./PrescribeForm"
import classes from "./workspace.module.css"

const PrescribeModal = () => {
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
      <button className={classes.prescribeBtn} onClick={showModal}>
        Prescribe Meds
      </button>
      <Modal
        title="Prescribe Medication"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
        footer={null}
      >
        <PrescriptionForm />
      </Modal>
    </React.Fragment>
  )
}

export default PrescribeModal
