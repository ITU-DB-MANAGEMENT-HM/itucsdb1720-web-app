import React from "react";
import {connect} from "react-redux"
import {fetchStudentCourses}  from "../redux/actions/student"
import {Card, Button, DatePicker} from "antd"
import moment from "moment"

class MainPage extends React.Component {
  state = {
    isCourseModalOpen: false
  }
  componentDidMount () {
    this.props.dispatch(fetchStudentCourses());
  }
  render = () => {
    if (!this.props.isLoggedIn) {
      return <div>Please log in!</div> 
    }
    const {user} = this.props;
    return <div>
       <Card title={user.username}  style={{ width: 500 }}>
          <p><strong>ITU id: </strong>{user.id}</p>
          <p><strong>Name: </strong>{user.name}</p>
          <p><strong>Email: </strong>{user.email}</p>

          <DatePicker.RangePicker
            style={{margin: "20px"}}
            ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
            showTime
            format="YYYY/MM/DD HH:mm:ss"
            onChange={(dates) => {
              console.log(dates);
            }}/>

          <hr/>
          <h2>Courses</h2>
          {
            this.props.courses && this.props.courses.map((elem, key) => <p key={"key" + key}>
              {elem.course}
              <Button size={"small"} type="danger" ghost style={{margin: "20px"}}>Remove</Button>
            </p>)
          }
          <Button>Add Course</Button>
        </Card>
    </div>
  }
}


export default connect(store => {
  return {
    user: store.student.user,
    isLoggedIn: store.student.isLoggedIn,
    courses: store.student.courses,
  }
})(MainPage) 
