import React, { Component } from "react";
import { Modal, Input, Form, Icon } from "antd";
import { Menu, Dropdown, message } from 'antd';

class LecturerModal extends Component {
  static state = {
    title: "",
    fname: "",
    sname: "",
    email: "",
    department: ""
  };
  handleClick = () => {
    const { form } = this.props;
    this.props.handleClick({
    title: form.getFieldValue("title"),    
    fname: form.getFieldValue("fname"),
    sname: form.getFieldValue("sname"),
    email: form.getFieldValue("email"),
    department: form.getFieldValue("department")
    });
  };
  
  isNumber = (rule, value, callback) => {
    let toCheck = parseInt(value, 10)
    if(toCheck > 0 && value==toCheck && toCheck < 19)
        callback()
    else
        callback("Please positive integers, we are not f00lz w00t")
}
  render() {
    const { visible, handleCancel } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <Modal
        visible={visible}
        onOk={this.handleClick}
        okText="Add"
        cancelText="cancel"
        onCancel={handleCancel}
        width={"50vh"}
        closable={false}
      >
        <Form>
          <Form.Item>
            {getFieldDecorator("fname", {
              rules: [
                { required: true, message: "First name of lecturer" }
              ]
            })(<Input prefix={<Icon type="" />} placeholder="fname" />)}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator("sname", {
              rules: [
                { required: true, message: "Surname of lecturer" }
              ]
            })(<Input prefix={<Icon type="" />} placeholder="sname" />)}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator("email", {
              rules: [
                { required: true, message: "Email are important :)" },
                
              ]
            })(
              <Input
                prefix={<Icon type="mail" />}
                placeholder="mail"
              />
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator("title", {
              rules: [{ required: true, message: "Title of lecturer, Prof, Assoc etc." }]
            })(
              <Input
                prefix={<Icon type="" />}
                placeholder="title"
              />
            )}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
};

export default Form.create()(LecturerModal);
