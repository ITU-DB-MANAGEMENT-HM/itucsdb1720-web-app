import React from "react";
import DepartmentCardGridView from "../components/departments/department-cards"
import  {Table} from "antd"
import {connect} from "react-redux"
import {getFaculties, getLecturers, removeLecturer, addLecturer} from "../redux/actions/deparments"
import {Card, Icon} from "antd"
import { Button } from "antd/lib/radio";
import {LecturerModal} from "../components/homework-modal"
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
        departments: []
    }
    

    componentDidMount()
    {
        this.props.dispatch(getFaculties())
    }
    
    
    render = () => (
        
        
        <div>
        <Button onClick={()=>this.setState({isModalOpen: true})} 
        size={"large"}
        >
        Add new lecturer
        </Button>       
         <Card>   

            {

            !this.props.isClicked &&            
             this.props.faculties && 
            this.props.faculties.map(item => (
                <div key = {item.objectID}>
                
                <DepartmentCardGridView data={{...item,
                    onClick: () => this.props.dispatch(getLecturers(item.id))}}
                />
                
                </div>
            ))    

            }
            </Card>
            {     
                this.state.isClicked &&
                <Table onRowClick={(item)=>this.props.dispatch(removeLecturer(item))} columns={columns} dataSource={this.props.lecturers}/>
            }
            
            {<Button onClick={() => this.props.dispatch(getFaculties())}>Go Back </Button>}
        
    </div>

    )
}

export default connect(store =>{
    return{
        faculties: store.departments.faculties,
        lecturers: store.departments.lecturers
    }
})(Departments)