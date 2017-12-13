import React, { Component } from 'react';
import {Card, Button, DatePicker, Spin, Modal, Input} from "antd"
import moment from "moment"

import CourseTable from "./course-table"

class ProfileCard extends Component {
    state = {
        study_start: null,
        study_end: null,
        date_err: "",
        selectedCourse: null,
        addCourseModal: false,
        courseSearchVal: ""
    }
    componentDidMount() {
        this.props.handleSearchCourse();
        this.props.handleFetchStudentCourses();
    }
    render = () => {
        const {user, fetchStudentIsLoading, 
            updateStudentIsLoading, handleDateUpdate, courses, searchCourses, handleSearchCourse, handleDeleteCourse, handleAddCourse} = this.props;
        return <Card title="Study Profile"  style={{ width: "50%" }}>
        {
          !fetchStudentIsLoading ? 
          <div>
            <p><strong>ITU id: </strong>{user.id}</p>
            <p><strong>Username: </strong>{user.username}</p>
            <p><strong>Name: </strong>{user.name}</p>
            <p><strong>Email: </strong>{user.email}</p>

            <span><strong>Study Dates: </strong></span>
            <DatePicker.RangePicker
              style={{margin: "10px"}}
              ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
              showTime
              defaultValue={[moment(user.study_start), moment(user.study_end)]}
              format="YYYY/MM/DD HH:mm:ss"
              onOk={dates => {
                if (dates[0] && dates[1]) {
                  this.setState({study_start: dates[0].unix(), study_end: dates[1].unix()})
                }
              }}/>
              <br/>
              <Button size="small" type="primary" loading={updateStudentIsLoading} disabled={updateStudentIsLoading} style={{marginBottom: "10px"}} onClick={() => {
                const {study_start, study_end} = this.state;
                if (!study_start || !study_end) {
                  return this.setState({date_err: "Please select a date range!"})  
                }
                handleDateUpdate(study_start, study_end)
                this.setState({date_err: ""})
              }}>update</Button>
              <br/>
              <span style={{color: "red"}}><strong>{this.state.date_err}</strong></span>
          </div> : 
          <Spin/>
        }
        <hr/>
        <h2>Courses</h2>
        <CourseTable courses={courses} 
            handleCourseAction={(item) => handleDeleteCourse(item.crn)} 
            ActionComponent={(props) => <Button icon="delete" size={"small"} type="danger" ghost {...props}>Remove</Button>}/>

            <Modal
            visible={this.state.addCourseModal}
            onOk={() => {console.log("addCourse")}}
            okText="Add Course"
            cancelText="cancel"
            onCancel={() => this.setState({addCourseModal: false})}
            width={"70vh"}
            closable={false}>
                <Input placeholder="Search" 
                    onChange={(e) => this.setState({courseSearchVal: e.target.value})} 
                    style={{width: "50%", margin: "10"}}/>
                <Button icon="search" size={"small"} type="primary" 
                onClick={() => handleSearchCourse(this.state.courseSearchVal)}>Search</Button>
                <CourseTable courses={searchCourses} 
                    handleCourseAction={(item) => handleAddCourse(item.crn)}
                    ActionComponent={(props) => <Button icon="plus" size={"small"} type="primary" ghost {...props}>Add</Button>} />
            </Modal>
              
          
        
        <Button onClick={() => this.setState({addCourseModal: true})}>Add Course</Button>
      </Card>
    }
}

export default ProfileCard