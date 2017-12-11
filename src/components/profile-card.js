import React, { Component } from 'react';
import {Card, Button, DatePicker, Spin, Select} from "antd"
import moment from "moment"

import CourseTable from "./course-table"

class ProfileCard extends Component {
    state = {
        study_start: null,
        study_end: null,
        date_err: "",
        selectedCourse: null,
    }
    render = () => {
        const {user, fetchStudentIsLoading, updateStudentIsLoading, handleDateUpdate, courses, searchCourses, handleSearchCourse} = this.props;
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
        <CourseTable courses={courses} handleCourseRemove={(c) => console.log(c)}/>
        <Select
          mode="combobox"
          size={"large"}
          onChange={(value, label) => {
            console.log(value, label);
          }}
          onSearch={(value) => {
            console.log(value)
            handleSearchCourse(value);
          }}
          style={{ width: "100%" }}
        >
          {
              searchCourses && searchCourses.map((sc) => <Select.Option key={sc.name}>{sc.name}</Select.Option>)
          }
        </Select>
        <Button>Add Course</Button>
      </Card>
    }
}

export default ProfileCard