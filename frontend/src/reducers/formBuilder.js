import { ADD_QUESTION, ADD_QUESTION_SUCCESS, SAVE_FORM, SET_FORM_NAME } from "../actions/types";

const initialState = {
  formName: "",
  questions: [],
  formSlug: "",
};

const formBuilderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      // ...
      return state;
    case ADD_QUESTION_SUCCESS:
      return {
        ...state,
        questions: [...state.questions, action.question],
      };
    case SAVE_FORM:
      // ...
      return state;
    case SET_FORM_NAME:
      // ...
      return state;
    default:
      return state;
  }
};

export default formBuilderReducer;
