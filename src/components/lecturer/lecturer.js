import React, {Component} from 'react';
import {Card} from 'antd';
import PropTypes from 'prop-types';


class LecturerView extends Component{

    render(){
        const {data} = this.props;
        return(
            <h2>{data.title} {data.fname} {data.sname}</h2>
            <Icon type="mail">  </Icon>
        )
    }
}