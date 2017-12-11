import React, {Component} from 'react';
import {Card} from 'antd';
// import { List, message, Avatar, Spin } from 'antd';
import PropTypes from 'prop-types';
import './cardstyle.css'
import {Link} from "react-router-dom"
const gridStyle = {
    width: '25%',
    textAlign: 'center',
};



class DepartmentCardGridView extends Component{
    
    render(){
        const {data} = this.props;
        return(
    <Link to={'/lecturers/' + (data.id)}>
    <Card.Grid style={gridStyle}
    
    onClick={data.redirect}>
    <div className="test-card">
        <h4>{data.id}</h4>
    </div>
    <div className="department-icon">
        <img
        alt="test"
        width="100%"
        src={"http://tanitim.itu.edu.tr/images/librariesprovider51/Anasayfa-Fakulteler/fak-bilgisayar.png"}
    />
    </div>
    </Card.Grid>
    </Link>
);}
};


DepartmentCardGridView.defaultProps = {
    title: "Computerx Eng.",
    departmentIcon: "http://www.itu.edu.tr/images/default-source/alt-sayfa-gorselleri/alt-sayfa.jpg?sfvrsn=0",
    redirect: () => alert('redirect to deparments page')
}
DepartmentCardGridView.propTypes = {
    title: PropTypes.string.isRequired,
    departmentIcon: PropTypes.string.isRequired,
    redirect: PropTypes.func.isRequired
}

export default DepartmentCardGridView;
