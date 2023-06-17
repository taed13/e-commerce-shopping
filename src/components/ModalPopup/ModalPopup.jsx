import React, { useState } from "react";
import { Button, Modal } from "antd";

const ModalPopup = () => {
  const [open, setOpen] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = () => {
    console.log("Clicked");
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);

    console.log("Clicked ok");
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
      <Modal
        title="Basic Modal"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default ModalPopup;
