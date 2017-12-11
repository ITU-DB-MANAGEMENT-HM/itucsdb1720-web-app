import React from "react";
import DepartmentCardGridView from "../components/departments/department-cards"
import {connect} from "react-redux"
import {getFaculties} from "../redux/actions/deparments"
import {Card} from "antd"
import {Link} from "react-router-dom"
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
            <Card>
            {
            this.props.faculties && 
            this.props.faculties.map(item => (
                <div key = {item.objectID}>
                
                <DepartmentCardGridView data={item}/>
                
                </div>
            ))            
            }
            </Card>
        </div>
        
        
        
    );
}

export default connect(store =>{
    return{
        faculties: store.departments.faculties,
    }
})(Departments)