import React from "react";
import {connect} from "react-redux"
import {fetchStudentCourses, updateStudentDate, searchCourses}  from "../redux/actions/student"
import {Card, Button, Spin} from "antd"

import ProfileCard from "../components/profile-card"

class MainPage extends React.Component {
  state = {
    
  }
  componentDidMount () {
    this.props.dispatch(fetchStudentCourses());
  }
  render = () => {
    if (!this.props.isLoggedIn) {
      return <div>Please log in!</div> 
    }
    const {user, fetchStudentIsLoading, updateStudentIsLoading, courses, searchCoursesData} = this.props;
    return <div>
      <ProfileCard user={user} courses={courses} searchCourses={searchCoursesData}
        fetchStudentIsLoading={fetchStudentIsLoading} 
        updateStudentIsLoading={updateStudentIsLoading}
        handleDateUpdate={(study_start, study_end) => {this.props.dispatch(updateStudentDate(study_start, study_end))}}
        handleSearchCourse={value => this.props.dispatch(searchCourses(value))}/>
    </div>
  }
}


export default connect(store => {
  return {
    // User
    user: store.student.user,
    isLoggedIn: store.student.isLoggedIn,
    fetchStudentIsLoading: store.student.fetchStudentIsLoading,
    updateStudentIsLoading: store.student.apiIsLoading.updateStudent,
    // Course
    courses: store.student.courses,
    searchCoursesData: store.student.searchCourses
  }
})(MainPage) 
