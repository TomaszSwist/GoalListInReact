import React from "react";

import './CourseGoalItem.css'

const CourseGoalItem =  props => {
    
    const deleteItem = () => {
        props.deleteGoal(props.id)
    }
    
    return (
        <li className="goal-item" onClick={deleteItem}>{props.text}</li>
    )
}

export default CourseGoalItem