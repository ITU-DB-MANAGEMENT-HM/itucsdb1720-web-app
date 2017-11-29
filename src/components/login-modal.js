import React from "react";
import { Modal, Input, Form } from "antd";

const LoginModal = ({ visible, handleLogin, handleCancel }) => {
  return (
    <Modal
      visible={visible}
      handleOkay={handleLogin}
      okText="Login"
      cancelText="cancel"
      handleCancel={handleCancel}
      width={100}
    >
      <Form>
        <Input type="text" placeholder="ITU NUMBER" />
        <Input type="password" placeholder="ITU PASSWORD" />
        <Input type="password" placeholder="ITU PIN" />
      </Form>
    </Modal>
  );
};

export default LoginModal;
