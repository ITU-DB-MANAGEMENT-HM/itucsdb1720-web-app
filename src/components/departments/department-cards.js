import React, {Component} from 'react';
import {Card} from 'antd';
// import { List, message, Avatar, Spin } from 'antd';
import PropTypes from 'prop-types';
import './cardstyle.css'

const gridStyle = {
    width: '25%',
    textAlign: 'center',
};



class DepartmentCardGridView extends Component{
    
    render(){
        const {data} = this.props;
        return(
    <Card.Grid style={gridStyle}
    
    onClick={data.redirect}>
    <div className="test-card">
        <h4>{data.title}</h4>
    </div>
    <div className="department-icon">
        <img
        alt="test"
        width="100%"
        src={data.departmentIcon}
    />
    </div>
    </Card.Grid>
);}
};

class DepartmentCardView extends Component{
    render(){
        const {dpp} = this.props;
        return(
    <Card
    style={{ width: '95%' , textAlign:'center' }}
    bodyStyle={{ padding: 0 }}
    >
    <DepartmentCardGridView data={dpp.card1} />
    <DepartmentCardGridView data={dpp.card2} />
    
    </Card>
);}
}

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


// DepartmentCardView.defaultProps = {
//     title: "Computer Eng.",
//     departmentIcon: "http://www.itu.edu.tr/images/default-source/alt-sayfa-gorselleri/alt-sayfa.jpg?sfvrsn=0",
//     redirect: () => alert('redirect to deparments page')
// }

// DepartmentCardView.propTypes = {
//     title: PropTypes.string.isRequired,
//     departmentIcon: PropTypes.string.isRequired,
//     redirect: PropTypes.func.isRequired   
// }

export default DepartmentCardView;
// export default DepartmentCardGridView;