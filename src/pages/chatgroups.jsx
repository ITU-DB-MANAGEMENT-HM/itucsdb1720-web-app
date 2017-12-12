import React from "react"
import {connect} from "react-redux"
import { Carousel } from 'antd';
import {getChatgroups} from "../redux/actions/chatgroups"
class Chatgroups extends React.Component{

    state = {
        chatgroups: []
    }
    componentWillMount(){
        this.props.dispatch(getChatgroups())
    }

    render = () => (

        <div>
        <Carousel>
        {
            this.props.homeworks && 
            this.props.chatgroups.map((item) =>
            console.log(item)
            )
        }
  </Carousel>

        </div>   
    )
}










export default connect(store => {
    return{
        chatgroups: store.chatgroups.chatgroups
    }
})(Chatgroups)