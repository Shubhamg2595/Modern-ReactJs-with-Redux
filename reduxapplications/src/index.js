import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App'
import reducers from './reducers'


ReactDOM.render(
    <Provider store={createStore(reducers)}>
    <App />
    </Provider>
    , document.querySelector('#root')
)


{/*
App Goals

1. understand the purpose of reducers
2.understand making api requests with Redux
3.understand purpose of redux Thunk

Informatio

1. Redux : the redux library
2. react-redux : integration layer between react and redux
3. axios: Helps us make network requests 
4. redux-thunk :
 Middleware to help us make requests in
 a redux application 




*/}