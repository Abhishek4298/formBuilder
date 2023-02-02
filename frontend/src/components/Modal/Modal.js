import React, { useState } from 'react'

const Modal = ({ onClose, onSubmit }) => {
	const [question, setQuestion] = useState('')
	const [answerType, setAnswerType] = useState('')
	const [choices, setChoices] = useState('')

	const handleQuestionChange = (event) => {
		setQuestion(event.target.value)
	}

	const handleAnswerTypeChange = (event) => {
		setAnswerType(event.target.value)
	}

	const handleChoicesChange = (event) => {
		setChoices(event.target.value)
	}

	const handleSubmit = () => {
		onSubmit({ question, answerType, choices })
	}

	return (
		<div className='modal'>
			<input
				type='text'
				placeholder='Question'
				value={question}
				onChange={handleQuestionChange}
			/>
			<select value={answerType} onChange={handleAnswerTypeChange}>
				<option value=''>Select Answer Type</option>
				<option value='text'>Text</option>
				<option value='multichoice'>Multichoice</option>
				<option value='single-select'>Single Select</option>
			</select>
			{answerType === 'multichoice' && (
				<textarea
					placeholder='Enter each choice in separate lines'
					value={choices}
					onChange={handleChoicesChange}
				/>
			)}
			<button onClick={handleSubmit}>Add</button>
			<button onClick={onClose}>Close</button>
		</div>
	)
}

export default Modal
