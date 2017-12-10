import React from "react"
import HomeworkCardGridView from "../components/homeworks/homework-cards"
import {connect} from "react-redux"
import {getHomeworks} from "../redux/actions/homeworks"
import {Card} from "antd"
class Homeworks extends React.Component{
    componentDidMount()
    {
        this.props.dispatch(getHomeworks())
    }
    render = () => (
    <div>
    <Card
        style={{ width: '95%' , textAlign:'center' }}
        bodyStyle={{ padding: 0 }}
        >
    {
       
        this.props.homeworks &&
        this.props.homeworks.map(item => {
            <div key = {item.objectID}>
                item.name
            </div>
        })
            
    }
    </Card>
    </div>
)
}

export default connect(store => {
    return {
        homeworks: store.homeworks
    }
})(Homeworks)