import React from "react";
import {connect} from "react-redux"
import {fetchStudentCourses, updateStudentDate, searchCourses, deleteCourse, addCourse}  from "../redux/actions/student"

import ProfileCard from "../components/profile-card"

class MainPage extends React.Component {
  state = {
    
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
        handleSearchCourse={value => this.props.dispatch(searchCourses(value))}
        handleDeleteCourse={crn => this.props.dispatch(deleteCourse(crn))}
        handleAddCourse={crn => this.props.dispatch(addCourse(crn))}
        handleFetchStudentCourses={() => this.props.dispatch(fetchStudentCourses())}/>
        
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
