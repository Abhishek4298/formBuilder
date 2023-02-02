import React from 'react'
import { useSelector } from 'react-redux'

function FormList() {
	const { formName, questions } = useSelector((state) => {
		return state
	})
	return (
		<div>
			<h2>{formName}</h2>
			<ul>
				{questions.map((question, index) => (
					<li key={index}>{question}</li>
				))}
			</ul>
		</div>
	)
}

export default FormList
