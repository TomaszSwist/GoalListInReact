import React, { useState } from 'react'

import Button from '../../UI/Button/Button'
import './CourseInput.css'

const CourseInput = props => {
	const [inputValue, setInputValue] = useState('')

	const handleInput = e => {
		setInputValue(e.target.value)
	}

	const handelAddGoal = e => {
		e.preventDefault()
		props.createGoal(inputValue)
		setInputValue('')
	}

	return (
		<form onSubmit={handelAddGoal}>
			<div className='form-control'>
				<label>New Course Goal</label>
				<input type='text' onChange={handleInput} value={inputValue} />
			</div>
			<Button type='submit'>
				Add Goal
			</Button>
		</form>
	)
}

export default CourseInput
