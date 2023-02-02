import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers/formBuilder";
import formBuilderSaga from "./sagas/formBuilder";

import FormBuilder from "./components/FormBuilder/FormBuilder";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(formBuilderSaga);

function App() {
  return (
    <Provider store={store}>
      <FormBuilder />
    </Provider>
  );
}

export default App;
