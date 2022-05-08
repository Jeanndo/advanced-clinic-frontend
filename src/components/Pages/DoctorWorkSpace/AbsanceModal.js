import React, { useState } from "react";
import AbsanceRequestForm from "./AbsanceRequest";
import { Modal, Button } from "antd";

const AbsanceModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <React.Fragment>
      <Button type="primary" onClick={showModal}>
        Leave of Absence
      </Button>
      <Modal
        title="Request Leave of Absence"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={600}
        footer={null}
      >
        <AbsanceRequestForm />
      </Modal>
    </React.Fragment>
  );
};
export default AbsanceModal;
