import React from "react"
import HomeworkItem from "../components/homeworks/homework-timeline"
import {List} from 'antd'

class Homework extends React.Component{
    render = () => (
    <div>
    {
        <HomeworkItem />
    }
    </div>
)
}
export default Homework;