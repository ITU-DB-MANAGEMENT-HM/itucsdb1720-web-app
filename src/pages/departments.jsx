import React from "react";
import DepartmentCardView from "../components/departments/department-cards"

const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };

class Departments extends React.Component {
    
    state = { isOn:true, departments: [ { card1:{
        title: "Computer Eng.",
        departmentIcon: "http://www.itu.edu.tr/images/default-source/alt-sayfa-gorselleri/alt-sayfa.jpg?sfvrsn=0",
        redirect: () => alert("xwd")
        },
        card2:{
            title: "Insaat ",
            departmentIcon: "http://www.itu.edu.tr/images/default-source/alt-sayfa-gorselleri/alt-sayfa.jpg?sfvrsn=0",
            redirect: () => alert('redirect to insaat deparments page')
        }} 
        ] 
    };

    handleClick = e => {
        alert("clicked on me");
        this.setState({...this.state, isOn:false})
    };
    render = () => (

        <div>
            {
            this.state.departments.map((item)=> 
            <div key={item.objectID}>
            <DepartmentCardView dpp={item} 
            style={gridStyle} />
            </div>
            
            
            )
        }
        </div>
        
        
        
    );
}

export default Departments;