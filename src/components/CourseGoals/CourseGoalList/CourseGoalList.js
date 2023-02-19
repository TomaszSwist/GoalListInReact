import React from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

import './CourseGoalList.css'

const CourseGoalList = props => {
    return (
        <ul className="goal-list">
            {props.items.map(item => <CourseGoalItem text={item.goalText} id={item.id} key={item.id} deleteGoal={props.deleteGoal}/>)}
            
        </ul>
    )
}

export default CourseGoalList