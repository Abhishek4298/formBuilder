import { ADD_QUESTION, ADD_QUESTION_SUCCESS } from './types'

export const addQuestion = (question) => {
	return {
		type: ADD_QUESTION,
		payload: question,
	}
}

export const addQuestionSuccess = (question) => ({
	type: ADD_QUESTION_SUCCESS,
	question,
})
