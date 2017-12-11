import React, {Component} from "react"
import {Card, Button} from 'antd';
import PropTypes from 'prop-types';

const gridStyle = {
    width: '25%',
    textAlign: 'center',
};

class HomeworkCardGridView extends Component{
    render(){
        const {data} = this.props
    return(
    <Card.Grid
        style={gridStyle}
        bodyStyle={{padding: 0}}
    >
    <div className="itu-logo">
        <img
            alt="homework"
            width="100%"
            src="http://www.itu.edu.tr/images/default-source/alt-sayfa-gorselleri/alt-sayfa.jpg?sfvrsn=0"
        />
    </div>
    {/* THIS PROPS DEGISECEK */}
    <div className="hw-card">
        <h3>{data.description}</h3> 
        <p> CRN: {data.crn} </p>
        <p>{data.homework_id}</p>
        <p>{data.deadline}</p>
        <div style={{ margin: "auto", textAlign: "center" }}>
        <Button
          shape="circle"
          type="primary"
          icon="check"
          size="large"
          style={{ backgroundColor: "green", borderColor: "green", margin: 10 }}
          onClick={data.onClick}
        />
        <Button
          shape="circle"
          type="primary"
          icon="close"
          size="large"
          style={{ backgroundColor: "red", borderColor: "red", margin: 10 }}
          onClick={data.onClick}
        />
      </div>
    </div>
    </Card.Grid>
);}}


export default HomeworkCardGridView;