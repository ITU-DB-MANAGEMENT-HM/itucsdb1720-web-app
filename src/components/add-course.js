import React, { Component } from "react";
import { Modal, Input, Form, Icon } from "antd";

class LoginModal extends Component {
  static state = {
    number: "",
    pass: "",
    pin: ""
  };
  handleLogin = () => {
    const { form } = this.props;
    this.props.handleLogin({
      username: form.getFieldValue("username"),
      password: form.getFieldValue("password"),
      pin: form.getFieldValue("pin")
    });
  };
  confirmUsername = (rule, value, callback) => {
    if (value.length > 15) {
      callback("Username too long! Are you trying to hack us?");
    } else {
      callback();
    }
  };
  render() {
    const { visible, handleCancel } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <Modal
        visible={visible}
        onOk={this.handleLogin}
        okText="Login"
        cancelText="cancel"
        onCancel={handleCancel}
        width={"50vh"}
        closable={false}
      >
        <Form>
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your ITU username!" },
                { validator: this.confirmUsername }
              ]
            })(<Input prefix={<Icon type="user" />} placeholder="username" />)}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your ITU password!" }
              ]
            })(
              <Input
                prefix={<Icon type="lock" />}
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator("pin", {
              rules: [{ required: true, message: "Please input your ITU pin!" }]
            })(
              <Input
                prefix={<Icon type="key" />}
                type="password"
                placeholder="Pin"
              />
            )}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(LoginModal);