import React from "react";
import DepartmentCardGridView from "../components/departments/department-cards"
import  {Table} from "antd"
import {connect} from "react-redux"
import {getFaculties, getLecturers, removeLecturer, addLecturer} from "../redux/actions/deparments"
import {Card, Icon} from "antd"
import { Button } from "antd/lib/radio";
import LecturerModal from "../components/lecturer-modal"
import { actions } from "../constants";

const actionTypes = actions.departments;

const columns = [{
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    }, {
    title: 'First name',
    dataIndex: 'fname',
    key: 'fname',
    }, {
    title: 'Surname',
    dataIndex: 'sname',
    key: 'sname',
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
class Departments extends React.Component {
    state = {
        isClicked: false,
        isModalOpen: false,
        lecturers: [],
        departments: [],
        openDepartment: -1
    }
    

    componentDidMount()
    {
        this.props.dispatch(getFaculties())
    }
    
    
    render = () => (
        
        
        <div>{ this.state.openDepartment !== -1 &&
        <Button onClick={()=>this.setState({isModalOpen: true})} 
        size={"large"}
        >
        Add new lecturer
        </Button>
    }
         <Card>   

            {

            !this.props.isClicked &&            
             this.props.faculties && 
            this.props.faculties.map(item => (
                <div key = {item.objectID}>
                
                <DepartmentCardGridView data={{...item,
                    onClick: () => {this.setState({openDepartment: item.id})
                        this.props.dispatch(getLecturers(item.id))}}}
                />
                
                </div>
            ))    

            }
            </Card>
            <LecturerModal
                visible={this.state.isModalOpen}
                handleClick={fields => {
                    this.props.dispatch(addLecturer({...fields, department_id: this.state.openDepartment}))
                    console.log(this.state.openDepartment)
                    this.setState({isModalOpen: false})
                }}
                handleCancel={() => {this.setState({isModalOpen: false})}}
            />
            {     
                <Table onRowClick={(item)=>this.props.dispatch(removeLecturer(item))} columns={columns} dataSource={this.props.lecturers}/>
            }
            
            { <Button onClick={() => {this.props.dispatch(getFaculties())
                                     this.setState({openDepartment: -1}) 
                                     }}>Go Back </Button>}
        
    </div>

    )
}

export default connect(store =>{
    return{
        faculties: store.departments.faculties,
        lecturers: store.departments.lecturers
    }
})(Departments)