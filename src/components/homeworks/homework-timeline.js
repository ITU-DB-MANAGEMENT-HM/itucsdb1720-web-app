import React from "react"
import {Card} from 'antd';
import PropTypes from 'prop-types';

const gridStyle = {
    width: '25%',
    textAlign: 'center',
};

const HomeworkCardGridView = ({data}) => (

    <Card.Grid style={gridStyle}
    onClick={data.redirect} >
    <div className="HomeworkGrid">
        <h4>{data.lesson}</h4>
    <div className="homework">
        <img 
        alt="Homework"
        width="100%"
        src="http://www.itu.edu.tr/images/default-source/alt-sayfa-gorselleri/alt-sayfa.jpg?sfvrsn=0"
        />
    </div>
    </div>
    </Card.Grid>



)


export default HomeworkCardGridView;