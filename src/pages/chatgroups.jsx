import React from "react"
import {connect} from "react-redux"
import {getChatgroups, getMemberOfChatgroup, createChatgroup} from "../redux/actions/chatgroups"
import {Tabs, Button, Table, Icon, Input} from "antd"
const TabPane = Tabs.TabPane;
const columns = [{
    title: 'name',
    dataIndex: 'name',
    key: 'name',
    }, {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
    }, {
    title: 'ITU ID',
    dataIndex: 'id',
    key: 'id',
    },{
    title: 'E - mail',
    dataIndex: 'email',
    key: 'email',
    }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
       
        <span className="ant-divider" />
        <Icon type="delete" onClick={() => alert("click on row to click")}/>
        <span className="ant-divider" />
      </span>
    ),
  }];
class Chatgroups extends React.Component{

    state = {

        activeKey: 0,
        val: "asdas"
    }
    componentWillMount(){
        this.props.dispatch(getChatgroups())
        
    }
    onChange = (id) => {
        let cid = this.props.chatgroups[id].chatgroup_id
        this.props.dispatch(getMemberOfChatgroup(cid))
        this.setState({activeKey: id})
    }

    addChatgroup = (evt) => {
        let name = evt.target.value
        this.props.dispatch(createChatgroup(name))
    }
    addToChatgroup = (evt) => {
        let name = evt.target.value
        this.props.dispatch(createChatgroup(name))
    }

    render = () => (

        <div>
        <Input style={{ width: '20%' }} 
        onPressEnter={evt => this.addChatgroup(evt)} placeholder="name of chatgroup"/>
        <Tabs
          defaultActiveKey={"0"}
          hideAdd
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={console.log("wtf")}>
        {
            this.props.chatgroups.map((item) =>
            <TabPane tab={item.name} key={item.objectID}> 
            </TabPane>
            )
        }
        </Tabs>
        <Table columns={columns} dataSource={this.props.chatgroup_members}/>
        
        </div>   
    )
}









export default connect(store => {
    return {
        chatgroups: store.chatgroups.chatgroups,
        chatgroup_members: store.chatgroups.chatgroup_members
    }
})(Chatgroups)