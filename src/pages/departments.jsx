import React from "react";
import DepartmentCardView from "../components/departments/department-cards"
import {connect} from "react-redux"
import {getFaculties} from "../redux/actions/deparments"
const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };

class Departments extends React.Component {

    componentDidMount()
    {
        this.props.dispatch(getFaculties())
    }
    handleClick = e => {
        alert("clicked on me");
        this.setState({...this.state, isOn:false})
    };
    render = () => (
        
        <div>
            
            {
            
            this.props.faculties && 
            this.props.faculties.map(item => (
                <div key = {item.objectID}>
                {item.name}
                </div>
            ))
            
            
            }
            {/* <DepartmentCardView /> */}

        </div>
        
        
        
    );
}

export default connect(store =>{
    return{
        faculties: store.departments.faculties,
    }
})(Departments)