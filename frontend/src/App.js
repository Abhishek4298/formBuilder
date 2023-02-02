import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/formBuilder';
import FormBuilder from './components/FormBuilder/FormBuilder';
import FormList from './components/FormList/FormList';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <FormBuilder />
      <FormList />
    </Provider>
  );
}

export default App;
