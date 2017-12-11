import React from "react"
import HomeworkCardGridView from "../components/homeworks/homework-cards"
import {connect} from "react-redux"
import {getHomeworks} from "../redux/actions/homeworks"
import {Card, Button} from "antd"
import HomeworkModal from "../components/homework-modal"

class Homeworks extends React.Component{
    state = {
        homeworks: [],
        isAddOpen: false
    }
    componentDidMount()
    {
        this.props.dispatch(getHomeworks())
        
    }
    render = () => (
      
        <div>
            <Card>
            {
            this.props.homeworks && 
            this.props.homeworks.map(item => (
                <div key = {item.objectID}>
                <HomeworkCardGridView data={{...item}} />
                </div>
            ))
          
            
            
            }

        </Card>
        <HomeworkModal
            visible ={this.state.isAddOpen}
            handleClick={fields => {
                this.setState({isAddOpen: false})
            }}
            handleCancel={() => {this.setState({isAddOpen: false})}}
        />
        <Button onClick={()=>this.setState({isAddOpen: true})} 
        size={"large"}
        >
        Add new homework
        </Button>
        </div>

)
}

export default connect(store => {
    return {
        homeworks: store.homeworks.homeworks
    }
})(Homeworks)