import React, { Component } from "react";
import { Modal, Input, Form, Icon } from "antd";

class HomeworkModal extends Component {
  static state = {
    crn: "",
    name: "",
    description: "",
    deadline: ""
  };
  handleClick = () => {
    const { form } = this.props;
    this.props.handleClick({
        
    crn: form.getFieldValue("crn"),
    name: form.getFieldValue("name"),
    description: form.getFieldValue("description"),
    deadline: form.getFieldValue("deadline")
    });
  };
  confirmUsername = (rule, value, callback) => {
    if (value.length > 15) {
      callback("Username too long! Are you trying to hack us?");
    } else {
      callback();
    }
  };
  isNumber = (rule, value, callback) => {
    let toCheck = parseInt(value, 10)
    if(toCheck > 0 && value==toCheck)
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
            {getFieldDecorator("name", {
              rules: [
                { required: true, message: "Enter name of homework" }
              ]
            })(<Input prefix={<Icon type="book" />} placeholder="name" />)}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator("crn", {
              rules: [
                { required: true, message: "Enter CRN of lesson" },
                {validator: this.isNumber}
              ]
            })(
              <Input
                prefix={<Icon type="book" />}
                placeholder="CRN"
              />
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator("deadline", {
              rules: [{ required: true, message: "Please write the deadline in YYYY-MM-DD" }]
            })(
              <Input
                prefix={<Icon type="calendar" />}
                placeholder="Deadline"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("description", {
              rules: [
                { required: false, message: "Enter name of homework" }
              ]
            })(<Input prefix={<Icon type="question-mark" />} placeholder="description" />)}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(HomeworkModal);
