import { ADD_QUESTION, SAVE_FORM, SET_FORM_NAME } from '../actions/types';

const initialState = {
  formName: '',
  questions: [],
};

const formBuilder = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_NAME:
      return {
        ...state,
        formName: action.payload,
      };
    case ADD_QUESTION:
      return {
        ...state,
        questions: [...state.questions, action.payload],
      };
    case SAVE_FORM:
      return {
        ...state,
        questions: [],
      };
    default:
      return state;
  }
};

export default formBuilder;
