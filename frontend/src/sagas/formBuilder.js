import { takeLatest, put, call } from 'redux-saga/effects'
import { ADD_QUESTION, ADD_QUESTION_SUCCESS } from '../actions/types'

function* addQuestionSaga(action) {
	try {
		// make API call to save the question
		// in this example, we'll just simulate a delay of 2 seconds
		yield call(() => new Promise((resolve) => setTimeout(resolve, 2000)))
		// dispatch the success action with the added question
		yield put(ADD_QUESTION_SUCCESS(action.payload))
	} catch (error) {
		// handle error
	}
}

export default function* formBuilderSaga() {
	yield takeLatest(ADD_QUESTION, addQuestionSaga)
}
