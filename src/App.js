import React, { useState } from 'react'

import CourseInput from './components/CourseGoals/CourseInput/CourseInput'
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList'

import './App.css'

const App = () => {
	const [courseGoals, setCourseGoals] = useState([
		{ id: 1, goalText: 'Perform all goals!' },
		{ id: 2, goalText: 'Finish full course!' },
	])

	const addNewGoal = newGoal => {
		if (newGoal !== '') {
			setCourseGoals(prevState => {
				const newState = [...prevState, { id: Math.random(), goalText: newGoal }]
				console.log(newState)
				return newState
			})
		}
	}

  const deleteGoal = (id) => {
    setCourseGoals(prevState => {
      const newState = prevState.filter(goal => goal.id !== id)
      return newState
    })
  }

  let listContent = 'List of goals is empty'

  if (courseGoals.length > 0) {
    listContent = <CourseGoalList items={courseGoals} deleteGoal={deleteGoal}/>
  }

	return (
		<div>
			<section id='goal-form'>
				<CourseInput createGoal={addNewGoal} />
			</section>
			<section id='goals'>
        {listContent}
      </section>
		</div>
	)
}

export default App
